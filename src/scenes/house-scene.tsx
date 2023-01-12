import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { HouseModel } from '../assets/convertedmodels/House';

import './style.css';

export const HouseScene = ({isRotate}: {isRotate: boolean}) => {
  return (
    <Canvas
      camera={{ position: [100, 0, 0], fov: 10 }}
      className='canva'
    >
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <HouseModel position={[0, -3, 0]}/>
      </Suspense>
      
      <OrbitControls 
        autoRotate
        enableRotate={isRotate}
        enablePan={false}
        enableZoom={false}
        maxAzimuthAngle={Math.PI*2}
        panSpeed={0.5}
      />
    </Canvas>
  )
}