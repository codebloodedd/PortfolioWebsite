import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.6}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.1}>
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
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Lazy mount the Canvas when in view to avoid exceeding WebGL context limits
const BallCanvas = ({ icon }) => {
  const holderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px 200px 0px", threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={holderRef} className="w-full h-full">
      {visible ? (
        <Canvas
          // NOTE: lowercase prop
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{
            powerPreference: "low-power",
            antialias: true,
            preserveDrawingBuffer: false,
          }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      ) : (
        // lightweight placeholder while offscreen
        <div className="w-full h-full rounded-full bg-white/5 border border-white/10" />
      )}
    </div>
  );
};

export default BallCanvas;
