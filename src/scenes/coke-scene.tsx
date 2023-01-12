import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { CokeModel } from '../assets/convertedmodels/Coke';

import './style.css';

export const CokeScene = ({isRotate}: {isRotate: boolean}) => {
  return (
    <Canvas
      camera={{ position: [120, 0, 0], fov: 120 }}
      className='canva'
    >
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.5} />

      <Suspense fallback={null}>
        <CokeModel position={[0, -3, 0]}/>
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