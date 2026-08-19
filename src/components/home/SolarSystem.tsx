"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

interface PlanetData {
  name: string;
  color: string;
  size: number;
  distance: number;
  speed: number;
  ring?: boolean;
  ringColor?: string;
  hasMoon?: boolean;
}

const PLANETS: PlanetData[] = [
  { name: "Mercury", color: "#B5B5B5", size: 0.07, distance: 1.0, speed: 1.6 },
  { name: "Venus", color: "#E3BB76", size: 0.11, distance: 1.45, speed: 1.2 },
  { name: "Earth", color: "#4B9CD3", size: 0.13, distance: 1.95, speed: 0.95, hasMoon: true },
  { name: "Mars", color: "#E27B58", size: 0.1, distance: 2.45, speed: 0.75 },
  { name: "Jupiter", color: "#D8CA9D", size: 0.26, distance: 3.2, speed: 0.45 },
  { name: "Saturn", color: "#E4D5B7", size: 0.22, distance: 4.0, speed: 0.3, ring: true, ringColor: "#D0C09F" },
  { name: "Uranus", color: "#79C7C5", size: 0.15, distance: 4.75, speed: 0.22, ring: true, ringColor: "#93E1D8" },
  { name: "Neptune", color: "#4B70DD", size: 0.14, distance: 5.4, speed: 0.16 },
];

function OrbitRing({ distance }: { distance: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[distance - 0.01, distance + 0.01, 96]} />
      <meshBasicMaterial color="#ffffff" opacity={0.12} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Core Sun */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFA500"
          emissiveIntensity={2.5}
          roughness={0.2}
        />
      </mesh>
      {/* Outer Glow Halo */}
      <mesh>
        <sphereGeometry args={[0.68, 32, 32]} />
        <meshBasicMaterial
          color="#FF7700"
          opacity={0.25}
          transparent
          side={THREE.BackSide}
        />
      </mesh>
      <pointLight intensity={3.5} distance={20} color="#FFF5D6" />
    </group>
  );
}

function PlanetItem({ planet }: { planet: PlanetData }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    const elapsed = elapsedRef.current;
    // Orbital movement
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * planet.speed * 0.35;
    }
    // Planet self-rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
    }
    // Moon orbit around Earth
    if (moonRef.current) {
      const moonAngle = elapsed * 2.5;
      moonRef.current.position.x = Math.cos(moonAngle) * 0.28;
      moonRef.current.position.z = Math.sin(moonAngle) * 0.28;
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[planet.distance, 0, 0]}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshStandardMaterial
            color={planet.color}
            metalness={0.3}
            roughness={0.6}
            emissive={planet.color}
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Saturn / Uranus Rings */}
        {planet.ring && (
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <ringGeometry args={[planet.size * 1.4, planet.size * 2.3, 64]} />
            <meshStandardMaterial
              color={planet.ringColor || planet.color}
              opacity={0.75}
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>
        )}

        {/* Earth's Moon */}
        {planet.hasMoon && (
          <mesh ref={moonRef} position={[0.28, 0, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#D6D6D6" roughness={0.8} />
          </mesh>
        )}
      </group>
    </group>
  );
}

function SolarSystemScene() {
  const mainGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={mainGroupRef} rotation={[0.35, 0, 0.1]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      <Sun />
      {PLANETS.map((planet) => (
        <group key={planet.name}>
          <OrbitRing distance={planet.distance} />
          <PlanetItem planet={planet} />
        </group>
      ))}
    </group>
  );
}

export function SolarSystemCanvas({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={className}
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15), transparent 70%)",
        }}
      />
    );
  }

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 5.5, 7.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SolarSystemScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
