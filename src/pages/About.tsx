import { CheckCircle, Heart, Users, BookOpen, Target, Eye } from "lucide-react";
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

      {/* Welcome Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={childrenGroup}
                alt="Children at Motherly Care"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Welcome Message</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Dear friends, partners, and supporters, it is with immense joy and gratitude 
                  that we present to you the story of Motherly Care Children's Home. This 
                  organization is a reflection of the love, dedication, and dreams of our 
                  children, staff, and community."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Motherly Care isn't just a school — it's a home, a place of healing, 
                  growth, and transformation. Thank you for walking this journey with us."
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">– Mr. Moffatt Oseko</p>
                  <p className="text-sm text-muted-foreground">Manager, Motherly Care Children's Home</p>
                </div>
              </div>
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
                Motherly Care Children's Home is located in Ruai, Nairobi, Kenya, serving 
                orphans and vulnerable children through education, shelter, and support programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our strategic location allows us to serve the surrounding communities while 
                providing a peaceful environment for learning and growth. The facility includes 
                dormitories, classrooms, dining areas, recreational spaces, and vocational 
                training workshops.
              </p>
            </div>
            <div>
              <img
                src={education}
                alt="Education at Motherly Care"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;