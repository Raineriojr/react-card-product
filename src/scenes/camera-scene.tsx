import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { CameraModel } from '../assets/convertedmodels/Camera';

import './style.css';

export const CameraScene = ({isRotate}: {isRotate: boolean}) => {
  return (
    <Canvas
      camera={{ position: [100, 10, -40], fov: 20 }}
      className='canva'
    >
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <CameraModel position={[0, -3, 0]}/>
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