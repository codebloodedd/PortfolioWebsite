// src/components/canvas/MultiBall.jsx
import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

/** A single interactive ball */
function BallItem({ tex, position, radius, setDragging, zJitter = 0 }) {
  const meshRef = useRef();
  const last = useRef([0, 0]);
  const dragging = useRef(false);

  const onDown = (e) => {
    dragging.current = true;
    last.current = [e.clientX, e.clientY];
    setDragging(true);
    // strong capture so OrbitControls won't steal the drag
    e.target.setPointerCapture?.(e.pointerId);
    e.stopPropagation();
    document.body.style.cursor = "grabbing";
  };

  const onMove = (e) => {
    if (!dragging.current || !meshRef.current) return;
    const [lx, ly] = last.current;
    const dx = e.clientX - lx;
    const dy = e.clientY - ly;

    // make rotation feel easier to do
    meshRef.current.rotation.y += dx * 0.02;
    meshRef.current.rotation.x += dy * 0.02;

    last.current = [e.clientX, e.clientY];
    e.stopPropagation();
  };

  const endDrag = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    setDragging(false);
    e.target.releasePointerCapture?.(e.pointerId);
    document.body.style.cursor = "auto";
  };

  return (
    <Float
      speed={1}
      rotationIntensity={0.6}
      floatIntensity={1.1}
      position={[position[0], position[1], zJitter]}
    >
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={radius * 2}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={endDrag}
        onPointerOut={endDrag}
        onPointerOver={() => (document.body.style.cursor = "grab")}
        onPointerLeave={() => (document.body.style.cursor = "auto")}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={tex}
        />
      </mesh>
    </Float>
  );
}

function BallsScene({ items, cols, radius, spacing, setDragging }) {
  const textures = useTexture(items.map((i) => i.icon));

  // grid positions, centered with stronger spacing
  const positions = useMemo(() => {
    const rows = Math.ceil(items.length / cols);
    const coords = [];
    for (let i = 0; i < items.length; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;
      const x = (c - (cols - 1) / 2) * spacing;
      const y = ((rows - 1) / 2 - r) * spacing;
      coords.push([x, y, 0]);
    }
    return coords;
  }, [items.length, cols, spacing]);

  // tiny z jitter so spheres never visually fuse
  const zJitters = useMemo(
    () => textures.map((_, i) => (i % 2 === 0 ? 1 : -1) * 0.15),
    [textures]
  );

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 2]} intensity={0.6} />
      {textures.map((tex, i) => (
        <BallItem
          key={i}
          tex={tex}
          position={positions[i]}
          radius={radius}
          zJitter={zJitters[i]}
          setDragging={setDragging}
        />
      ))}
    </>
  );
}

/**
 * MultiBallCanvas – one canvas per group.
 * Tweak defaults below if you want tighter or looser layouts.
 */
export default function MultiBallCanvas({
  items,
  cols = 6,
  radius = 0.1, // smaller balls (~half of your last screenshot)
  spacing = 100, // more distance so they never touch
  heightClass = "h-40 sm:h-48 md:h-56",
}) {
  const [dragging, setDragging] = useState(false);

  return (
    <div className={`w-full ${heightClass}`}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power", antialias: true }}
        camera={{ position: [0, 0, 12], fov: 35 }} // a bit farther back
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* disable orbit while dragging a ball */}
          <OrbitControls
            enabled={!dragging}
            enableZoom={false}
            rotateSpeed={0.6}
          />
          <BallsScene
            items={items}
            cols={cols}
            radius={radius}
            spacing={spacing}
            setDragging={setDragging}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
