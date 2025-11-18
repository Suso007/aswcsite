"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Home, Users, Calendar, DollarSign, Bell, FileText, Shield, Database, Code2, Layers, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HostelManagementPage() {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student profiles with accommodation history and documents"
    },
    {
      icon: Home,
      title: "Room Allocation",
      description: "Smart room assignment with availability tracking and preferences"
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Automated billing, fee collection, and payment tracking"
    },
    {
      icon: Calendar,
      title: "Check-in/Check-out",
      description: "Digital check-in process with automated notifications"
    },
    {
      icon: Bell,
      title: "Complaint System",
      description: "Track and resolve maintenance requests and student complaints"
    },
    {
      icon: FileText,
      title: "Reports & Analytics",
      description: "Comprehensive reports on occupancy, revenue, and operations"
    }
  ];

  const problems = [
    {
      problem: "Manual room allocation leading to conflicts",
      solution: "Intelligent room assignment system with real-time availability"
    },
    {
      problem: "Difficult to track fee payments and dues",
      solution: "Automated billing with payment reminders and online payment gateway"
    },
    {
      problem: "Poor communication between staff and students",
      solution: "In-app messaging, announcements, and notification system"
    },
    {
      problem: "Time-consuming visitor management",
      solution: "Digital visitor logs with automated approval workflows"
    },
    {
      problem: "Lack of maintenance tracking",
      solution: "Complaint ticketing system with priority management and resolution tracking"
    }
  ];

  const techStack = [
    { name: "React & Next.js", icon: Code2, category: "Frontend" },
    { name: "Node.js & Express", icon: Layers, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "React Native", icon: Smartphone, category: "Mobile" },
    { name: "AWS Cloud", icon: Shield, category: "Cloud" },
    { name: "Payment Gateway", icon: DollarSign, category: "Integration" }
  ];

  const benefits = [
    "Reduce administrative workload by 70%",
    "Improve occupancy rates and revenue",
    "Enhance student satisfaction",
    "Real-time visibility of all operations",
    "Paperless documentation and records",
    "Streamlined fee collection process"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-6 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-size-[20px_20px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6"
        >
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hostel Management System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline hostel operations with our comprehensive management solution. 
              From room allocation to fee collection, manage everything in one place.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Showcase Image */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/services/hostel-management.jpg"
              alt="Hostel Management System"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage your hostel efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-muted-foreground text-lg">
              Addressing common challenges in hostel management
            </p>
          </motion.div>

          <div className="space-y-6">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-2">Problem</h4>
                      <p className="text-muted-foreground">{item.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Our Solution</h4>
                      <p className="text-foreground">{item.solution}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-muted-foreground text-lg">
              Built with modern, scalable, and reliable technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                  <tech.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Solution?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/services/hostel-benefits.jpg"
                alt="Benefits"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hostel Management?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a demo and see how our solution can simplify your hostel operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
