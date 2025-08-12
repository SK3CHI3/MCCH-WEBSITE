import { CheckCircle, Heart, Users, BookOpen, Target, Eye, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import childrenGroup from "@/assets/children-group.jpg";
import education from "@/assets/education.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Showing love and care to every child in our home."
    },
    {
      icon: BookOpen,
      title: "Faith",
      description: "Upholding strong moral and spiritual foundations."
    },
    {
      icon: Users,
      title: "Education",
      description: "Equipping children with academic and practical skills."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Preparing children for independent living and success."
    },
    {
      icon: CheckCircle,
      title: "Community",
      description: "Strengthening bonds through partnerships and outreach."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Motherly Care</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              A beacon of hope for vulnerable children in Kenya, providing education, 
              care, and opportunities for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/gallery/best arieal photo.jpg"
                alt="Aerial view of Motherly Care facilities"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story & History</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by the late Mary Metobo ("Mama Mary") in 1998, Motherly Care began with just 10 children 
                  after Mama Mary's own near-fatal train accident that changed her life's direction. 
                  What started as a small act of compassion has grown into a thriving children's home and school.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we run both a children's home and an in-house primary school, supporting children 
                  before they move on to secondary education. We care for around 150 children, focusing on 
                  orphans, HIV-positive, vulnerable and neglected kids aged 1-17 years.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founder's life-changing experience taught her that every child deserves love, care, 
                  and hope for tomorrow. This vision continues to guide us 26 years later.
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">"After my accident, I realized God saved me for a purpose - to care for His children."</p>
                  <p className="text-sm text-muted-foreground">– Mama Mary, Founder (1998)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals & What We Do */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every child receives the care, education, and support they need to thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">
                Running our in-house primary school and supporting children through to secondary education
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare</h3>
              <p className="text-muted-foreground">
                Providing medical care and support, especially for HIV-positive children
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Family Care</h3>
              <p className="text-muted-foreground">
                Creating a loving home environment where vulnerable children can grow and flourish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
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

            {/* Vision */}
            <div className="bg-background rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-primary" />
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

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape the environment we create for our children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth border border-border"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & History */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Location</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motherly Care Children's Home is located off Kangundo Road in Ruai, just 1 km from 
                Ruai Junction, near Quick Mart and Baraka shop. Our strategic location allows us to 
                serve the surrounding communities while providing a peaceful environment for learning and growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The facility includes dormitories, classrooms, dining areas, recreational spaces, and 
                our in-house primary school where we educate children before they transition to secondary education.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-foreground font-medium">Visit Us:</p>
                <p className="text-muted-foreground">Off Kangundo Road, Ruai</p>
                <p className="text-muted-foreground">1 km from Ruai Junction</p>
                <p className="text-muted-foreground">Near Quick Mart and Baraka shop</p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8492028067953!2d37.009064190179494!3d-1.2628683742534852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6b3e21deb78f%3A0x4ddc149254afd631!2sMotherly%20Care%20Children&#39;s%20Home%20(MCCH)!5e0!3m2!1sen!2ske!4v1754692764972!5m2!1sen!2ske" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="text-center mt-4">
                <button 
                  onClick={() => window.open("https://maps.google.com/maps/dir/?api=1&destination=Motherly%20Care%20Children's%20Home%20(MCCH),%20Kenya", "_blank")}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;