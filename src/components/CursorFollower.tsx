import React, { useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export default function CursorFollower(): React.ReactElement {
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  const updateMousePosition = useCallback(
    (ev: MouseEvent): void => {
      mouseX.set(clamp(ev.clientX, 0, window.innerWidth));
      mouseY.set(clamp(ev.clientY, 0, window.innerHeight));
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  const springConfig: { damping: number; stiffness: number } = {
    damping: 25,
    stiffness: 200,
  };
  const smoothMouseX: MotionValue<number> = useSpring(mouseX, springConfig);
  const smoothMouseY: MotionValue<number> = useSpring(mouseY, springConfig);

  const background: MotionValue<string> = useTransform(
    [smoothMouseX, smoothMouseY],
    ([latestX, latestY]: number[]): string =>
      `radial-gradient(600px at ${latestX}px ${latestY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block"
      style={{ background }}
    />
  );
}
