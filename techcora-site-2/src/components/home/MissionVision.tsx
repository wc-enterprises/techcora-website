import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Purpose & <span className="text-orange-500">Direction</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're driven by a clear mission and guided by an ambitious vision for the future of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl opacity-5"></div>
            <div className="relative p-8 lg:p-12">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with innovative software solutions and cutting-edge robotics 
                that drive efficiency, growth, and competitive advantage in the digital age.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to delivering exceptional value through technology that transforms 
                how our clients operate, compete, and succeed in their respective industries.
              </p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Innovation First
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Client Success
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Quality Assurance
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Sustainable Growth
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"></div>
            <div className="relative p-8 lg:p-12 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                To be the global leader in transformative technology solutions, pioneering the 
                future of software development and robotics across all industries.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                We envision a world where technology seamlessly integrates with human potential, 
                creating unprecedented opportunities for innovation and progress.
              </p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-white/70">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Global Impact
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Technology Leadership
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Industry Innovation
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Future Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}