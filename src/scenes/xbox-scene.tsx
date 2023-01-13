import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { XboxModel } from '../assets/convertedmodels/Xbox';

import './style.css';

export const XboxScene = ({ isRotate }: { isRotate: boolean }) => {
 
  return (
    <Canvas
      camera={{ position: [80, 35, -20], fov: 20 }}
      className='canva'
    >
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <XboxModel position={[0, -3, 0]} />
      </Suspense>

      <OrbitControls
        autoRotate
        enableRotate={isRotate}
        enablePan={false}
        enableZoom={true}
        maxAzimuthAngle={Math.PI * 2}
        panSpeed={0.5}
      />
    </Canvas>
  )
}