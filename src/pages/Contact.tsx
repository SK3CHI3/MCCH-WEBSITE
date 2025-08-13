import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              We'd love to hear from you. Get in touch with us for any questions, 
              partnership opportunities, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you're interested in sponsoring a child, volunteering, making a donation, 
                  or visiting our facility, we're here to help and answer any questions you may have.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      +254 704 460 726 (Primary)<br />
                      +254 720 877 507<br />
                      0724 118 631
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      motherlycare2018@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visiting Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => window.location.href = "tel:+254704460726"}
                    className="gradient-primary flex-1"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +254 704 460 726
                  </Button>
                  <Button 
                    onClick={() => window.location.href = "mailto:motherlycare2018@gmail.com"}
                    variant="outline" 
                    className="flex-1"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-border pt-6 mt-6">
                <h3 className="font-semibold text-foreground mb-4">About Our Founder</h3>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>The late Mary Metobo ("Mama Mary")</strong> founded Motherly Care in 1998 after a life-changing train accident. 
                    Starting with just 10 children, her vision has grown to support over 150 vulnerable children.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We specialize in caring for orphans, HIV-positive, vulnerable and neglected children aged 1-17 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl shadow-medium border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="sponsorship">Child Sponsorship</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donation">Donations</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="visit">Facility Visit</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you or how you'd like to help us..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary shadow-medium hover:shadow-strong transition-smooth"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Off Kangundo Road, Ruai - 1 km from Ruai Junction, near Quick Mart and Baraka shop
            </p>
            <p className="text-muted-foreground">We welcome visitors by appointment</p>
          </div>
          
          {/* Google Maps */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8492028067953!2d37.009064190179494!3d-1.2628683742534852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6b3e21deb78f%3A0x4ddc149254afd631!2sMotherly%20Care%20Children&#39;s%20Home%20(MCCH)!5e0!3m2!1sen!2ske!4v1754692764972!5m2!1sen!2ske" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="text-center mt-6">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => window.open("https://maps.google.com/maps/dir/?api=1&destination=Motherly%20Care%20Children's%20Home%20(MCCH),%20Kenya", "_blank")}
                  className="gradient-primary"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button 
                  onClick={() => window.location.href = "tel:+254704460726"}
                  variant="outline"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Before Visiting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about visiting and supporting us
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I visit the children's home?",
                  answer: "Yes! We welcome visitors by appointment. Please contact us in advance to schedule your visit during our visiting hours."
                },
                {
                  question: "How can I sponsor a child?",
                  answer: "You can browse our available children on the 'Our Children' page and contact us to begin the sponsorship process. Monthly sponsorship starts at $50."
                },
                {
                  question: "What volunteer opportunities are available?",
                  answer: "We have various volunteer roles including teaching, mentoring, administrative support, and facility maintenance. Contact us to discuss opportunities that match your skills."
                },
                {
                  question: "Are donations tax-deductible?",
                  answer: "Yes, Motherly Care is a registered charitable organization. We provide tax-deductible receipts for all donations."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background rounded-lg border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;