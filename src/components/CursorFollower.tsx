"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

// Utility function to clamp a value between a min and max
const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function CursorFollower() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const updateMousePosition = (ev: MouseEvent) => {
      // Constrain x and y within the window boundaries
      x.set(clamp(ev.clientX, 0, windowSize.width));
      y.set(clamp(ev.clientY, 0, windowSize.height));
    };

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [windowSize]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      animate={{
        background: `radial-gradient(600px at ${x.get()}px ${y.get()}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 0,
        restDelta: 0.001,
      }}
    />
  );
}
