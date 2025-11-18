"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, UtensilsCrossed, ShoppingCart, BarChart3, CreditCard, Users, Package, Shield, Database, Code2, Layers, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CanteenManagementPage() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Menu Management",
      description: "Digital menu with pricing, ingredients, and nutritional information"
    },
    {
      icon: ShoppingCart,
      title: "Order Processing",
      description: "Quick order placement with real-time kitchen updates"
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Automated stock management with low-stock alerts"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Multiple payment methods including digital wallets and meal cards"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Track customer preferences, meal plans, and dietary restrictions"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Sales insights, popular items, and revenue tracking"
    }
  ];

  const problems = [
    {
      problem: "Long queues during peak hours",
      solution: "Pre-ordering system and express pickup counters reduce wait times"
    },
    {
      problem: "Food wastage due to poor demand forecasting",
      solution: "AI-powered analytics predict demand patterns and optimize inventory"
    },
    {
      problem: "Manual billing errors and cash handling",
      solution: "Automated billing with digital payments eliminates errors"
    },
    {
      problem: "Difficulty tracking inventory and expiry dates",
      solution: "Real-time inventory tracking with automated expiry alerts"
    },
    {
      problem: "No visibility into sales and performance",
      solution: "Comprehensive dashboards with real-time sales and performance metrics"
    }
  ];

  const techStack = [
    { name: "React & Next.js", icon: Code2, category: "Frontend" },
    { name: "Node.js & Express", icon: Layers, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "React Native", icon: Smartphone, category: "Mobile" },
    { name: "AWS Cloud", icon: Shield, category: "Cloud" },
    { name: "Payment APIs", icon: CreditCard, category: "Integration" }
  ];

  const benefits = [
    "Reduce order processing time by 60%",
    "Minimize food wastage by 40%",
    "Increase customer satisfaction scores",
    "Real-time visibility of operations",
    "Streamlined payment collection",
    "Data-driven menu optimization"
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
              Canteen Management System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Modernize your canteen operations with our intelligent management solution. 
              From order processing to inventory tracking, manage everything seamlessly.
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
              src="/services/canteen-management.jpg"
              alt="Canteen Management System"
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
              Comprehensive features for modern canteen operations
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
              Addressing common challenges in canteen management
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
                src="/services/canteen-benefits.jpg"
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
              Ready to Modernize Your Canteen Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a demo and see how our solution can transform your canteen management
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
