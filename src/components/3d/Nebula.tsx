import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Nebula() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const pointsCount = 1200;
  const positions = new Float32Array(pointsCount * 3);

  for (let i = 0; i < pointsCount * 3; i += 3) {
    const radius = 4 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
  }

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          size={0.035}
          sizeAttenuation={true}
          color="#c084fc"
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
