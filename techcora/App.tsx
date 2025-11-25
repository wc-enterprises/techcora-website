import { ArrowRight, ChevronRight } from "lucide-react";
import React, { useCallback, useState } from "react";
import ContactModal from "./components/ContactModal";
import Features from "./components/Features";
import Header from "./components/Header";
import Mission from "./components/Mission";
import TechcoraOrb from "./components/Orb";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import { useGeminiLive } from "./hooks/useGeminiLive";

const App: React.FC = () => {
  const { connect, disconnect, connectionState, audioMetrics } =
    useGeminiLive();
  const [contactTitle, setContactTitle] = useState<string | undefined>(
    undefined
  );
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = useCallback((title: string) => {
    setContactTitle(title);
    setIsContactOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-techcora-orange selection:text-white font-sans">
      <Header onOpenContact={(t) => openContact(t)} />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-black">
            {/* Large Gradient Glow - top right */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-techcora-orange/10 blur-[180px] rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-10 border border-white/20 bg-white/5 px-4 py-2 rounded-sm">
                <span className="w-2 h-2 bg-techcora-orange rounded-full animate-pulse"></span>
                <span className="text-[11px] font-display uppercase tracking-[0.2em] text-white/90">
                  Techcora AI Integrated System
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[80px] font-display font-black leading-[0.95] mb-8 uppercase">
                <span className="text-white">Lead India</span>
                <br />
                <span className="text-techcora-orange">To</span>
                <br />
                <span className="text-techcora-orange">Supremacy</span>
              </h1>

              <p className="text-base text-slate-400 font-normal mb-10 max-w-md leading-relaxed">
                Building a group of world-changing companies in{" "}
                <strong className="text-white font-semibold">
                  Softwares, Robotics, Rockets, and Energy
                </strong>
                . Restoring historic greatness through deep tech.
              </p>

              <div className="flex flex-col gap-3 max-w-xs">
                <button
                  onClick={connect}
                  className="w-full px-6 py-4 bg-techcora-orange text-white font-display font-bold uppercase tracking-[0.1em] text-sm hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-3 rounded"
                >
                  Initialize Voice Mode <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full px-6 py-4 border border-white/40 text-white font-display font-bold uppercase tracking-[0.1em] text-sm hover:bg-white/10 transition-all duration-300 rounded">
                  Our Manifesto
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <TechcoraOrb
                    connectionState={connectionState}
                    audioMetrics={audioMetrics}
                    onConnect={connect}
                    onDisconnect={disconnect}
                />
            </div>
          </div>
        </section>

        {/* Industry Strip */}
        <div className="border-y border-white/10 bg-techcora-dark">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-0">
              {["Softwares", "Robotics", "Rockets", "Energy"].map(
                (industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 text-slate-400 uppercase font-display tracking-widest text-sm hover:text-techcora-orange transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-techcora-orange rotate-45"></span>
                    {industry}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Vision />

        <Mission />

        <Features />

        <Projects />

        {/* Contact/Footer Section */}
        <section
          id="contact"
          className="relative py-32 px-6 bg-black border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase">
              Join the <span className="text-techcora-orange">Revolution</span>
            </h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
              We are looking for the best engineers and individuals to create
              world-class products at lightning speeds.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div
                className="group border border-white/10 p-8 hover:border-techcora-orange transition-colors cursor-pointer bg-techcora-dark"
                onClick={() => openContact("Apply Now")}
              >
                <h3 className="font-display font-bold text-xl mb-2">Careers</h3>
                <div className="flex items-center text-techcora-orange uppercase text-xs tracking-widest font-bold gap-2">
                  Apply Now{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div
                className="group border border-white/10 p-8 hover:border-techcora-orange transition-colors cursor-pointer bg-techcora-dark"
                onClick={() => openContact("Contact Us")}
              >
                <h3 className="font-display font-bold text-xl mb-2">
                  Investors
                </h3>
                <div className="flex items-center text-techcora-orange uppercase text-xs tracking-widest font-bold gap-2">
                  Contact Us{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 uppercase tracking-widest">
            <p>© 2025 Techcora. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-techcora-orange">
                Privacy
              </a>
              <a href="#" className="hover:text-techcora-orange">
                Legal
              </a>
              <a href="#" className="hover:text-techcora-orange">
                Brand
              </a>
            </div>
          </footer>
        </section>
      </main>
      <ContactModal
        title={contactTitle}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
