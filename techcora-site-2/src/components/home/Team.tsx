import { Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Abin",
      role: "Techcoran",
      image: "/team/abin.jpeg",
      bio: "Visionary leader with 6+ years in technology innovation.",
      linkedin: "https://www.linkedin.com/in/abin-wc-49661032a/"
    },
    {
      name: "Arun",
      role: "Techcoran",
      image: "/team/arun.jpeg",
      bio: "Creative designer focused on user experience and innovation.",
      linkedin: "https://www.linkedin.com/in/arun-kumar-937399254/"
    },
    {
      name: "Gagan Raj",
      role: "Techcoran",
      image: "/team/gaganraj.jpeg",
      bio: "Technology expert specializing in AI and machine learning.",
      linkedin: "https://www.linkedin.com/in/gaganraj2002/"
    },
    {
      name: "Jashwanth",
      role: "Techcoran",
      image: "/team/jashwanth.jpeg",
      bio: "Full-stack developer with expertise in modern frameworks.",
      linkedin: "https://www.linkedin.com/in/jaswantt-sriram-026a781b3/",
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Team
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Our <span className="text-orange-500">Experts</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Our diverse team of talented professionals brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-100 sm:h-64 md:h-100 lg:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation"
                    >
                      <Linkedin className="h-4 w-4 sm:h-4 sm:w-4 text-white" />
                    </a>
                    {/* <a href="#" className="w-9 h-9 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                      <Github className="h-4 w-4 sm:h-4 sm:w-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                      <Twitter className="h-4 w-4 sm:h-4 sm:w-4 text-white" />
                    </a> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}