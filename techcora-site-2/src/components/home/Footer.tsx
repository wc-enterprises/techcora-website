import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

export default function Footer({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: 'about' },
      { name: 'Our Team', href: 'team' },
      { name: 'Mission & Vision', href: 'mission' },
      { name: 'Why Choose Us', href: 'why-choose-us' }
    ],
    services: [
      { name: 'Custom Software Development', href: 'services' },
      { name: 'Mobile App Development', href: 'services' },
      { name: 'Website Development', href: 'services' },
      { name: 'UI/UX Design', href: 'services' },
      { name: 'Cloud & DevOps', href: 'services' },
      { name: 'AI & ML Solutions', href: 'services' }
    ],
    industries: [
      { name: 'Retail & E-commerce', href: 'industries' },
      { name: 'Fintech', href: 'industries' },
      { name: 'Logistics & Fleet', href: 'industries' },
      { name: 'IoT & Robotics', href: 'industries' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techcora', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Techcora
              </h3>
              <p className="text-gray-400 mt-2">
                Building Tomorrow's Technology Today
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We craft cutting-edge software and robotics solutions that transform businesses 
              and drive innovation across industries. From custom software development to 
              AI-powered automation, we're your trusted technology partner.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@techcoracorp.com
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +91 6382331539
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Techcora. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}