import React from 'react';
import { Code, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Verticals() {
  const verticals = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
      features: ["Custom Web Applications", "Enterprise Software", "API Development", "Cloud Solutions"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Cpu,
      title: "Robotics & Automation",
      description: "Cutting-edge robotics solutions that automate processes and enhance operational efficiency.",
      features: ["Industrial Automation", "AI-Powered Robots", "Process Optimization", "IoT Integration"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="verticals" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core <span className="text-orange-500">Verticals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in two key areas that drive innovation and transform businesses across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {verticals.map((vertical, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <vertical.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{vertical.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{vertical.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {vertical.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}