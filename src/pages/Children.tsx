import { useState } from "react";
import { Heart, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Mock data for children available for sponsorship
const childrenData = [
  {
    id: 1,
    name: "Grace Wanjiku",
    age: 8,
    grade: "Class 3",
    interests: ["Reading", "Art", "Singing"],
    story: "Grace loves to draw and dreams of becoming an artist. She excels in her studies and helps younger children with their homework.",
    monthlyNeed: 50,
    sponsored: false,
    profileImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "David Kiprotich",
    age: 12,
    grade: "Class 7",
    interests: ["Football", "Mathematics", "Science"],
    story: "David is passionate about science and wants to become a doctor. He's the captain of our football team and shows great leadership skills.",
    monthlyNeed: 60,
    sponsored: false,
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Faith Akinyi",
    age: 10,
    grade: "Class 5",
    interests: ["Dancing", "Cooking", "Storytelling"],
    story: "Faith has a beautiful voice and loves to sing in our choir. She dreams of becoming a teacher to help other children learn.",
    monthlyNeed: 55,
    sponsored: true,
    profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Samuel Ochieng",
    age: 14,
    grade: "Class 8",
    interests: ["Technology", "Building", "Music"],
    story: "Samuel is fascinated by technology and computers. He helps maintain our computer lab and teaches other children basic computer skills.",
    monthlyNeed: 65,
    sponsored: false,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Mary Njeri",
    age: 9,
    grade: "Class 4",
    interests: ["Writing", "Gardening", "Animals"],
    story: "Mary loves animals and wants to become a veterinarian. She takes care of our garden and writes beautiful stories about nature.",
    monthlyNeed: 52,
    sponsored: false,
    profileImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Peter Mwangi",
    age: 13,
    grade: "Class 7",
    interests: ["Art", "History", "Drama"],
    story: "Peter is a talented artist who creates beautiful paintings. He's also passionate about drama and often leads our school performances.",
    monthlyNeed: 58,
    sponsored: true,
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
];

const Children = () => {
  // Remove filtering since we're removing the sponsored concept
  const filteredChildren = childrenData.filter(child => !child.sponsored); // Only show available children

  const handleSponsorClick = (childName: string) => {
    // In a real app, this would open a sponsorship form or redirect to a payment page
    alert(`Thank you for your interest in sponsoring ${childName}! This would redirect to our sponsorship form.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Children</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Meet the amazing children at Motherly Care and learn how you can 
              make a difference in their lives through sponsorship.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Needs Info */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Educational Support Needed</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our children need educational support including school fees, stationery, uniforms, and learning materials.
            </p>
            <div className="bg-primary/10 rounded-lg p-6">
              <p className="text-lg font-semibold text-foreground mb-2">
                Annual School Fees: $185 USD (KSH 24,000)
              </p>
              <p className="text-muted-foreground">
                This covers tuition, books, stationery, uniforms, and educational materials for one child for the entire year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChildren.map((child) => (
              <div 
                key={child.id}
                className="bg-background rounded-2xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden"
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={child.profileImage}
                    alt={child.name}
                    className="w-full h-full object-cover"
                  />
                  {child.sponsored && (
                    <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="h-3 w-3 inline mr-1" />
                      Sponsored
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{child.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {child.age} years
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {child.grade}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {child.story}
                  </p>

                  {/* Interests */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      {child.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Educational Support Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Annual school fees:</span>
                      <span className="text-lg font-bold text-primary">$185 USD</span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Includes: Tuition, books, stationery, uniforms, learning materials
                    </div>
                    <Button
                      onClick={() => handleSponsorClick(child.name)}
                      className="w-full gradient-primary shadow-medium hover:shadow-strong transition-smooth"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Support {child.name}'s Education
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredChildren.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No children found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform a Life Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your sponsorship provides education, healthcare, nutrition, and hope to a child in need. 
            Join our family of sponsors and make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
            >
              Start Sponsoring Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More About Sponsorship
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Children;