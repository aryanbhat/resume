import React, { useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export default function CursorFollower(): React.ReactElement {
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  const update = useCallback(
    (e: MouseEvent) => {
      mouseX.set(clamp(e.clientX, 0, window.innerWidth));
      mouseY.set(clamp(e.clientY, 0, window.innerHeight));
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [update]);

  const spring = { damping: 30, stiffness: 180 };
  const sx = useSpring(mouseX, spring);
  const sy = useSpring(mouseY, spring);

  const bg: MotionValue<string> = useTransform(
    [sx, sy],
    ([x, y]: number[]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(196, 125, 16, 0.04), transparent 75%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block"
      style={{ background: bg }}
    />
  );
}
