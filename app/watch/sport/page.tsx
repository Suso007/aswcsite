"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Droplet, Shield, Zap, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SportWatchesPage() {
  // Your Shopify store URL from environment variable
  const shopifyStoreUrl = `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://your-store.myshopify.com"}`;

  const features = [
    {
      icon: Droplet,
      title: "Water Resistant",
      description: "Up to 300m water resistance for diving and water sports"
    },
    {
      icon: Shield,
      title: "Shock Proof",
      description: "Military-grade protection against impact and vibration"
    },
    {
      icon: Activity,
      title: "Fitness Tracking",
      description: "Advanced sensors for heart rate, GPS, and activity monitoring"
    },
    {
      icon: Zap,
      title: "Long Battery",
      description: "Extended battery life for multi-day adventures"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-6 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-size-[20px_20px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6"
        >
          <Link href="/watch" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Watches
          </Link>
          
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              Sport Collection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sport Watches
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Built for performance and engineered for endurance. Our sport watches combine 
              rugged durability with cutting-edge technology for athletes and adventurers.
            </p>
            <Button size="lg" asChild>
              <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Sport Collection
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Performance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=3540&auto=format&fit=crop"
                alt="Sport Watch"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Engineered for Adventure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our sport watch collection features timepieces designed to withstand the most 
                  demanding conditions, from deep-sea diving to mountain climbing.
                </p>
                <p className="text-lg">
                  With advanced features like GPS navigation, altimeter, barometer, and 
                  comprehensive fitness tracking, these watches are the perfect companion 
                  for any adventure.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    ISO-certified water resistance up to 300m
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Scratch-resistant sapphire crystal
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Multi-sport tracking and training modes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Solar charging and power-saving features
                  </li>
                </ul>
              </div>
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
            className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gear Up for Your Next Adventure
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our full sport collection on Shopify and find your perfect training partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View All Sport Watches
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get Expert Advice
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
