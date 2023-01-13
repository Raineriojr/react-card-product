import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { SwordModel } from '../assets/convertedmodels/Sword';

import './style.css';

export const SwordScene = ({isRotate}: {isRotate: boolean}) => {
  return (
    <Canvas
      camera={{ position: [100, 0, -20], fov: 20 }}
      className='canva'
    >
      <ambientLight intensity={1} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <SwordModel position={[0, -3, 0]}/>
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