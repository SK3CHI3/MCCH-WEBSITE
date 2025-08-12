import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import childrenGroup from "@/assets/children-group.jpg";
import education from "@/assets/education.jpg";
import facilities from "@/assets/facilities.jpg";

// Gallery images from local /gallery folder - updated with new file names
const galleryImages = [
  { id: 1, src: "/gallery/main gate use as main.jpg", title: "Main Entrance Gate", category: "facilities", description: "The main entrance gate to Motherly Care Children's Home." },
  { id: 2, src: "/gallery/best arieal photo.jpg", title: "Aerial View of Facilities", category: "facilities", description: "Bird's eye view of our complete facility showing all buildings and grounds." },
  { id: 3, src: "/gallery/facilities.jpg", title: "Our Facilities", category: "facilities", description: "Overview of our main facilities and buildings." },
  { id: 4, src: "/gallery/our hall 2.jpg", title: "Main Hall", category: "facilities", description: "Our main hall used for church services and gatherings." },
  { id: 5, src: "/gallery/boys dointory_11zon.jpg", title: "Boys' Dormitory", category: "facilities", description: "The boys' dormitory where our male children sleep and rest." },
  { id: 6, src: "/gallery/our chicken farm_11zon.jpg", title: "Chicken Farm", category: "livelihood", description: "Our chicken farm providing fresh eggs and meat for the children." },
  { id: 7, src: "/gallery/playground main use this.jpg", title: "Main Playground", category: "facilities", description: "Our main playground where children play and exercise." },
  { id: 8, src: "/gallery/playground for our little children_11zon.jpg", title: "Children's Playground", category: "facilities", description: "Our dedicated playground where children can play, exercise, and have fun." },
  { id: 9, src: "/gallery/education going on.jpg", title: "Education in Progress", category: "education", description: "Active learning and education taking place at Motherly Care." },
  { id: 10, src: "/gallery/ourstudents Mage class 5.png", title: "Class 5 Students", category: "education", description: "Our Class 5 students engaged in learning activities." },
  { id: 11, src: "/gallery/ourstudent edel queen.jpg", title: "Student Spotlight", category: "education", description: "One of our bright students at Motherly Care." },
  { id: 12, src: "/gallery/evening devotion.jpg", title: "Evening Devotion", category: "spiritual", description: "Evening prayer and devotion time with our children." },
  { id: 13, src: "/gallery/breakfast is served.jpg", title: "Breakfast Time", category: "daily-life", description: "Children enjoying their nutritious breakfast." },
  { id: 14, src: "/gallery/we out playing.jpg", title: "Outdoor Play", category: "activities", description: "Children enjoying outdoor play and activities." },
  { id: 15, src: "/gallery/graduation ceremony.jpg", title: "Graduation Ceremony", category: "achievements", description: "Celebrating our students' graduation achievements." },
  { id: 16, src: "/gallery/our staff member group photo.jpg", title: "Staff Group Photo", category: "community", description: "Our dedicated staff members who care for the children." },
  { id: 17, src: "/gallery/hero-1-min.jpg", title: "Group Photo", category: "children", description: "A group photo of our children at Motherly Care." },
  { id: 18, src: "/gallery/hero-2-min.jpg", title: "Smiles", category: "children", description: "Children smiling and happy at Motherly Care." },
  { id: 19, src: "/gallery/hero-3-min.jpg", title: "Activities", category: "activities", description: "Fun activities and learning moments." },
  { id: 20, src: "/gallery/hero-4-min.jpg", title: "Learning", category: "education", description: "Learning moments and educational activities." },
  { id: 21, src: "/gallery/hero-5-min.jpg", title: "Playtime", category: "activities", description: "Children enjoying playtime and recreation." },
  { id: 22, src: "/gallery/kk0.jpg", title: "Friends", category: "children", description: "Friendship and bonding among our children." },
  { id: 23, src: "/gallery/lklko.jpg", title: "Bilha", category: "children", description: "One of our children, Bilha, at Motherly Care." }
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "children", label: "Our Children" },
  { id: "education", label: "Education" },
  { id: "facilities", label: "Facilities" },
  { id: "activities", label: "Activities" },
  { id: "daily-life", label: "Daily Life" },
  { id: "achievements", label: "Achievements" },
  { id: "livelihood", label: "Livelihood" },
  { id: "spiritual", label: "Spiritual Life" },
  { id: "community", label: "Community" }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-[1.02] aspect-square"
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