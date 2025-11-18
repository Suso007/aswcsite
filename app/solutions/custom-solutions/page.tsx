"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Code2, Palette, Rocket, Users, Zap, Target, Shield, Database, Layers, Smartphone, Globe, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CustomSolutionsPage() {
  const features = [
    {
      icon: Target,
      title: "Requirement Analysis",
      description: "In-depth analysis of your business needs and challenges"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Tailored UI/UX design that matches your brand identity"
    },
    {
      icon: Code2,
      title: "Agile Development",
      description: "Iterative development with regular feedback and updates"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security built into every solution"
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Solutions that grow with your business needs"
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Dedicated support and maintenance after deployment"
    }
  ];

  const solutions = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive ERP systems tailored to your business processes",
      icon: Server
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Custom CRM solutions to manage customer interactions and sales",
      icon: Users
    },
    {
      title: "E-commerce Platforms",
      description: "Scalable online stores with payment integration and inventory management",
      icon: Globe
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      icon: Smartphone
    },
    {
      title: "Web Applications",
      description: "Responsive web applications with modern frameworks",
      icon: Code2
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations",
      icon: Layers
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define scope, and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create wireframes, mockups, and interactive prototypes for your approval"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular sprints, demos, and feedback cycles"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing including functional, performance, and security testing"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth deployment to production with minimal downtime"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, bug fixes, and feature enhancements"
    }
  ];

  const techStack = [
    { name: "React & Next.js", icon: Code2, category: "Frontend" },
    { name: "Node.js & Python", icon: Layers, category: "Backend" },
    { name: "SQL & NoSQL", icon: Database, category: "Database" },
    { name: "React Native", icon: Smartphone, category: "Mobile" },
    { name: "AWS & Azure", icon: Shield, category: "Cloud" },
    { name: "Microservices", icon: Server, category: "Architecture" }
  ];

  const benefits = [
    "Solutions perfectly aligned with your business goals",
    "Full ownership of source code and intellectual property",
    "Flexible and adaptable to changing requirements",
    "Expert team with diverse technical expertise",
    "Transparent communication and project tracking",
    "Cost-effective compared to off-the-shelf solutions"
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
              Custom Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your unique business challenges into opportunities with tailor-made software solutions. 
              We build custom applications that perfectly fit your requirements and scale with your growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project
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
              src="/services/custom-solutions.jpg"
              alt="Custom Software Solutions"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions We Build
            </h2>
            <p className="text-muted-foreground text-lg">
              From web applications to mobile apps, we deliver complete custom solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg">
              What makes our custom development services stand out
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

      {/* Tech Stack */}
      <section className="py-6 md:py-10 bg-muted/30">
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
              We work with modern, proven technologies
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
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of Custom Software
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
                src="/services/custom-benefits.jpg"
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
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
