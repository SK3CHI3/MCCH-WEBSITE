import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import childrenGroup from "@/assets/children-group.jpg";
import education from "@/assets/education.jpg";
import facilities from "@/assets/facilities.jpg";

// Mock gallery data
const galleryImages = [
  {
    id: 1,
    src: childrenGroup,
    title: "Our Beautiful Children",
    category: "children",
    description: "Happy children at Motherly Care during their outdoor activities"
  },
  {
    id: 2,
    src: education,
    title: "Learning Together",
    category: "education",
    description: "Students engaged in classroom learning activities"
  },
  {
    id: 3,
    src: facilities,
    title: "Our Facilities",
    category: "facilities",
    description: "Modern and clean facilities for our children"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    title: "Sports Day Fun",
    category: "activities",
    description: "Annual sports day celebration with all children participating"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=800&h=600&fit=crop",
    title: "Reading Corner",
    category: "education",
    description: "Children enjoying quiet reading time in our library"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?w=800&h=600&fit=crop",
    title: "Meal Time",
    category: "daily-life",
    description: "Nutritious meals shared together as a family"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    title: "Art Class",
    category: "activities",
    description: "Creative expression through art and crafts"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    title: "Music Lessons",
    category: "activities",
    description: "Learning musical instruments and singing together"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&h=600&fit=crop",
    title: "Graduation Day",
    category: "achievements",
    description: "Celebrating our graduates moving to secondary school"
  }
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

  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "all" || image.category === selectedCategory
  );

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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-medium transition-smooth"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
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