import React from 'react';
import { Rocket, Zap, Shield, Cpu, Globe, Target } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6 text-techcora-orange" />,
    title: "Ambition",
    description: "We aim for the impossible. Building world-changing companies from India that redefine global standards."
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "Curiosity",
    description: "A relentless drive to explore the intricate layers of modern deep tech and solve complex problems."
  },
  {
    icon: <Shield className="w-6 h-6 text-techcora-orange" />,
    title: "Responsibility",
    description: "Uplifting our nation first, restoring its historic greatness, then solving global challenges."
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Unity",
    description: "Building the best team of engineers and individuals working in perfect synchronization."
  },
  {
    icon: <Zap className="w-6 h-6 text-techcora-orange" />,
    title: "Excellence",
    description: "Creating groundbreaking products at the cutting edge of technology at lightning speeds."
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Supremacy",
    description: "Our vision is clear: To Lead India To Supremacy (LiTS) through technological dominance."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-techcora-dark relative overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-techcora-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block">
                Core Values
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-techcora-orange to-red-600">Deep Tech</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg font-light border-l-2 border-techcora-orange pl-6">
            We are engineers at heart, building products with technology deeply embedded like the molten core of the Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {values.map((item, index) => (
            <div key={index} className="p-10 bg-black hover:bg-techcora-dark transition-colors group">
              <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center mb-8 group-hover:bg-techcora-orange group-hover:text-black transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white uppercase tracking-wide">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;