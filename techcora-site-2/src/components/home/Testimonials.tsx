import React, { useState, useEffect } from "react";

// Define the Testimonial type
interface Testimonial {
  id: number;
  stars: string;
  quote: string;
  image: string;
  name: string;
  role: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: "/clients/5star.svg",
    quote:
      "Techcora delivered a reliable and secure payment solution that exceeded our expectations. Their fintech expertise and commitment helped us launch a scalable product across Sweden.",
    image: "/clients/surfboard_payments.png",
    name: "Abraham",
    role: "CEO of SurfBoard Payments",
  },
  {
    id: 2,
    stars: "/clients/5star.svg",
    quote:
      "Techcora played a key role in transforming our retail operations. Their quick commerce app, POS, and inventory system brought speed, accuracy, and real-time control to our multi-outlet management.",
    image: "/clients/nilgiris.png",
    name: "Operations Head",
    role: "Nilgiris Supermarkets",
  },
  {
    id: 3,
    stars: "/clients/5star.svg",
    quote:
      "Techcora’s fleet management solution gave us complete visibility and control over our operations. Real-time tracking and automation helped us cut costs and improve efficiency across the board",
    image: "/clients/rapport.png",
    name: "Zumana",
    role: "BDM at Rapport, Qatar",
  },
  {
    id: 4,
    stars: "/clients/5star.svg",
    quote:
      "Techcora’s solution has significantly improved our school transport safety and communication. The facial recognition and live tracking features have given parents and staff real-time peace of mind.",
    image: "/clients/teknova.png",
    name: "Irish",
    role: "CEO - Teknova Consultancy, Qatar",
  },
];

const TestimonialsCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning,] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleDotClick = (index: number) => {
    if (!isTransitioning) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-20 bg-[#fcedd7]">
      <div className="container mx-auto px-4">
        {/* Enhanced Introduction Text */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Enough from us, let's hear from our clients
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and
            businesses have to say about their experience working with <span className="relative inline-block cursor-pointer group">
              {/* Glassmorphism background with pulse */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-orange-500/40 to-orange-600/30 backdrop-blur-md border border-orange-400/50 rounded-lg shadow-lg animate-pulse group-hover:animate-none group-hover:from-orange-400/50 group-hover:via-orange-500/60 group-hover:to-orange-600/50 transition-all duration-700 blur-sm"></span>
              
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg opacity-30 animate-glow-pulse group-hover:animate-none blur-md"></span>
              
              {/* Main text with shimmer */}
              <span className="relative z-10 font-extrabold px-3 py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-shimmer-text group-hover:animate-none">
                TECHCORA
              </span>
              
              {/* Sparkle overlay */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping"></span>
                <span className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full animate-ping animation-delay-500"></span>
              </span>
            </span>'s
            presentation design services.
          </p>
          <img
            src="/clients/down-curve-arrow.svg"
            alt=""
            className="absolute left-3/4 transform translate-x-1 -bottom-[165px] z-10"
          />
        </div>

        {/* Custom Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-2 rounded-2xl"
                  style={{ minWidth: "100%" }}
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 transform transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col items-center">
                      <figure className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-md opacity-20"></div>
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} - ${testimonial.role}`}
                          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                        />
                      </figure>

                      <figure className="mb-6">
                        <img
                          src={testimonial.stars}
                          alt="5 Star Rating"
                          className="w-32 h-auto"
                        />
                      </figure>

                      <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic font-light leading-relaxed mb-8 max-w-3xl">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-yellow-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-orange-500 scale-125"
                    : "bg-orange-300 hover:bg-orange-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarouselSection;
