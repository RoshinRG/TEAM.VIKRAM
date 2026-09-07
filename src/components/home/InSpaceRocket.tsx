"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

// Preload for faster first render
useGLTF.preload("/models/raptor-engine.glb", true);

function RaptorModel() {
  const spinRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/raptor-engine.glb", true);

  // Clone so multiple instances don't share state
  const cloned = useMemo(() => scene.clone(true), [scene]);

  // Compute uniform scale from bounding box (no pivot mutation)
  const scale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return 2.2 / maxDim;
  }, [cloned]);

  // Apply metallic material override for consistent aesthetics
  useEffect(() => {
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && !mat.map) {
          mat.color.set("#B8BFC9");
          mat.metalness = 0.88;
          mat.roughness = 0.22;
          mat.emissive.set("#1A1C22");
          mat.emissiveIntensity = 0.08;
        }
      }
    });
  }, [cloned]);

  const elapsedRef = useRef(0);

  // Rotate around own Y-axis only spinRef sits at the centred origin
  useFrame((_, delta) => {
    if (!spinRef.current) return;
    elapsedRef.current += delta;
    spinRef.current.rotation.y = elapsedRef.current * 0.25;
  });

  // Structure: spinRef (rotation) → Center (re-centres bbox to origin) → scaled model
  // Center MUST be inside spinRef so the pivot equals the model's geometric centre
  return (
    <group ref={spinRef}>
      <Center>
        <group scale={scale}>
          <primitive object={cloned} />
        </group>
      </Center>
    </group>
  );
}

function RocketScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={0.5} color="#C8D8FF" />
      <pointLight position={[2, -1, -2]} intensity={0.25} color="#FF8C42" />
      <RaptorModel />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.3}
        scale={7}
        blur={2.8}
        far={4}
        color="#000000"
      />
      <Environment preset="city" />
    </>
  );
}

export function InSpaceRocketCanvas({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={className}
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(46,46,46,0.55), transparent 55%)",
        }}
      />
    );
  }

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0.5, 4.5], fov: 36 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Suspense fallback={null}>
          <RocketScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
