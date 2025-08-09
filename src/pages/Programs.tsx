import { BookOpen, Heart, Users, Wrench, GraduationCap, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import education from "@/assets/education.jpg";
import facilities from "@/assets/facilities.jpg";

const Programs = () => {
  const programs = [
         {
       icon: BookOpen,
       title: "Primary Education",
       description: "Comprehensive primary education following the Kenyan curriculum from nursery to Class 8.",
       features: [
         "Qualified teachers and modern teaching methods",
         "Small class sizes for personalized attention",
         "STEM subjects with hands-on learning",
         "Library and reading programs",
         "Regular assessments and progress tracking"
       ],
   image: "/gallery/WhatsApp Image 2025-06-18 at 02.57.57_2e24ed7c.jpg"
     },
    {
      icon: Heart,
      title: "Spiritual Development",
      description: "Building strong moral foundations through spiritual guidance and character development.",
      features: [
        "Daily devotions and prayer time",
        "Bible study and Sunday school",
        "Character building workshops",
        "Moral and ethical education",
        "Community service projects"
      ],
      image: "/gallery/72673018_785831101830486_8444662335439634432_n.jpg"
    },
    {
      icon: Users,
      title: "Life Skills Training",
      description: "Essential life skills to prepare children for independent living and future success.",
      features: [
        "Communication and interpersonal skills",
        "Financial literacy and money management",
        "Personal hygiene and health education",
        "Time management and organization",
        "Leadership and teamwork development"
      ],
      image: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=800&h=600&fit=crop"
    },
    {
      icon: Wrench,
      title: "Vocational Training",
      description: "Practical skills training to provide alternative pathways to employment and entrepreneurship.",
      features: [
        "Carpentry and woodworking",
        "Tailoring and fashion design",
        "Computer skills and digital literacy",
        "Agriculture and farming techniques",
        "Small business and entrepreneurship"
      ],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      icon: GraduationCap,
      title: "Transition Support",
      description: "Structured programs to help children transition successfully to secondary education and beyond.",
      features: [
        "Secondary school placement assistance",
        "Scholarship and bursary applications",
        "Career guidance and counseling",
        "Alumni mentorship programs",
        "Higher education support"
      ],
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&h=600&fit=crop"
    },
    {
      icon: Home,
      title: "Residential Care",
      description: "Safe, nurturing home environment with comprehensive care and support services.",
      features: [
        "Clean and comfortable dormitories",
        "Nutritious meals and healthcare",
        "Recreational activities and sports",
        "Counseling and emotional support",
        "Family-style living environment"
      ],
  image: "/gallery/pp.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive programs designed to nurture, educate, and empower children 
              for a successful future through holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Holistic Child Development</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our programs are designed to address every aspect of a child's development - 
              academic, spiritual, emotional, and practical - ensuring they are well-prepared 
              for independent living and success in their chosen paths.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start space-x-2 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              The results of our comprehensive programs speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Children Enrolled", description: "In our various programs" },
              { number: "95%", label: "Success Rate", description: "Transition to secondary school" },
              { number: "12+", label: "Years", description: "Of dedicated service" },
              { number: "50+", label: "Graduates", description: "Now successful adults" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 text-center shadow-soft"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Our Programs Work</h2>
              <p className="text-lg text-muted-foreground">
                Our holistic approach ensures comprehensive development of every child
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Individualized Attention",
                  description: "Each child receives personalized care and education plans tailored to their unique needs and potential."
                },
                {
                  title: "Family Environment",
                  description: "We create a loving, family-like atmosphere where children feel secure and valued."
                },
                {
                  title: "Community Integration",
                  description: "Strong partnerships with local communities provide additional support and opportunities."
                },
                {
                  title: "Long-term Support",
                  description: "Our commitment extends beyond childhood, supporting graduates through their adult lives."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-soft border border-border"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your support helps us continue providing these life-changing programs to children in need. 
            Join us in building brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
            >
              Fund a Program
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn How to Help
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;