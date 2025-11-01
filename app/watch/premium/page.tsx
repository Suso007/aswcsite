"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Star, Shield, Award, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PremiumWatchesPage() {
  // Your Shopify store URL from environment variable
  const shopifyStoreUrl = `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://your-store.myshopify.com"}`;

  const features = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Crafted from the finest materials including gold, platinum, and diamonds"
    },
    {
      icon: Award,
      title: "Swiss Movement",
      description: "Precision Swiss automatic and mechanical movements"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Comprehensive warranty and authentication certificate"
    },
    {
      icon: Star,
      title: "Limited Editions",
      description: "Exclusive limited edition pieces from renowned brands"
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
              Premium Collection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Watches
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our exquisite collection of luxury timepieces. Each watch is a masterpiece 
              of horological artistry, combining tradition, innovation, and unparalleled craftsmanship.
            </p>
            <Button size="lg" asChild>
              <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Premium Collection
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
              What Makes Our Premium Watches Exceptional
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
                src="/categories/premium-watch.jpg"
                alt="Premium Watch"
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
                Timeless Elegance
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our premium watch collection features the world's most prestigious brands, 
                  each piece representing the pinnacle of watchmaking excellence.
                </p>
                <p className="text-lg">
                  From classic dress watches to sophisticated complications, every timepiece 
                  in our collection has been carefully selected for its exceptional quality, 
                  heritage, and timeless design.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Certified authentic by authorized dealers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Complete with original documentation and warranty
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Expert consultation and personalized service
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Complimentary maintenance and servicing options
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
              Ready to Own a Masterpiece?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our full premium collection on Shopify or schedule a private viewing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View All Premium Watches
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Schedule Private Viewing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
