"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Clock, Crown, History, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ClassicTimepiecesPage() {
  // Your Shopify store URL from environment variable
  const shopifyStoreUrl = `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://your-store.myshopify.com"}/collections/classic-timepieces`;

  const features = [
    {
      icon: Crown,
      title: "Timeless Design",
      description: "Classic aesthetics that transcend trends and generations"
    },
    {
      icon: History,
      title: "Heritage Craftsmanship",
      description: "Traditional watchmaking techniques passed down through centuries"
    },
    {
      icon: Star,
      title: "Heirloom Quality",
      description: "Built to last and be passed down through generations"
    },
    {
      icon: Clock,
      title: "Precision Movement",
      description: "Accurate mechanical and automatic movements"
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
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              Classic Collection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Classic Timepieces
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our collection of timeless classics. Each piece embodies traditional 
              craftsmanship, elegant design, and enduring quality that never goes out of style.
            </p>
            <Button size="lg" asChild>
              <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Classic Collection
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
              Timeless Elegance
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
                src="/categories/time-pieces.JPG"
                alt="Classic Timepiece"
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
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our classic timepiece collection features carefully curated pieces that 
                  represent the golden age of watchmaking, where every detail matters and 
                  quality is paramount.
                </p>
                <p className="text-lg">
                  From elegant dress watches to sophisticated complications, each timepiece 
                  in our collection has been selected for its timeless design, exceptional 
                  craftsmanship, and enduring value.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Traditional mechanical and automatic movements
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Elegant case designs in precious metals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Hand-finished details and complications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Complete documentation and provenance
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
              Own a Piece of History
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our full classic collection on Shopify or schedule a consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View All Classic Timepieces
                </a>
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
