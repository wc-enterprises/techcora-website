import React from 'react';

const visionCards = [
  { title: "Global Impact" },
  { title: "Technology Leadership" },
  { title: "Industry Innovation" },
  { title: "Future Ready" }
];

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-techcora-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Title */}
          <div>
            <span className="text-techcora-orange font-display font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1]">
              <span className="text-white">To Lead India </span>
              <span className="text-techcora-orange">To Supremacy</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-end">
            <p className="text-slate-400 text-base leading-relaxed lg:pl-8 border-l border-white/10">
              To Lead India To Supremacy (LiTS) by creating groundbreaking products at the cutting edge of technology. We aim to uplift India's greatness, restore its historic greatness by extending our innovations to solve global challenges.
            </p>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-8 md:p-10 flex flex-col"
            >
              {/* Diamond Icon */}
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-8">
                <div className="w-3 h-3 bg-techcora-orange rotate-45"></div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg md:text-xl text-white uppercase tracking-wide leading-tight">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
