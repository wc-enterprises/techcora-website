import React from 'react';
import { motion } from 'framer-motion';
import { ConnectionState, AudioMetrics } from '../types';

interface OrbProps {
  connectionState: ConnectionState;
  audioMetrics: AudioMetrics;
  onConnect: () => void;
  onDisconnect: () => void;
}

const TechcoraOrb: React.FC<OrbProps> = ({ connectionState, audioMetrics, onConnect, onDisconnect }) => {
  const isConnected = connectionState === ConnectionState.CONNECTED;
  const isConnecting = connectionState === ConnectionState.CONNECTING;

  return (
    <div className="relative flex flex-col items-center justify-center h-[450px] w-full">

      {/* Outermost Ring - Large */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-techcora-orange/30 pointer-events-none"></div>

      {/* Outer Ring */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-techcora-orange/40 pointer-events-none"></div>

      {/* Middle Ring */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-techcora-orange/20 pointer-events-none"></div>

      {/* Ambient Glow */}
      <motion.div
        className="absolute w-[280px] h-[280px] bg-techcora-orange/8 blur-[80px] rounded-full pointer-events-none"
        animate={{
            opacity: isConnected ? [0.2, 0.35, 0.2] : [0.1, 0.15, 0.1],
            scale: isConnected ? [1, 1.05, 1] : 1
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Connecting Spinner */}
      {isConnecting && (
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 border border-techcora-orange/30 border-t-techcora-orange rounded-full animate-spin"></div>
         </div>
      )}

      {/* Inner Ring - closest to orb */}
      <div className="absolute w-[260px] h-[260px] rounded-full border border-techcora-orange/50 pointer-events-none"></div>

      {/* Main Logo / Orb Container */}
      <motion.div
        className="relative z-10 cursor-pointer w-56 h-56 flex items-center justify-center"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={isConnected ? onDisconnect : onConnect}
      >
        {/* Logo Image */}
        <motion.img
          src="/assets/tc-logo.png"
          alt="Techcora Orb"
          className="w-full h-full object-contain mix-blend-lighten opacity-75"
          animate={{
            scale: isConnected ? [1, 1.02, 1] : 1,
            opacity: isConnected ? 0.85 : 0.75
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central CTA Text */}
        {!isConnected && !isConnecting && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 backdrop-blur-sm rounded">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-white text-[10px] font-display tracking-[0.3em] uppercase">
                        Initialize
                    </span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
            </motion.div>
        )}
      </motion.div>

      {/* Status Text */}
      <div className="absolute bottom-8 text-center">
        <motion.div
            animate={{ opacity: isConnected ? 1 : 0.6 }}
            className="flex items-center justify-center gap-2"
        >
            <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-green-500' : 'bg-slate-600'}`}></div>
            <span className="text-[11px] text-slate-500 font-display tracking-[0.2em] uppercase">
                {isConnected ? 'System Online' : 'System Standby'}
            </span>
        </motion.div>
      </div>

    </div>
  );
};

export default TechcoraOrb;
