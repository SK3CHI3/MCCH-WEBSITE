import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Heart, Users, BookOpen, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import childrenGroup from "@/assets/children-group.jpg";
import education from "@/assets/education.jpg";
import facilities from "@/assets/facilities.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
               <img
                 src="/gallery/our gate_11zon.jpg"
                 alt="Main entrance gate of Motherly Care"
                 className="rounded-2xl shadow-strong w-full h-auto"
               />
             </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Welcome to Motherly Care</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to our family! Founded by the late Mary Metobo ("Mama Mary") in 1998, Motherly Care began with just 10 children 
                after Mama Mary's own near-fatal train accident that changed her life's direction. 
                We provide a safe, nurturing environment where children receive education, spiritual 
                guidance, and life skills to become self-reliant and empowered individuals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today we care for around 150 children, focusing on orphans, HIV-positive, vulnerable 
                and neglected kids aged 1-17 years through our children's home and in-house primary school.
              </p>
              <Link to="/about">
                <Button className="gradient-primary shadow-medium hover:shadow-strong transition-smooth group">
                  Learn More About Our Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide a safe, nurturing home where vulnerable children receive education, 
                spiritual guidance, and life skills to become self-reliant and empowered individuals.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-8 w-8 text-primary fill-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform lives by offering vocational training, holistic support, and 
                structured transition programs, ensuring every child achieves independence and stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to nurture every aspect of a child's development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                             {
                 icon: BookOpen,
                 title: "CBE Education",
                 description: "Competency-Based Education following Kenya's new holistic education system that focuses on developing learners' skills, knowledge, attitudes, and values.",
                 image: "/gallery/WhatsApp Image 2025-06-18 at 02.57.57_2e24ed7c.jpg"
               },
              {
                icon: Heart,
                title: "Spiritual Development", 
                description: "Building strong moral foundations through spiritual guidance and character development programs.",
                image: "/gallery/72673018_785831101830486_8444662335439634432_n.jpg"
              },
              {
                icon: Users,
                title: "Life Skills",
                description: "Essential life skills training to prepare children for independent living and future success.",
                image: "/gallery/playground for our little children_11zon.jpg"
              }
            ].map((program, index) => (
              <div key={index} className="bg-background rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="outline" size="lg" className="group">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm md:text-base text-muted-foreground">Children Cared For</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">12+</div>
              <p className="text-sm md:text-base text-muted-foreground">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm md:text-base text-muted-foreground">Lives Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm md:text-base text-muted-foreground">Love & Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
               <img
                 src="/gallery/469318253_549155091423432_3624827173028074347_n.jpg"
                 alt="Children at Motherly Care"
                 className="rounded-2xl shadow-strong w-full h-auto"
               />
             </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story Since 1998</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by the late Mary Metobo ("Mama Mary") in 1998, Motherly Care began with just 10 children 
                  after Mama Mary's own near-fatal train accident that changed her life's direction.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a small act of compassion has grown into a thriving children's home and school. 
                  Today, we run both a children's home and an in-house primary school, supporting children 
                  before they move on to secondary education.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We care for around 150 children, focusing on orphans, HIV-positive, vulnerable and 
                  neglected kids aged 1-17 years.
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">"Every child deserves love, care, and hope for tomorrow."</p>
                  <p className="text-sm text-muted-foreground">– Mama Mary, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-2xl shadow-strong p-8 lg:p-12 text-center border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">Make a Difference Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your support can transform a child's life. Whether through sponsorship, donations, 
              or volunteering, there are many ways to help us continue our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/children">
                <Button size="lg" className="gradient-primary shadow-medium hover:shadow-strong transition-smooth">
                  <Heart className="h-4 w-4 mr-2" />
                  Sponsor a Child
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="outline" size="lg">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
