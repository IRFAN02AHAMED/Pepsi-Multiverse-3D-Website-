"use client";

import { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PepsiCan3DProps {
  flavorId: string;
  highIllumination?: boolean;
}

const textureMap: Record<string, string> = {
  original: "/textures/can/original.png",
  "zero-sugar": "/textures/can/zero.png",
  "wild-cherry": "/textures/can/cherry.png",
  lime: "/textures/can/lime.png",
  mango: "/textures/can/mango.png",
  blue: "/textures/can/blue.png",
  "electric-limited": "/textures/can/blue.png",
  "nitro": "/textures/can/blue.png",
};

const getAuthenticTexture = (flavorId: string) => {
  if (flavorId === "vanilla") {
    const svg = `
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" fill="#f3e5ab" />
        <circle cx="256" cy="200" r="130" fill="#005cb4" />
        <path d="M126 200 Q256 110 386 200 Q256 290 126 200" fill="#ffffff" />
        <path d="M126 200 Q256 290 386 200 L386 330 Q256 420 126 330 Z" fill="#e31837" />
        <text x="256" y="420" font-family="Arial" font-size="60" font-weight="bold" fill="#005cb4" text-anchor="middle">Vanilla</text>
        <text x="256" y="480" font-family="Arial" font-size="28" font-weight="900" fill="#005cb4" text-anchor="middle" letter-spacing="12">PEPSI</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }
  if (flavorId === "max") {
    const svg = `
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" fill="#000000" />
        <circle cx="256" cy="256" r="180" fill="#005cb4" />
        <path d="M76 256 Q256 100 436 256 Q256 412 76 256" fill="#ffffff" />
        <path d="M76 256 Q256 412 436 256 L436 436 Q256 592 76 436 Z" fill="#e31837" />
        <text x="256" y="278" font-family="Arial" font-size="85" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="-3">PEPSI</text>
        <text x="256" y="490" font-family="Arial" font-size="110" font-weight="900" fill="#ffffff" text-anchor="middle" font-style="italic">MAX</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }
  return textureMap[flavorId] || textureMap.original;
};

export function PepsiCan3D({ flavorId, highIllumination }: PepsiCan3DProps) {
  const canRef = useRef<THREE.Group>(null);
  const textureUrl = getAuthenticTexture(flavorId);
  
  // Load texture
  const texture = useTexture(textureUrl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  useFrame((state) => {
    if (canRef.current) {
      canRef.current.rotation.y += 0.005; // Cinematic rotation
    }
  });

  return (
    <group ref={canRef} dispose={null}>
      {/* 1. Main Label Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 2.4, 64]} />
        <meshPhysicalMaterial
          map={texture}
          metalness={0.7}
          roughness={0.2}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          envMapIntensity={highIllumination ? 4 : 2.5}
        />
      </mesh>

      {/* 2. Top Shoulder (Tapered) */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.85, 1, 0.3, 64]} />
        <meshPhysicalMaterial
          color="#d1d5db"
          metalness={1}
          roughness={0.1}
          envMapIntensity={highIllumination ? 3 : 2}
        />
      </mesh>

      {/* 3. Top Rim & Cap */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 64]} />
        <meshPhysicalMaterial
          color="#9ca3af"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* 4. Bottom Shoulder (Tapered) */}
      <mesh position={[0, -1.35, 0]}>
        <cylinderGeometry args={[1, 0.85, 0.3, 64]} />
        <meshPhysicalMaterial
          color="#d1d5db"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* 5. Bottom Rim */}
      <mesh position={[0, -1.55, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 64]} />
        <meshPhysicalMaterial
          color="#9ca3af"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* 6. Pull Tab */}
      <mesh position={[0.2, 1.62, 0]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.2]} />
        <meshPhysicalMaterial color="#9ca3af" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export function PepsiScene({ flavorId, highIllumination }: { flavorId: string; highIllumination?: boolean }) {
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={35} />
      <ambientLight intensity={highIllumination ? 1.2 : 0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={highIllumination ? 2.5 : 1.5} castShadow />
      <pointLight position={[-10, -5, -10]} intensity={highIllumination ? 1.2 : 0.8} />
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <PepsiCan3D flavorId={flavorId} highIllumination={highIllumination} />
      </Float>

      <Environment preset="studio" />
      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2.5} 
        far={4} 
      />
    </Suspense>
  );
}
