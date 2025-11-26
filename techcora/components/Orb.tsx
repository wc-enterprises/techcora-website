import React from 'react';
import { motion } from 'framer-motion';

const TechcoraOrb: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[250px] sm:h-[280px] md:h-[320px] lg:h-[420px] xl:h-[500px] w-full scale-[0.55] sm:scale-[0.6] md:scale-[0.65] lg:scale-[0.8] xl:scale-100">

      {/* Outermost Tech Ring - Rotating */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full border border-techcora-orange/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting Satellite Dots */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-techcora-orange rounded-full shadow-lg shadow-techcora-orange/50" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-techcora-orange/60 rounded-full" />
      </motion.div>

      {/* Second Ring - Counter Rotating */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-techcora-orange/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-techcora-orange/80 rounded-full" />
      </motion.div>

      {/* Third Ring with Tech Markers */}
      <motion.div
        className="absolute w-[290px] h-[290px] rounded-full border border-techcora-orange/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* 4 Corner Tech Nodes */}
        {[0, 90, 180, 270].map((deg) => (
          <motion.div
            key={deg}
            className="absolute w-1.5 h-1.5 bg-techcora-orange rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(145px) translateY(-50%)`,
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>

      {/* Inner Pulse Ring */}
      <motion.div
        className="absolute w-[240px] h-[240px] rounded-full border-2 border-techcora-orange/50"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circuit Lines - Radiating from center */}
      <svg className="absolute w-[400px] h-[400px] pointer-events-none" viewBox="0 0 400 400">
        {/* Top Circuit Line */}
        <motion.path
          d="M200 160 L200 80 L240 40"
          stroke="rgba(255, 107, 0, 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Right Circuit Line */}
        <motion.path
          d="M240 200 L320 200 L360 160"
          stroke="rgba(255, 107, 0, 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Bottom Circuit Line */}
        <motion.path
          d="M200 240 L200 320 L160 360"
          stroke="rgba(255, 107, 0, 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Left Circuit Line */}
        <motion.path
          d="M160 200 L80 200 L40 240"
          stroke="rgba(255, 107, 0, 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Circuit Nodes */}
        <motion.circle cx="240" cy="40" r="3" fill="#ff6b00"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle cx="360" cy="160" r="3" fill="#ff6b00"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle cx="160" cy="360" r="3" fill="#ff6b00"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.circle cx="40" cy="240" r="3" fill="#ff6b00"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </svg>

      {/* Floating Data Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-techcora-orange/60 rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 45 * Math.PI / 180) * 180],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * 180],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* HUD-Style Corner Brackets */}
      <div className="absolute w-[200px] h-[200px]">
        {/* Top-Left */}
        <motion.div
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-techcora-orange/40"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Top-Right */}
        <motion.div
          className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-techcora-orange/40"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        {/* Bottom-Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-techcora-orange/40"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        {/* Bottom-Right */}
        <motion.div
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-techcora-orange/40"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute w-[180px] h-[2px] bg-gradient-to-r from-transparent via-techcora-orange/60 to-transparent"
        animate={{
          y: [-90, 90],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient Glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-techcora-orange/15 blur-[60px] rounded-full pointer-events-none"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Logo Container - Centered */}
      <motion.div
        className="relative z-10 w-48 h-48 flex items-center justify-center rounded-full overflow-hidden"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          maskImage: 'radial-gradient(circle, black 55%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 75%)',
        }}
      >
        {/* Logo Image */}
        <img
          src="/assets/tc-logo.png"
          alt="Techcora Logo"
          className="w-full h-full object-contain scale-[1.3]"
        />
      </motion.div>

      {/* Status Indicator - Bottom */}
      <div className="absolute bottom-2 md:bottom-4 flex items-center gap-1.5 md:gap-2">
        <motion.div
          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-techcora-orange rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[8px] md:text-[10px] text-techcora-orange/70 font-display tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Building the Future
        </span>
        <motion.div
          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-techcora-orange rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
        />
      </div>
    </div>
  );
};

export default TechcoraOrb;
