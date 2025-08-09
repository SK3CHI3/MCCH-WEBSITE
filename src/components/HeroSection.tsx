
import React, { useState } from "react";
import { ArrowRight, Heart, Users, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";


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
            <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">
              <img
                src={heroImages[current].src}
                alt={heroImages[current].alt}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/10" />
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/60 text-white rounded-full p-2 shadow hover:bg-primary/80 transition hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/60 text-white rounded-full p-2 shadow hover:bg-primary/80 transition hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-primary' : 'bg-primary/30'}`}
                />
              ))}
            </div>
          </div>
        );
      })()}



      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Heart className="h-4 w-4 text-primary-foreground fill-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Nurturing Hope. Building Futures.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Motherly Care
            <span className="block text-3xl md:text-5xl lg:text-6xl font-normal opacity-90">
              Children's Home & School Centre
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl animate-fade-in">
            Providing a safe, nurturing home where vulnerable children receive education, 
            spiritual guidance, and life skills to become self-reliant and empowered individuals 
            in Ruai, Nairobi, Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong group"
            >
              Sponsor a Child
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">150+</div>
              <div className="text-sm text-primary-foreground/80">Children Cared For</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <BookOpen className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">12+</div>
              <div className="text-sm text-primary-foreground/80">Years of Service</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-primary-foreground mx-auto mb-2 fill-primary-foreground" />
              <div className="text-2xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm text-primary-foreground/80">Lives Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/80 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;