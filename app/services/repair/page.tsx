"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Wrench, 
  Clock, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Shield,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { LayoutGridDemo } from "@/components/service-gallary";

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

const servicesOffered = [
  {
    icon: Wrench,
    title: "Complete Overhaul",
    description: "Full disassembly, cleaning, and reassembly with genuine parts"
  },
  {
    icon: Clock,
    title: "Movement Service",
    description: "Precision timing adjustment and movement regulation"
  },
  {
    icon: Shield,
    title: "Water Resistance Testing",
    description: "Complete waterproofing check and gasket replacement"
  },
  {
    icon: Sparkles,
    title: "Polishing & Restoration",
    description: "Case and bracelet polishing to restore original shine"
  },
  {
    icon: Award,
    title: "Battery Replacement",
    description: "Genuine battery replacement with proper sealing"
  },
  {
    icon: Star,
    title: "Strap/Bracelet Repair",
    description: "Link adjustment, clasp repair, and strap replacement"
  }
];

const brandsServiced = [
  { name: "Sonata", specialty: "Certified Service", logo: "/brands/sonataLogo.svg" },
  { name: "Alba", specialty: "Authorized Service", logo: "/brands/alba-logo.png" },
  { name: "Tissot", specialty: "Factory Trained", logo: "/brands/tissot-logo.png" },
  { name: "Seiko", specialty: "Expert Service", logo: "/brands/seiko-logo.png" },
  { name: "Citizen", specialty: "Eco-Drive Specialist", logo: "/brands/Citizen_logo.png" },
  { name: "Longines", specialty: "Heritage Expert", logo: "/brands/Longines-logo.png" },
  { name: "Rado", specialty: "Ceramic Specialist", logo: "/brands/rado-logo.png" },
  { name: "Casio", specialty: "G-Shock Expert", logo: "/brands/casio-logo.png" },
  { name: "Titan", specialty: "Authorized Service", logo: "/brands/Titan_Company_Logo.png" },
  { name: "Fastrack", specialty: "Quick Service", logo: "/brands/FASTRACK-Logo-Black.png" },
  { name: "Timex", specialty: "Expert Repair", logo: "/brands/Timex-Logo.png" },
  { name: "Swatch", specialty: "Swiss Service", logo: "/brands/swatch-logo.png" }
];

const repairProcess = [
  {
    step: "1",
    title: "Inspection",
    description: "Free diagnostic evaluation of your timepiece"
  },
  {
    step: "2",
    title: "Quotation",
    description: "Detailed estimate with transparent pricing"
  },
  {
    step: "3",
    title: "Repair",
    description: "Expert servicing by certified technicians"
  },
  {
    step: "4",
    title: "Quality Check",
    description: "Rigorous testing before returning to you"
  }
];

export default function WatchRepairPage() {
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
              <Wrench className="w-4 h-4 mr-2" />
              Expert Watch Repair Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Professional Watch
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Repair & Service
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trust your precious timepieces to our Swiss-trained technicians. We service all premium 
              brands with authentic parts and provide warranty-backed repairs since 1908.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Swiss-Trained Technicians</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Genuine Parts Only</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>6 Month Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Service Request Form & Address Section */}
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
              Request a Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your service request online or visit our showroom for immediate assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Request Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Service Request Form</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="brand" className="text-sm font-medium text-foreground">
                        Watch Brand *
                      </label>
                      <select 
                        id="brand"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        required
                      >
                        <option value="">Select Brand</option>
                        {brandsServiced.map((brand, index) => (
                          <option key={index} value={brand.name}>{brand.name}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="model" className="text-sm font-medium text-foreground">
                        Model/Reference Number
                      </label>
                      <Input id="model" placeholder="e.g., Submariner 116610" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="issue" className="text-sm font-medium text-foreground">
                        Describe the Issue *
                      </label>
                      <Textarea
                        id="issue"
                        placeholder="Please describe the problem with your watch..."
                        className="min-h-24"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service-type" className="text-sm font-medium text-foreground">
                        Service Type
                      </label>
                      <select 
                        id="service-type"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select Service Type</option>
                        <option value="complete-overhaul">Complete Overhaul</option>
                        <option value="movement-service">Movement Service</option>
                        <option value="battery-replacement">Battery Replacement</option>
                        <option value="water-resistance">Water Resistance Testing</option>
                        <option value="polishing">Polishing & Restoration</option>
                        <option value="strap-repair">Strap/Bracelet Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Submit Service Request
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Showroom Address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Service Center</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Address</h4>
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
                          033-22300295 / 40672089<br />
                          Watch Repair: 4066-1052
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          service@angloswiss.in
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Service Hours</h4>
                        <p className="text-sm text-muted-foreground">
                          Monday - Saturday: 10:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Button className="w-full" variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Swiss-trained technicians with decades of experience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Only genuine parts used for all repairs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">6-month warranty on all services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">State-of-the-art service facility since 1950</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Brands Serviced Section */}
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
              Brands We Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert service available for all premium watch brands in our showroom.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brandsServiced.map((brand, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border bg-white shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="relative w-full h-8 mb-4 flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={60}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Offered Section */}
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
              Our Repair Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive watch repair and maintenance services for all types of timepieces.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesOffered.map((service, index) => (
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

      {/* Repair Process Section */}
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
              Our Repair Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and professional service from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {repairProcess.map((process, index) => (
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
                {index < repairProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        
        <LayoutGridDemo />
    
    </div>
  );
}
