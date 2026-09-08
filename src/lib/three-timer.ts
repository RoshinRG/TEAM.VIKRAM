"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

/**
 * Three.js r183+ deprecated THREE.Clock in favor of THREE.Timer.
 * Since libraries such as @react-three/fiber instantiate `new THREE.Clock()` internally,
 * this patch wraps THREE.Timer to avoid deprecation warnings while ensuring accurate timing.
 */
class PatchedClock {
  private timer: THREE.Timer;
  autoStart: boolean;
  running: boolean = false;
  startTime: number = 0;
  oldTime: number = 0;

  constructor(autoStart = true) {
    this.timer = new THREE.Timer();
    this.autoStart = autoStart;
    if (autoStart) {
      this.start();
    }
  }

  start() {
    this.startTime = performance.now();
    this.oldTime = this.startTime;
    this.timer.reset();
    this.running = true;
  }

  stop() {
    this.running = false;
    this.autoStart = false;
  }

  get elapsedTime(): number {
    return this.timer.getElapsed();
  }

  set elapsedTime(_val: number) {
    // Allow external setter if library writes to it
  }

  getElapsedTime(): number {
    this.getDelta();
    return this.timer.getElapsed();
  }

  getDelta(): number {
    if (this.autoStart && !this.running) {
      this.start();
      return 0;
    }
    if (this.running) {
      this.timer.update();
      this.oldTime = performance.now();
      return this.timer.getDelta();
    }
    return 0;
  }
}

// Replace deprecated Clock constructor
if (typeof window !== "undefined") {
  try {
    // @ts-expect-error - Replace deprecated Clock with Timer-backed implementation
    THREE.Clock = PatchedClock;
  } catch {
    /* ignore if non-writable */
  }
}

/**
 * React hook for using THREE.Timer in animation loops.
 * Call `timer.update(timestamp)` each frame, then query `timer.getDelta()`.
 */
export function useThreeTimer() {
  const timerRef = useRef<THREE.Timer | null>(null);

  if (!timerRef.current) {
    timerRef.current = new THREE.Timer();
  }

  useEffect(() => {
    const timer = timerRef.current;
    if (timer && typeof document !== "undefined") {
      timer.connect(document);
    }
    return () => {
      if (timer) {
        timer.dispose();
      }
    };
  }, []);

  return timerRef;
}

export { PatchedClock };
