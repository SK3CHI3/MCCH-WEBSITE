import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Send, User, Mail, Phone, DollarSign, Heart } from "lucide-react";

interface SponsorshipFormProps {
  childName: string;
  onClose: () => void;
}

const SponsorshipForm = ({ childName, onClose }: SponsorshipFormProps) => {
  const [formData, setFormData] = useState({
    sponsorName: "",
    email: "",
    phone: "",
    address: "",
    preferredContact: "email",
    sponsorshipAmount: "50",
    paymentFrequency: "monthly",
    additionalMessage: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare email content
      const emailSubject = `Sponsorship Interest for ${childName}`;
      const emailBody = `
New Sponsorship Interest

Child: ${childName}
Sponsor Name: ${formData.sponsorName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Preferred Contact: ${formData.preferredContact}
Sponsorship Amount: $${formData.sponsorshipAmount}
Payment Frequency: ${formData.paymentFrequency}
Additional Message: ${formData.additionalMessage}

This form was submitted from the Motherly Care website.
      `;

      // Send email using mailto
      const mailtoLink = `mailto:motherlycare2018@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-background rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-success" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            Your sponsorship interest for {childName} has been sent. We'll contact you soon to discuss the next steps.
          </p>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Sponsor {childName}</h2>
            <p className="text-muted-foreground">Complete the form below to express your interest in sponsorship</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <User className="h-4 w-4 inline mr-1" />
                Full Name *
              </label>
              <input
                type="text"
                name="sponsorName"
                value={formData.sponsorName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Mail className="h-4 w-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Phone className="h-4 w-4 inline mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Contact Method
              </label>
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your address (optional)"
            />
          </div>

          {/* Sponsorship Details */}
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sponsorship Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <DollarSign className="h-4 w-4 inline mr-1" />
                  Monthly Amount *
                </label>
                <select
                  name="sponsorshipAmount"
                  value={formData.sponsorshipAmount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="25">$25 - Basic Support</option>
                  <option value="50">$50 - Standard Sponsorship</option>
                  <option value="65">$65 - Premium Sponsorship</option>
                  <option value="100">$100 - Comprehensive Support</option>
                  <option value="custom">Custom Amount</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Payment Frequency
                </label>
                <select
                  name="paymentFrequency"
                  value={formData.paymentFrequency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Message
            </label>
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tell us about your motivation for sponsoring or any questions you have..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 gradient-primary shadow-medium hover:shadow-strong transition-smooth"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Interest
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SponsorshipForm;
