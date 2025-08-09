import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import childrenGroup from "@/assets/children-group.jpg";
import education from "@/assets/education.jpg";
import facilities from "@/assets/facilities.jpg";

// Gallery images from local /gallery folder with size variations
const galleryImages = [
  { id: 1, src: "/gallery/hero-1-min.jpg", title: "Group Photo", category: "facility", description: "A group photo at Motherly Care.", size: "large" },
  { id: 2, src: "/gallery/hero-2-min.jpg", title: "Smiles", category: "children", description: "Children smiling at Motherly Care.", size: "medium" },
  { id: 3, src: "/gallery/hero-3-min.jpg", title: "Activities", category: "activities", description: "Fun activities at Motherly Care.", size: "small" },
  { id: 4, src: "/gallery/hero-4-min.jpg", title: "Learning", category: "education", description: "Learning moments at Motherly Care.", size: "large" },
  { id: 5, src: "/gallery/hero-5-min.jpg", title: "Playtime", category: "play", description: "Playtime at Motherly Care.", size: "medium" },
  { id: 6, src: "/gallery/469318253_549155091423432_3624827173028074347_n.jpg", title: "Outdoor Fun", category: "activities", description: "Outdoor fun at Motherly Care.", size: "small" },
  { id: 7, src: "/gallery/481297623_1023022436519283_5725391079472523024_n.jpg", title: "Celebration", category: "achievements", description: "Celebrating achievements together.", size: "large" },
  { id: 8, src: "/gallery/72673018_785831101830486_8444662335439634432_n.jpg", title: "School Life", category: "education", description: "A glimpse of school life.", size: "medium" },
  { id: 9, src: "/gallery/IMG-20250618-WA00119_cleanup.png", title: "Art & Creativity", category: "activities", description: "Art and creative time.", size: "small" },
  { id: 10, src: "/gallery/kk0.jpg", title: "Friends", category: "children", description: "Friendship at Motherly Care.", size: "large" },
  { id: 11, src: "/gallery/lklko.jpg", title: "Daily Life", category: "daily-life", description: "Everyday moments at Motherly Care.", size: "medium" },
  { id: 12, src: "/gallery/pp.jpg", title: "Playground", category: "play", description: "Playground fun.", size: "small" },
  { id: 13, src: "/gallery/WhatsApp Image 2025-06-18 at 02.57.57_2e24ed7c.jpg", title: "Special Event", category: "achievements", description: "A special event at Motherly Care.", size: "large" },
  { id: 14, src: "/gallery/WhatsApp Image 2025-06-22 at 22.43.20_eb42681b.jpg", title: "Community", category: "community", description: "Community gathering at Motherly Care.", size: "medium" },
  { id: 15, src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocfH2KFQU9QVWa1o8QKX5jx_A1pnquUM9B6IELlqa47BFatVjFYtJi3cPnsVCw9J6wMmnRXsmdVN1fh7yRuq83EJUepdxiW-CvXgbUg8J3-rmOc8K4lqBu9Oft8KogCYtIeHb9Fw=w203-h152-k-no", title: "Motherly Care Location", category: "facilities", description: "Our hall used as church and gathering place.", size: "large" }
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "children", label: "Our Children" },
  { id: "education", label: "Education" },
  { id: "facilities", label: "Facilities" },
  { id: "activities", label: "Activities" },
  { id: "daily-life", label: "Daily Life" },
  { id: "achievements", label: "Achievements" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "all" || image.category === selectedCategory
  );

  // Simple preloading for better performance
  useEffect(() => {
    const preloadImages = () => {
      galleryImages.forEach(image => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(image.src));
        };
      });
    };

    preloadImages();
  }, []);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const currentImage = selectedImage ? filteredImages.find(img => img.id === selectedImage) : null;

  // Get size classes for masonry layout
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Discover the joy, learning, and growth happening every day at Motherly Care 
              through our collection of photos.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-[200px]">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-[1.02] ${getSizeClasses(image.size)}`}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      setLoadedImages(prev => new Set(prev).add(target.src));
                    }}
                  />
                  {!loadedImages.has(image.src) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse bg-gray-200 w-full h-full"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No photos found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Their Story</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Every photo tells a story of hope, growth, and transformation. 
            Your support helps create more moments like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
            >
              <Heart className="h-4 w-4 mr-2" />
              Support Our Children
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Visit Our Home
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
              <p className="text-sm opacity-90">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;