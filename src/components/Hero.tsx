import { motion } from "framer-motion";
import Links from "./Links";

const anim = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col justify-center py-16">

      {/* Current role label */}
      <motion.p {...anim(0)} className="font-mono text-[11px] text-[#c47d10] uppercase tracking-[0.22em] mb-6">
        Full Stack Engineer · Keen &amp; Able Technologies
      </motion.p>

      {/* Name — visual anchor */}
      <motion.h1
        {...anim(0.1)}
        className="font-black uppercase leading-[0.88] tracking-[-0.035em] text-[#1c1916]"
        style={{ fontSize: "clamp(3.8rem, 12vw, 9.5rem)" }}
      >
        Aryan<br />Bhat
      </motion.h1>

      {/* Tagline */}
      <motion.p {...anim(0.22)} className="mt-7 text-base text-[#6b6560] max-w-[480px] leading-[1.8]">
        I build high-traffic platforms and real-time data infrastructure.
        Full ownership — from DB schema to production deployment.
      </motion.p>

      {/* Social links */}
      <motion.div {...anim(0.34)} className="mt-9">
        <Links />
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="mt-16 flex items-center gap-3 text-[#c8c0b6]"
      >
        <span className="block w-6 h-px bg-current" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </div>
  );
}
