import React, { useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  { letter: 'L', rest: 'ead' },
  { letter: 'I', rest: 'ndia' },
  { letter: 'T', rest: 'o' },
  { letter: 'S', rest: 'upremacy' },
];

const LITSReveal: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mb-4 md:mb-6 lg:mb-8" onClick={() => setHoveredIndex(null)}>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.95] uppercase tracking-wider">
        <span className="inline-flex">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-flex cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                e.stopPropagation();
                setHoveredIndex(hoveredIndex === index ? null : index);
              }}
            >
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-techcora-orange transition-opacity ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {word.letter}
              </span>

              <motion.span
                className="overflow-hidden hidden md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-techcora-orange/80 to-techcora-orange/60"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word.rest}
              </motion.span>
            </motion.span>
          ))}
        </span>
      </h1>
    </div>
  );
};

export default LITSReveal;
