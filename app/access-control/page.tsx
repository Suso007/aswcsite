"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Fingerprint, 
  Lock, 
  Eye,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Building2,
  Zap,
  Star,
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
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const features = [
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Advanced fingerprint and facial recognition technology for secure access control"
  },
  {
    icon: Lock,
    title: "Multi-Level Security",
    description: "Customizable access levels and permissions for different zones and personnel"
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Live monitoring and instant alerts for all access points across your facility"
  },
  {
    icon: Clock,
    title: "Time & Attendance Integration",
    description: "Seamless integration with attendance tracking and workforce management systems"
  },
  {
    icon: Users,
    title: "Visitor Management",
    description: "Professional visitor tracking with pre-registration and badge printing capabilities"
  },
  {
    icon: Building2,
    title: "Multi-Site Management",
    description: "Centralized control and monitoring for multiple locations from a single dashboard"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Prevent unauthorized access with advanced authentication",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Streamline entry processes and reduce manual security checks",
    color: "text-yellow-500"
  },
  {
    icon: Star,
    title: "Complete Audit Trail",
    description: "Detailed logs of all access events for compliance",
    color: "text-purple-500"
  },
  {
    icon: Award,
    title: "Scalable Solution",
    description: "Easily expand your system as your organization grows",
    color: "text-green-500"
  }
];

const stats = [
  { number: "500+", label: "Installations" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
  { number: "100K+", label: "Users Secured" }
];

export default function AccessControlPage() {
  const handleShopifyRedirect = () => {
    const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'https://your-store.myshopify.com';
    window.open(`${shopifyUrl}/collections/access-control`, '_blank', 'noopener,noreferrer');
  };

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
              <Shield className="w-4 h-4 mr-2" />
              Advanced Security Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Access Control
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Secure your premises with cutting-edge biometric access control systems. 
              From fingerprint scanners to facial recognition, we provide complete security solutions 
              tailored to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Proven Reliability</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" onClick={handleShopifyRedirect} className="px-8">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="/contact">
                  Request Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
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

      {/* Features Section */}
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
              Powerful Features for Complete Security
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our access control systems come packed with advanced features designed to 
              keep your premises secure and your operations efficient.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Access Control Systems?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that professional-grade security solutions can make 
              for your organization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className={`w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center`}>
                          <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            className="bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Fingerprint className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Secure Your Premises?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our security experts to discuss your requirements and 
                find the perfect access control solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" onClick={handleShopifyRedirect} className="px-8">
                  Browse Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
