import React from 'react';

const missionCards = [
  { title: "Innovation First" },
  { title: "Client Success" },
  { title: "Quality Assurance" },
  { title: "Sustainable Growth" }
];

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-techcora-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Title */}
          <div>
            <span className="text-techcora-orange font-display font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1] text-white">
              Build The Best Team
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-end">
            <p className="text-slate-400 text-base leading-relaxed lg:pl-8 border-l-2 border-techcora-orange">
              To build the best team of engineers and individuals, creating world class products at lightening speed. We're not just building tech — we're building a legacy.
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-8 md:p-10 flex flex-col hover:bg-techcora-dark transition-colors group"
            >
              {/* Diamond Icon */}
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-techcora-orange transition-colors duration-300">
                <div className="w-3 h-3 bg-techcora-orange rotate-45 group-hover:bg-black transition-colors duration-300"></div>
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

export default Mission;
