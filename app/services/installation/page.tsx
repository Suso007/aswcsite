"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Clock, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Building2,
  Users,
  Shield,
  Zap,
  Award,
  Fingerprint
} from "lucide-react";

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
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const installationServices = [
  {
    icon: Clock,
    title: "Tower Clock Installation",
    description: "Professional installation of tower clocks for buildings, churches, and monuments with precision synchronization"
  },
  {
    icon: Fingerprint,
    title: "Biometric Access Control",
    description: "Complete setup of fingerprint and facial recognition systems for secure access management"
  },
  {
    icon: Users,
    title: "Time Attendance Systems",
    description: "Installation and configuration of employee attendance tracking systems with software integration"
  },
  {
    icon: Building2,
    title: "Multi-Location Setup",
    description: "Centralized installation across multiple branches with unified management dashboard"
  },
  {
    icon: Shield,
    title: "Security Integration",
    description: "Integration with existing security systems, CCTV, and building management systems"
  },
  {
    icon: Zap,
    title: "Network Configuration",
    description: "Complete network setup, server configuration, and cloud connectivity for your systems"
  }
];

const installationProcess = [
  {
    step: "1",
    title: "Site Survey",
    description: "Free on-site assessment and requirement analysis"
  },
  {
    step: "2",
    title: "System Design",
    description: "Custom solution design with detailed quotation"
  },
  {
    step: "3",
    title: "Installation",
    description: "Professional installation by certified engineers"
  },
  {
    step: "4",
    title: "Training & Support",
    description: "Comprehensive training and ongoing support"
  }
];

const features = [
  {
    icon: Award,
    title: "Certified Engineers",
    description: "Factory-trained installation specialists"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks"
  },
  {
    icon: Clock,
    title: "Timely Completion",
    description: "On-schedule project delivery"
  },
  {
    icon: Users,
    title: "After-Sales Support",
    description: "Dedicated support team available 24/7"
  }
];

export default function InstallationServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              Professional Installation Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Expert Installation
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional installation services for tower clocks, time attendance systems, and access 
              control solutions. Our certified engineers ensure seamless setup and integration.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Certified Engineers</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Nationwide Service</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>1 Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation Services Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Installation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive installation solutions for all your time management and security needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {installationServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 4-step process ensuring successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {installationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="border bg-card shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
                {index < installationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Request Form Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Installation Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to schedule a site survey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Installation Request Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Installation Request Form</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company-name" className="text-sm font-medium text-foreground">
                          Company/Organization Name *
                        </label>
                        <Input id="company-name" placeholder="Company name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="contact-person" className="text-sm font-medium text-foreground">
                          Contact Person *
                        </label>
                        <Input id="contact-person" placeholder="Your name" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number *
                        </label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium text-foreground">
                        Installation Address *
                      </label>
                      <Textarea
                        id="address"
                        placeholder="Complete address where installation is required..."
                        className="min-h-20"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service-type" className="text-sm font-medium text-foreground">
                        Installation Type *
                      </label>
                      <select 
                        id="service-type"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        required
                      >
                        <option value="">Select Installation Type</option>
                        <option value="tower-clock">Tower Clock Installation</option>
                        <option value="biometric-access">Biometric Access Control</option>
                        <option value="attendance-system">Time Attendance System</option>
                        <option value="multi-location">Multi-Location Setup</option>
                        <option value="security-integration">Security System Integration</option>
                        <option value="network-setup">Network Configuration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="project-size" className="text-sm font-medium text-foreground">
                        Project Size
                      </label>
                      <select 
                        id="project-size"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select Project Size</option>
                        <option value="small">Small (1-5 devices)</option>
                        <option value="medium">Medium (6-20 devices)</option>
                        <option value="large">Large (21-50 devices)</option>
                        <option value="enterprise">Enterprise (50+ devices)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium text-foreground">
                        Expected Timeline
                      </label>
                      <select 
                        id="timeline"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Urgent (Within 1 week)</option>
                        <option value="1-2-weeks">1-2 Weeks</option>
                        <option value="2-4-weeks">2-4 Weeks</option>
                        <option value="1-2-months">1-2 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="requirements" className="text-sm font-medium text-foreground">
                        Project Requirements & Special Notes *
                      </label>
                      <Textarea
                        id="requirements"
                        placeholder="Please provide details about your installation requirements, number of devices, specific features needed, etc."
                        className="min-h-32"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-input" required />
                        <span className="text-muted-foreground">
                          I agree to be contacted for a site survey and quotation
                        </span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Submit Installation Request
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Our Installation Team</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Head Office</h4>
                        <p className="text-sm text-muted-foreground">
                          6, Binoy Badal Dinesh Bag E<br />
                          B.B.D. Bagh, East<br />
                          Kolkata, West Bengal 700001<br />
                          India
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">
                          Main: 033-22300295 / 40672089<br />
                          Installation: 033-22847116
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          installation@angloswiss.in<br />
                          info@angloswiss.in
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                        <p className="text-sm text-muted-foreground">
                          Monday - Saturday: 10:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Free site survey and consultation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Detailed quotation within 48 hours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Professional installation by certified engineers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Comprehensive training and documentation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">1-year warranty and ongoing support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border bg-primary/5 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Nationwide Installation Service
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We provide installation services across India with local support teams.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Coverage Areas
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
