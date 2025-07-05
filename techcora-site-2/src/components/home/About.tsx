import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We maintain the highest standards in every project we undertake."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and innovation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and support."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid development cycles without compromising on quality."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
              About Techcora
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Ideas Into 
              <span className="text-orange-500"> Digital Reality</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Techcora, we're passionate about leveraging technology to solve complex business challenges. 
              Our team of expert developers, designers, and strategists work collaboratively to deliver 
              innovative solutions that drive growth and success.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              From custom software development to cutting-edge robotics, we're committed to pushing 
              the boundaries of what's possible in the digital landscape.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaboration"
              className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center z-20">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}