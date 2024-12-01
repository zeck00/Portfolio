import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      const time = clock.getElapsedTime();
      sphereRef.current.rotation.x = time * 0.1;
      sphereRef.current.rotation.y = time * 0.15;
      sphereRef.current.position.y = Math.sin(time * 0.4) * 0.2;
    }
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#1a1a1a"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
          opacity={0.7}
          transparent
        />
      </Sphere>
      
      <Sphere args={[0.5, 48, 48]} position={[-2.5, -1, -2]} scale={1.2}>
        <MeshDistortMaterial
          color="#0f0f0f"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.3}
          metalness={0.7}
          opacity={0.5}
          transparent
        />
      </Sphere>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black to-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <pointLight position={[-10, -10, -5]} intensity={0.1} color="#1a1a1a" />
        
        <fog attach="fog" args={['#000000', 3.5, 15]} />
        
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
