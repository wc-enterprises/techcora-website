import { 
  ShoppingCart, 
  Globe, 
  CreditCard, 
  Wifi, 
  Truck 
} from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Modern retail solutions including POS systems, inventory management, and customer analytics.",
      features: ["Point of Sale", "Inventory Management", "Customer Analytics", "Omnichannel Solutions"]
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Comprehensive e-commerce platforms with seamless shopping experiences and payment integration.",
      features: ["Online Stores", "Payment Gateway", "Mobile Shopping", "Order Management"]
    },
    {
      icon: CreditCard,
      title: "Fintech",
      description: "Secure financial technology solutions including payment processing and digital banking.",
      features: ["Digital Payments", "Banking Solutions", "Fraud Detection", "Compliance Tools"]
    },
    {
      icon: Wifi,
      title: "IoT",
      description: "Internet of Things solutions connecting devices and enabling smart automation.",
      features: ["Device Connectivity", "Smart Sensors", "Data Analytics", "Remote Monitoring"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Supply chain and logistics optimization through technology and automation.",
      features: ["Fleet Management", "Route Optimization", "Warehouse Automation", "Tracking Systems"]
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}