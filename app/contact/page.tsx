"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  Award
} from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Registered Address",
    content: "6, Binoy Badal Dinesh Bag E, B.B.D. Bagh, East\nWest Bengal 700001, India",
    phone: "033-22300295 / 40672089",
    description: "Our main office & registered address"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "General Inquiries: info@angloswiss.in\nWatch Service: service@angloswiss.in",
    description: "We respond within 24 hours"
  }
];

const departmentContacts = [
  {
    title: "Watch & Clocks (Sales)",
    icon: Award,
    phone: "2230-0295 / 2230-0297",
    contacts: [
      {
        name: "Mr. Ahmed Sualeh",
        role: "Watch Showroom Sales",
        phones: ["+91-9230646965", "+91-7003889225", "+91-7603006220"]
      }
    ]
  },
  {
    title: "Watch Repairs",
    icon: Building2,
    contacts: [
      {
        name: "Mr. Sajid Ismail",
        role: "Watch Repair Specialist",
        phones: ["4066-1052"]
      }
    ]
  },
  {
    title: "Biometric & Access Control",
    icon: Users,
    phone: "033-22847116, 40672089, 8420112012",
    contacts: [
      {
        name: "Mr. Mofiqul Islam",
        role: "Security Products & Solutions",
        phones: ["+91-9230023018"]
      },
      {
        name: "Mr. Dibyendu Bhattacharya",
        role: "Biometric Attendance Support",
        phones: ["+91-9230506656"]
      }
    ]
  }
];

const services = [
  {
    icon: Award,
    title: "Watch Servicing",
    description: "Expert repair and maintenance for all premium brands",
    features: ["Swiss & Japanese brands", "Authentic parts", "6-month warranty"]
  },
  {
    icon: Building2,
    title: "Time Recording Systems",
    description: "Complete attendance and access control solutions",
    features: ["Mechanical systems", "Electronic systems", "Custom installations"]
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Personalized guidance for timepiece selection",
    features: ["Expert advice", "Heritage insights", "Custom recommendations"]
  }
];

const stats = [
  { number: "117+", label: "Years of Excellence" },
  { number: "50K+", label: "Happy Customers" },
  { number: "40+", label: "Premium Brands" },
  { number: "24/7", label: "Support Available" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus('success');
      setFormData({ name: '', contact: '', type: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Contact
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Anglo Swiss Watch Co.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with India's premier timepiece specialists. Whether you need expert watch servicing, 
              time recording solutions, or guidance in selecting the perfect timepiece, we're here to help.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Professional Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="hidden py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with our team of timepiece experts.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact Information Cards */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line mb-2 text-sm">{info.content}</p>
                          {info.phone && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground font-medium">{info.phone}</span>
                            </div>
                          )}
                          <p className="text-xs text-primary font-medium">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Department Contacts */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Department Contacts</h3>
              {departmentContacts.map((dept, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border bg-card shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <dept.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{dept.title}</h4>
                          {dept.phone && (
                            <div className="flex items-center space-x-2 mt-1">
                              <Phone className="w-3 h-3 text-primary" />
                              <span className="text-sm text-muted-foreground">{dept.phone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {dept.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="border-l-2 border-primary/20 pl-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="font-medium text-foreground">{contact.name}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{contact.role}</p>
                                <div className="space-y-1">
                                  {contact.phones.map((phone, phoneIndex) => (
                                    <div key={phoneIndex} className="flex items-center space-x-2">
                                      <Phone className="w-3 h-3 text-primary" />
                                      <span className="text-sm text-foreground font-mono">{phone}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <a href={`tel:${contact.phones[0].replace(/[^0-9+]/g, '')}`}>
                                  <Phone className="w-3 h-3 mr-1" />
                                  Call
                                </a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                    Quick Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        suppressHydrationWarning
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium text-foreground">
                        Contact *
                      </label>
                      <Input 
                        id="contact" 
                        type="tel" 
                        placeholder="Your contact number"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        suppressHydrationWarning
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium text-foreground">
                        Department
                      </label>
                      <select 
                        id="type"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        value={formData.type}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        suppressHydrationWarning
                      >
                        <option value="">Select Department</option>
                        <option value="watch-sales">Watch Sales</option>
                        <option value="watch-repair">Watch Repair</option>
                        <option value="biometric">Biometric & Access Control</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        className="min-h-24"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                        <p className="text-sm text-green-800 dark:text-green-200 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                        <p className="text-sm text-red-800 dark:text-red-200">
                          Failed to send message. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                    
                    <Button type="submit" size="sm" className="w-full" disabled={isSubmitting} suppressHydrationWarning>
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="w-3 h-3 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Exclusive Showroom
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our complete collection and speak with our timepiece experts in person.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Why Visit Our Showroom?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Premium Collection</h4>
                        <p className="text-sm text-muted-foreground">
                          Experience our complete range of luxury timepieces from 40+ premium brands
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Expert Guidance</h4>
                        <p className="text-sm text-muted-foreground">
                          Our certified specialists provide personalized recommendations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Heritage Experience</h4>
                        <p className="text-sm text-muted-foreground">
                          Discover our rich history since 1908 and time recording innovations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Service Center</h4>
                        <p className="text-sm text-muted-foreground">
                          On-site repair and maintenance facilities with Swiss-trained technicians
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <a href="https://maps.app.goo.gl/aXbhqR1YGdqJkVXcA" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href="tel:+913322300295">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border bg-card shadow-lg overflow-hidden p-0">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.3147059061039!2d88.34931820299064!3d22.571578994791274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a109422147%3A0xd6f3b51ea8c762be!2sAnglo%20Swiss%20Watch%20Co.!5e0!3m2!1sen!2sin!4v1761925140604!5m2!1sen!2sin"
                    width="585" 
                    height="400" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the comprehensive range of services we offer to meet all your timepiece needs.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <Separator className="my-4" />
                      
                      <ul className="space-y-2 text-left">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hidden py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Timepiece Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Anglo Swiss Watch Co. for their timepiece needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call Expert Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}