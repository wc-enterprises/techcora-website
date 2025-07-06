import { 
  Code, 
  Smartphone, 
  Palette, 
  Brain, 
  Cloud, 
  MessageCircle, 
  Globe,
  Cpu
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailor-made applications built to meet your business goals with precision and scalability."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-performance iOS and Android apps with intuitive UI/UX, built for scale."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive, fast, and secure web platforms for B2B, B2C, and enterprise use."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting elegant, user-centric interfaces that drive engagement and retention."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Infrastructure, automation, and deployment solutions to streamline your software lifecycle."
    },
    {
      icon: MessageCircle,
      title: "IT Consulting & Tech Advisory",
      description: "Expert guidance to help you plan, build, and scale with confidence."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Leverage intelligent systems to automate, predict, and innovate faster."
    },
    {
      icon: Cpu,
      title: "Embedded Software & IoT",
      description: "Custom firmware and device-level software solutions for connected products."
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