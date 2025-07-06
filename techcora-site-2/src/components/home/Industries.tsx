import { 
  ShoppingCart, 
  CreditCard, 
  Wifi, 
  Truck 
} from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Modern retail solutions including POS systems, inventory management.",
      features: ["Point of Sale", "Inventory Management", "Customer-facing website & mobile app"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: CreditCard,
      title: "Fintech",
      description: "Secure financial technology solutions including payment processing and digital banking.",
      features: ["Secure Payment Platforms", "Digital Wallets", "Transaction processing systems"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: Truck,
      title: "Logistics & Fleet Management",
      description: "Logistics and fleet management solutions including GPS tracking, route optimization, and real-time fleet monitoring.",
      features: ["GPS tracking", "Route optimization", "Real-time fleet monitoring Solutions"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: Wifi,
      title: "IoT & Robotics",
      description: "Internet of Things solutions connecting devices and enabling smart automation.",
      features: ["Intelligent Systems", "Smart operations", "Remote Monitoring"],
      image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-orange-500">Industries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage our expertise to deliver tailored solutions across diverse industries, 
            driving innovation and growth in every sector we serve.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80 lg:h-96">
                
                {/* Single Component with 50/50 Split - Alternating Layout */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} h-full`}>
                  
                  {/* Image Section - 50% Full Height */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="h-40 lg:h-full relative overflow-hidden">
                      {/* Background Image */}
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Overlay for better contrast */}
                      <div className="absolute inset-0 bg-black/40"></div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <industry.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Section - 50% */}
                  <div className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {industry.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-md line-clamp-5">
                        {industry.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-1 mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Features:</h4>
                        {industry.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-md leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}