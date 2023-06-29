import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

import { useFrame } from '@react-three/fiber'
import { useRef } from "react";

const Ball = (props) => {
  const [decal] =useTexture([props.imgUrl]);

  // const meshRef = useRef();
  // const maxRotationAngleX = Math.PI / 8;
  // const maxRotationAngleY = 0;
  // const maxRotationAngleZ = 0;
  // useFrame(() => {
  //   if (meshRef.current) {
  //     // Modify the rotation values as per your requirements
  //     meshRef.current.rotation.x += 0.01; // Partial rotation around the x-axis
  //     // meshRef.current.rotation.y += 0.01; // Partial rotation around the y-axis
  //     // meshRef.current.rotation.z += 0.01; // Partial rotation around the z-axis

  //     // Check if the rotation exceeds the maximum angle
  //     if (meshRef.current.rotation.x > maxRotationAngleX) {
  //       meshRef.current.rotation.x = maxRotationAngleX;
  //     }
  //     if (meshRef.current.rotation.y > maxRotationAngleY) {
  //       meshRef.current.rotation.y = maxRotationAngleY;
  //     }
  //     if (meshRef.current.rotation.z > maxRotationAngleZ) {
  //       meshRef.current.rotation.z = maxRotationAngleZ;
  //     }
  //   }
  // });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation={[2*Math.PI,0,6.25]} flatShading map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) =>{
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas