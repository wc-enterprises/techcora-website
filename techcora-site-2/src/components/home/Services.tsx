import React from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart, 
  Headphones 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and goals."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn, adapt, and provide valuable insights from your data."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive business decisions."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for your systems."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}