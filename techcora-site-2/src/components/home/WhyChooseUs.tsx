import { 
  Target, 
  Search, 
  Award, 
  Users, 
  ShieldCheck,
  CheckCircle,
  Clock 
} from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: Target,
      title: "Ambition",
      description: "We set bold goals and work relentlessly to achieve them, pushing the boundaries of what's possible.",
      color: "bg-red-500"
    },
    {
      icon: Search,
      title: "Curiosity",
      description: "Our thirst for knowledge drives us to explore new technologies and innovative solutions.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "from code quality to client service. We settle for nothing less than world-class.",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Unity",
      description: "We believe in the power of collaboration and teamwork to achieve extraordinary results.",
      color: "bg-green-500"
    },
    {
      icon: ShieldCheck,
      title: "Responsibility",
      description: "We take ownership of our work and are committed to delivering on our promises.",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Responsibility",
      description: "24/7 support and maintenance services",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-orange-500">Techcora</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do and define how we work with our clients and each other.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                More Reasons to <span className="text-orange-500">Work With Us</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Proven track record with 30+ successful projects",
                  "Agile development methodology for faster delivery",
                  "Competitive pricing with transparent billing",
                  "Expert team with cutting-edge technology expertise",
                  "Scalable solutions that grow with your business"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team success"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}