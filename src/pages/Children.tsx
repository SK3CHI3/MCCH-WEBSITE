import { useState } from "react";
import { Heart, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SponsorshipForm from "@/components/SponsorshipForm";

// Children data with real images from our gallery
const childrenData = [
  {
    id: 1,
    name: "Children at Play",
    age: "6-12 years",
    grade: "Various Classes",
    interests: ["Writing", "Gardening", "Animals"],
    story: "These children love animals and outdoor activities. They take care of our garden and enjoy playing together.",
    monthlyNeed: 185,
    sponsored: false,
    profileImage: "/gallery/we out playing.jpg",
    annualFees: 185,
    feesDescription: "Includes: Tuition, books, stationery, uniforms, learning materials"
  },
  {
    id: 2,
    name: "Graduation Students",
    age: "13-14 years",
    grade: "Grade 6",
    interests: ["Art", "History", "Drama"],
    story: "These talented students are graduating from our primary school. They are passionate about drama and often lead our school performances.",
    monthlyNeed: 185,
    sponsored: false,
    profileImage: "/gallery/graduation ceremony.jpg",
    annualFees: 185,
    feesDescription: "Includes: Tuition, books, stationery, uniforms, learning materials"
  }
];

const Children = () => {
  // Remove filtering since we're removing the sponsored concept
  const filteredChildren = childrenData.filter(child => !child.sponsored); // Only show available children
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const handleSponsorClick = (childName: string) => {
    setSelectedChild(childName);
  };

  const handleCloseForm = () => {
    setSelectedChild(null);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      {child.age}
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
      
      {/* Sponsorship Form Modal */}
      {selectedChild && (
        <SponsorshipForm 
          childName={selectedChild} 
          onClose={handleCloseForm} 
        />
      )}
    </div>
  );
};

export default Children;