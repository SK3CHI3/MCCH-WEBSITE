
import React, { useState } from "react";
import { ArrowRight, Heart, Users, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Hero Image Carousel */}
      {(() => {
        const heroImages = [
          {
            src: "/gallery/hero-1-min.jpg",
            alt: "hero-1"
          },
          {
            src: "/gallery/hero-2-min.jpg",
            alt: "hero-2"
          },
          {
            src: "/gallery/hero-3-min.jpg",
            alt: "hero-3"
          },
          {
            src: "/gallery/hero-4-min.jpg",
            alt: "hero-4"
          },
          {
            src: "/gallery/hero-5-min.jpg",
            alt: "hero-5"
          }
        ];
        const [current, setCurrent] = useState(0);
        const prev = () => setCurrent((c) => (c === 0 ? heroImages.length - 1 : c - 1));
        const next = () => setCurrent((c) => (c === heroImages.length - 1 ? 0 : c + 1));

        // Auto-slide every 4 seconds
        React.useEffect(() => {
          const interval = setInterval(() => {
            setCurrent((c) => (c === heroImages.length - 1 ? 0 : c + 1));
          }, 4000);
          return () => clearInterval(interval);
        }, [heroImages.length]);
        return (
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full overflow-hidden">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover md:object-cover animate-subtle-zoom transition-opacity duration-1000 ease-in-out ${
                    index === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-primary/10" />
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-primary/60 text-white rounded-full p-1.5 md:p-2 shadow hover:bg-primary/80 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-primary/60 text-white rounded-full p-1.5 md:p-2 shadow hover:bg-primary/80 transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
            </button>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-primary scale-125' : 'bg-primary/30 scale-100'
                  }`}
                />
              ))}
            </div>
          </div>
        );
      })()}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-in">
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-primary-foreground fill-primary-foreground" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">
              Nurturing Hope. Building Futures.
            </span>
          </div>

          {/* Main Heading - Back to original size */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight animate-fade-in">
            Motherly Care
            <span className="block text-3xl md:text-5xl lg:text-6xl font-normal opacity-90 mt-1 md:mt-2">
              Children's Home & Educational Centre
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed max-w-2xl animate-fade-in">
            Providing a safe, nurturing home where vulnerable children receive education, 
            spiritual guidance, and life skills to become self-reliant and empowered individuals 
            in Ruai, Nairobi, Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in">
            <Button 
              size="default"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong group text-sm md:text-base"
            >
              Sponsor a Child
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="default"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/80 text-sm md:text-base bg-transparent"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Stats - Smaller on Mobile */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 animate-fade-in">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
              <Users className="h-5 w-5 md:h-8 md:w-8 text-primary-foreground mx-auto mb-1 md:mb-2" />
              <div className="text-lg md:text-2xl font-bold text-primary-foreground mb-0.5 md:mb-1">150+</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 leading-tight">Children Cared For</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
              <BookOpen className="h-5 w-5 md:h-8 md:w-8 text-primary-foreground mx-auto mb-1 md:mb-2" />
              <div className="text-lg md:text-2xl font-bold text-primary-foreground mb-0.5 md:mb-1">12+</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 leading-tight">Years of Service</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
              <Heart className="h-5 w-5 md:h-8 md:w-8 text-primary-foreground mx-auto mb-1 md:mb-2 fill-primary-foreground" />
              <div className="text-lg md:text-2xl font-bold text-primary-foreground mb-0.5 md:mb-1">500+</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 leading-tight">Lives Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-0.5 h-2 md:w-1 md:h-3 bg-primary-foreground/80 rounded-full mt-1.5 md:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;