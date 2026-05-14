"use client";

import { useRef, Suspense, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PepsiCan3DProps {
  flavorId: string;
  highIllumination?: boolean;
  explodedProgress?: number;
  showFizz?: boolean;
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

function FizzParticle() {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useRef(Math.random() * 0.02 + 0.01);
  const xOffset = useRef((Math.random() - 0.5) * 1.5);
  const zOffset = useRef((Math.random() - 0.5) * 1.5);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += speed.current;
      if (ref.current.position.y > 2) {
        ref.current.position.y = 0;
      }
    }
  });

  return (
    <mesh ref={ref} position={[xOffset.current, 0, zOffset.current]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  );
}

export function PepsiCan3D({ flavorId, highIllumination, explodedProgress = 0, showFizz = false }: PepsiCan3DProps) {
  const canRef = useRef<THREE.Group>(null);
  const [currentExploded, setCurrentExploded] = useState(0);
  const textureUrl = getAuthenticTexture(flavorId);
  
  const tabRotationX = useRef(0);
  
  // Load texture
  const texture = useTexture(textureUrl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  useFrame((state) => {
    if (canRef.current) {
      canRef.current.rotation.y += 0.005; // Cinematic rotation
    }
    // Lerp exploded progress for smooth transition
    setCurrentExploded(THREE.MathUtils.lerp(currentExploded, explodedProgress, 0.05));
    // Lerp pull tab rotation
    const targetTabRotation = (showFizz || explodedProgress > 0) ? -Math.PI / 3 : 0;
    tabRotationX.current = THREE.MathUtils.lerp(tabRotationX.current, targetTabRotation, 0.1);
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

      {/* Condensation Layer (Visual Depth) */}
      <mesh position={[0, 0, 0]} scale={[1.015, 1.015, 1.015]}>
        <cylinderGeometry args={[1, 1, 2.4, 64]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.25}
          transmission={0.8}
          thickness={0.2}
          roughness={0.25}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 2. Top Shoulder (Tapered) */}
      <mesh position={[0, 1.35 + (currentExploded * 0.5), 0]}>
        <cylinderGeometry args={[0.85, 1, 0.3, 64]} />
        <meshPhysicalMaterial
          color="#d1d5db"
          metalness={1}
          roughness={0.1}
          envMapIntensity={highIllumination ? 3 : 2}
        />
      </mesh>

      {/* 3. Top Rim & Cap */}
      <mesh position={[0, 1.55 + (currentExploded * 1.2), 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 64]} />
        <meshPhysicalMaterial
          color="#9ca3af"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* 4. Bottom Shoulder (Tapered) */}
      <mesh position={[0, -1.35 - (currentExploded * 0.5), 0]}>
        <cylinderGeometry args={[1, 0.85, 0.3, 64]} />
        <meshPhysicalMaterial
          color="#d1d5db"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* 5. Bottom Rim */}
      <mesh position={[0, -1.55 - (currentExploded * 1.2), 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 64]} />
        <meshPhysicalMaterial
          color="#9ca3af"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* 6. Pull Tab */}
      <mesh position={[0.2, 1.62 + (currentExploded * 1.2), 0]} rotation={[tabRotationX.current, 0.2, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.2]} />
        <meshPhysicalMaterial color="#9ca3af" metalness={1} roughness={0.1} />
      </mesh>

      {/* Fizz Particle System */}
      {showFizz && (
        <group position={[0, 1.6, 0]}>
          {[...Array(20)].map((_, i) => (
            <FizzParticle key={i} />
          ))}
        </group>
      )}
    </group>
  );
}

function AmbientParticles({ flavorId }: { flavorId: string }) {
  const points = useRef<THREE.Points>(null);
  const count = 200;
  
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  const getColor = () => {
    switch (flavorId) {
      case "wild-cherry": return "#ff1e1e";
      case "mango": return "#ffb700";
      case "lime": return "#32ff32";
      case "vanilla": return "#f3e5ab";
      case "max": return "#ffffff";
      default: return "#00d9ff";
    }
  };

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={getColor()} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export function PepsiScene({ 
  flavorId, 
  highIllumination, 
  explodedProgress = 0,
  showFizz = false 
}: { 
  flavorId: string; 
  highIllumination?: boolean;
  explodedProgress?: number;
  showFizz?: boolean;
}) {
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={35} />
      <ambientLight intensity={highIllumination ? 1.2 : 0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={highIllumination ? 2.5 : 1.5} castShadow />
      <pointLight position={[-10, -5, -10]} intensity={highIllumination ? 1.2 : 0.8} />
      
      <AmbientParticles flavorId={flavorId} />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <PepsiCan3D 
          flavorId={flavorId} 
          highIllumination={highIllumination} 
          explodedProgress={explodedProgress}
          showFizz={showFizz}
        />
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
