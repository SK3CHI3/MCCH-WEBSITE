import { Heart, Users, DollarSign, Calendar, Gift, Handshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState("sponsor");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab && ways.some(way => way.id === tab)) {
      setActiveTab(tab);
      // If it's the donate tab, scroll to donation section after a short delay
      if (tab === 'donate') {
        setTimeout(() => {
          document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  const ways = [
    {
      id: "sponsor",
      icon: Heart,
      title: "Sponsor a Child",
      description: "Make a direct impact on a child's life through monthly sponsorship",
      details: {
        commitment: "$50-65 per month",
        duration: "Flexible, minimum 1 year recommended",
        includes: [
          "Education fees and school supplies",
          "Nutritious meals and healthcare",
          "Clothing and personal items",
          "Regular updates and photos",
          "Opportunity to write letters",
          "Annual progress reports"
        ],
        process: [
          "Choose a child from our available profiles",
          "Complete the sponsorship application",
          "Set up monthly payment method",
          "Receive welcome packet with child's information",
          "Begin receiving regular updates"
        ]
      }
    },
    {
      id: "volunteer",
      icon: Users,
      title: "Volunteer",
      description: "Share your skills and time to directly support our children",
      details: {
        commitment: "Flexible schedules available",
        duration: "Minimum 3 months preferred",
        includes: [
          "Teaching and tutoring assistance",
          "Mentorship and counseling",
          "Skills training workshops",
          "Administrative support",
          "Special events coordination",
          "Maintenance and facility work"
        ],
        process: [
          "Submit volunteer application",
          "Background check and interviews",
          "Orientation and training",
          "Match with suitable role",
          "Begin volunteer service"
        ]
      }
    },
    {
      id: "donate",
      icon: DollarSign,
      title: "Make a Donation",
      description: "Support our programs with one-time or recurring donations",
      details: {
        commitment: "Any amount makes a difference",
        duration: "One-time or recurring",
        includes: [
          "$25 - Provides a week of nutritious meals",
          "$50 - Covers stationery and learning materials for one month",
          "$100 - Supports medical care and health check-ups",
          "$185 - Covers full annual school fees for one child",
          "$300 - Provides uniforms and clothing for multiple children",
          "Custom amounts for specific facility needs"
        ],
        process: [
          "Choose donation amount and frequency",
          "Select specific program to support",
          "Complete secure online donation",
          "Receive tax-deductible receipt",
          "Get updates on impact of your gift"
        ]
      }
    },
    {
      id: "fundraise",
      icon: Gift,
      title: "Fundraise",
      description: "Organize fundraising events in your community",
      details: {
        commitment: "Event-based involvement",
        duration: "Ongoing opportunities",
        includes: [
          "Birthday fundraisers",
          "School and church events",
          "Corporate partnerships",
          "Online crowdfunding campaigns",
          "Sports events and challenges",
          "Community awareness events"
        ],
        process: [
          "Contact our fundraising coordinator",
          "Plan your fundraising event",
          "Receive promotional materials",
          "Host your event",
          "Submit funds raised"
        ]
      }
    },
    {
      id: "partner",
      icon: Handshake,
      title: "Corporate Partnership",
      description: "Partner with us as an organization for greater impact",
      details: {
        commitment: "Customized partnership agreements",
        duration: "Long-term partnerships preferred",
        includes: [
          "Employee volunteer programs",
          "Matching gift programs",
          "Skilled volunteer services",
          "Equipment and supply donations",
          "Facility improvements",
          "Scholarship sponsorships"
        ],
        process: [
          "Initial partnership discussion",
          "Needs assessment and proposal",
          "Partnership agreement development",
          "Implementation planning",
          "Ongoing partnership management"
        ]
      }
    },
    {
      id: "visit",
      icon: Calendar,
      title: "Visit Us",
      description: "Come celebrate with us! Birthdays, holidays, or any special occasion - we welcome visitors who want to share joy with our children. Visiting Hours: Monday-Friday 9AM-5PM, Saturday & Sunday 10AM-3PM",
      details: {
        commitment: "Ongoing awareness efforts",
        duration: "As much as you can spare",
        includes: [
          "Birthday celebrations with children",
          "Holiday parties and gift giving",
          "Community events and gatherings",
          "Educational tours of our facility",
          "Interaction with children and staff",
          "Sharing meals and activities"
        ],
        process: [
          "Call us to schedule your visit",
          "Plan your celebration or event",
          "Coordinate with our staff",
          "Enjoy time with our children",
          "Share the joy and make memories"
        ]
      }
    }
  ];

  const activeWay = ways.find(way => way.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              There are many ways to make a difference in the lives of children at Motherly Care. 
              Find the perfect way for you to contribute to their bright futures.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help - Tab Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {ways.map((way) => (
              <button
                key={way.id}
                onClick={() => setActiveTab(way.id)}
                className={`p-4 rounded-xl border transition-smooth text-center ${
                  activeTab === way.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <way.icon className={`h-6 w-6 mx-auto mb-2 ${
                  activeTab === way.id ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`text-sm font-medium ${
                  activeTab === way.id ? "text-primary" : "text-foreground"
                }`}>
                  {way.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeWay && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl shadow-medium border border-border p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <activeWay.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{activeWay.title}</h2>
                    <p className="text-muted-foreground">{activeWay.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">What's Included</h3>
                      <ul className="space-y-2">
                        {activeWay.details.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">Commitment:</span>
                        <span className="text-primary font-semibold">{activeWay.details.commitment}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">Duration:</span>
                        <span className="text-muted-foreground">{activeWay.details.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">How to Get Started</h3>
                    <div className="space-y-3">
                      {activeWay.details.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button 
                        onClick={() => {
                          if (activeWay.id === "donate") {
                            document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.location.href = "tel:+254704460726";
                          }
                        }}
                        className="w-full gradient-primary shadow-medium hover:shadow-strong transition-smooth"
                      >
                        {activeWay.id === "donate" ? "View Payment Options" : "Call +254 704 460 726"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Supporter Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from those who have made a difference in children's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Child Sponsor",
                story: "Sponsoring Grace for 2 years has been incredibly rewarding. Watching her grow and excel in school fills my heart with joy.",
                impact: "Sponsors Grace, 8 years old"
              },
              {
                name: "Tech Solutions Ltd",
                role: "Corporate Partner",
                story: "Our partnership with Motherly Care has not only helped children but also brought our team together for a meaningful cause.",
                impact: "Funded computer lab setup"
              },
              {
                name: "Mark Stevens",
                role: "Volunteer Teacher",
                story: "Teaching these bright children has taught me more than I ever taught them. Their resilience and hope inspire me daily.",
                impact: "6 months of math tutoring"
              }
            ].map((story, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{story.story}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{story.name}</div>
                  <div className="text-sm text-primary">{story.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{story.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section id="donation-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How to Donate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred payment method to support our children's education and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* M-Pesa Payment */}
            <div className="bg-background rounded-2xl p-6 shadow-medium border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">M-Pesa Payment</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-foreground">Paybill Number:</span>
                  <span className="text-primary font-mono text-lg cursor-pointer" onClick={() => navigator.clipboard.writeText('177338')}>
                    177338
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-foreground">Account Number:</span>
                  <span className="text-primary font-mono text-lg cursor-pointer" onClick={() => navigator.clipboard.writeText('MCCH')}>
                    MCCH
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Click on the numbers above to copy them to your clipboard.
                </p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-background rounded-2xl p-6 shadow-medium border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Bank Transfer</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-foreground">Account Name:</span>
                  <span className="text-primary font-mono text-sm cursor-pointer" onClick={() => navigator.clipboard.writeText('motherlycarechildenshome')}>
                    motherlycarechildenshome
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-foreground">Account Number:</span>
                  <span className="text-primary font-mono text-lg cursor-pointer" onClick={() => navigator.clipboard.writeText('5800555002')}>
                    5800555002
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Click on the numbers above to copy them to your clipboard.
                </p>
              </div>
            </div>
          </div>

          {/* What Your Donation Provides */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What Your Donation Provides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="font-semibold text-primary">$25</span> - Provides a week of nutritious meals for one child
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="font-semibold text-primary">$50</span> - Covers stationery and learning materials for one month
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="font-semibold text-primary">$100</span> - Supports medical care and health check-ups
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="font-semibold text-primary">$185</span> - Covers full annual school fees for one child
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Involved?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call us today to discuss how you can make a difference in a child's life. 
              Every contribution, big or small, creates lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.location.href = "tel:+254704460726"}
                className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
              >
                Call +254 704 460 726
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = "mailto:motherlycare2018@gmail.com"}
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;