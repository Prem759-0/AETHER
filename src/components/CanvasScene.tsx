import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import Nebula from './3d/Nebula';

export default function CanvasScene() {
  return (
    <div className="h-screen w-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
          
          <Nebula />
          <Stars radius={300} depth={60} count={800} factor={4} saturation={0} fade />
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={25}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[3px] text-white/40 font-mono">
        DRAG TO EXPLORE • SCROLL TO JOURNEY
      </div>
    </div>
  );
}
