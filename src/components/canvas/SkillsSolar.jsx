// src/components/canvas/SkillsSolar.jsx
import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Html,
  Float,
  Billboard,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

/** ------------------------------------------------------------------
 * Pick logo technique:
 *  "keyed-plane" (default) - billboarded plane with shader that drops near-black
 *  "plain-plane"           - billboarded plane, needs true PNG alpha
 *  "sprite"                - native Sprite (needs true PNG alpha)
 * ------------------------------------------------------------------ */
const LOGO_TECHNIQUE = "keyed-plane"; // "keyed-plane" | "plain-plane" | "sprite"

/* ------------ Camera focuser ------------ */
function CameraFocuser({ rings, activeIndex }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  const y = 4.25;

  useFrame(() => {
    const r = rings?.[activeIndex]?.radius ?? 6;
    const z = r + 4.5;
    target.current.set(0, y, z);
    camera.position.lerp(target.current, 0.08);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ---------- Shader material that chroma-keys near-black pixels ---------- */
function useKeyedMaterial(map, threshold = 0.1) {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: map },
        uThresh: { value: threshold },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uThresh;
        varying vec2 vUv;

        // soft circular falloff around the logo (emboss/sticker look)
        float circleMask(vec2 uv, float radius, float softness) {
          vec2 c = uv - 0.5;
          float d = length(c);
          return smoothstep(radius, radius - softness, d);
        }

        void main() {
          vec4 tex = texture2D(uMap, vUv);

          // drop near-black (kills black matte on non-alpha PNGs)
          if (tex.r < uThresh && tex.g < uThresh && tex.b < uThresh) discard;

          // round the card into a circle and feather the edge
          float mask = circleMask(vUv, 0.49, 0.06); // radius ~0.49, 6% feather
          if (mask <= 0.001) discard;

          // keep original color; use mask as alpha so it "melts" into the ball
          gl_FragColor = vec4(tex.rgb, mask);
        }
      `,
      transparent: true,
      depthTest: true,
      depthWrite: true, // helps it feel attached to surface
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
  }, [map, threshold]);

  useEffect(() => () => material.dispose(), [material]);
  return material;
}

/* ------------ Native sprite logo (no drei Sprite import needed) ------------ */
function SpriteLogo({ map, scale = 0.9, position = [0, 0, 0.99] }) {
  const material = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map,
        transparent: true,
        alphaTest: 0.5,
        depthTest: true,
        depthWrite: false,
      }),
    [map]
  );
  useEffect(() => () => material.dispose(), [material]);
  return (
    <sprite
      material={material}
      position={position}
      scale={[scale, scale, 1]}
      renderOrder={3}
    />
  );
}

/* ---------------- Planet ---------------- */
function Planet({
  tex,
  label,
  radius = 4,
  size = 0.34,
  baseAngle = 0,
  speed = 0.25,
  dim = false,
}) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const angleRef = useRef(baseAngle);

  useFrame((_, delta) => {
    if (!paused) angleRef.current += speed * delta;
    const a = angleRef.current;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    groupRef.current?.position.set(x, 0, z);
    groupRef.current?.lookAt(0, 0, 0);
  });

  const s = hovered ? size * 1.12 : size;

  // keyed-plane material (kills black boxes)
  const keyedMat = useKeyedMaterial(tex, 0.12);

  return (
    <group ref={groupRef}>
      <Float
        speed={1}
        rotationIntensity={hovered ? 1.1 : 0.6}
        floatIntensity={1}
      >
        <mesh
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
          onClick={(e) => {
            e.stopPropagation();
            setPaused((p) => !p);
          }}
          scale={s * 2}
          castShadow
          receiveShadow
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={dim ? "#e9e5de" : "#fff8eb"}
            flatShading
            transparent
            opacity={dim ? 0.55 : 1}
          />

          {/* ---- LOGO: technique switch ---- */}
          {LOGO_TECHNIQUE === "keyed-plane" && (
            <Billboard /* faces camera always */>
              <mesh
                position={[0, 0, 0.9995]} // almost flush with sphere
                scale={0.95}
                renderOrder={2}
              >
                <planeGeometry args={[0.9, 0.9]} />
                {/* keyed material from above for emboss + black kill */}
                <primitive attach="material" object={keyedMat} />
              </mesh>
            </Billboard>
          )}

          {LOGO_TECHNIQUE === "plain-plane" && (
            <Billboard>
              <mesh position={[0, 0, 0.900]} scale={0.95} renderOrder={2}>
                <planeGeometry args={[0.9, 0.9]} />
                <meshBasicMaterial
                  map={tex}
                  transparent
                  alphaTest={0.5}
                  depthTest
                  depthWrite={false}
                  polygonOffset
                  polygonOffsetFactor={-2}
                />
              </mesh>
            </Billboard>
          )}

          {LOGO_TECHNIQUE === "sprite" && (
            <SpriteLogo map={tex} scale={0.9} position={[0, 0, 0.99]} />
          )}
        </mesh>

        {hovered && (
          <Html distanceFactor={8} position={[0, s * 1.9, 0]} center>
            <div className="px-2 py-1 text-xs rounded-md border border-white/10 bg-white/10 backdrop-blur text-white/90">
              {label}
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
}

/* ---------------- Ring ---------------- */
function Ring({ items, radius, speed, active }) {
  const textures = useTexture(items.map((i) => i.icon));
  textures.forEach((t) => {
    if (!t) return;
    t.colorSpace = THREE.SRGBColorSpace;
    t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 8;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.format = THREE.RGBAFormat;
    t.needsUpdate = true;
  });

  const planets = useMemo(() => {
    const n = items.length || 1;
    return items.map((it, i) => ({ ...it, baseAngle: (i / n) * Math.PI * 2 }));
  }, [items]);

  const sizeActive = 0.42;
  const sizeInactive = 0.14;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.035, radius + 0.035, 96]} />
        <meshBasicMaterial
          color="white"
          transparent
          opacity={active ? 0.12 : 0.04}
        />
      </mesh>

      {planets.map((p, i) => (
        <Planet
          key={p.name + i}
          tex={textures[i]}
          label={p.name}
          radius={radius}
          baseAngle={p.baseAngle}
          speed={speed}
          size={active ? sizeActive : sizeInactive}
          dim={!active}
        />
      ))}
    </group>
  );
}

/* ---------------- Canvas wrapper ---------------- */
export default function SkillsSolarCanvas({
  rings,
  activeIndex = 0,
  heightClass = "h-[520px] sm:h-[560px] md:h-[620px]]",
}) {
  return (
    <div className={`w-full ${heightClass}`}>
      <Canvas
        frameloop="always"
        dpr={[1, 1.75]}
        gl={{ powerPreference: "low-power", antialias: true }}
        camera={{ position: [0, 4.25, 10.5], fov: 45 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <CameraFocuser rings={rings} activeIndex={activeIndex} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[4, 6, 8]} intensity={0.7} />
          <directionalLight position={[-4, -2, -6]} intensity={0.2} />
          <OrbitControls enableZoom={false} rotateSpeed={0.55} />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.25, 0]}>
            <circleGeometry args={[12, 64]} />
            <meshBasicMaterial color="white" transparent opacity={0.02} />
          </mesh>

          {rings.map((r, idx) => (
            <Ring
              key={r.name}
              items={r.items}
              radius={r.radius}
              speed={r.speed}
              active={idx === activeIndex}
            />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
