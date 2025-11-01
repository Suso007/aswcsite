"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Watch, Activity, Smartphone, ShoppingCart, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const watchCategories = [
  {
    id: 1,
    title: "Premium Watches",
    description: "Luxury timepieces crafted with precision and elegance. Experience the finest in horological excellence.",
    image: "/categories/premium-watch.JPG",
    icon: Watch,
    badge: "Luxury",
    href: "/watch/premium",
    features: ["Swiss Movement", "Sapphire Crystal", "Premium Materials", "Limited Editions"],
    priceRange: "$$$$"
  },
  {
    id: 2,
    title: "Sport Watches",
    description: "Built for performance and durability. Perfect for athletes and active lifestyles.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=3540&auto=format&fit=crop",
    icon: Activity,
    badge: "Performance",
    href: "/watch/sport",
    features: ["Water Resistant", "Shock Proof", "GPS Tracking", "Heart Rate Monitor"],
    priceRange: "$$"
  },
  {
    id: 3,
    title: "Smart Watches",
    description: "Where technology meets tradition. Stay connected with style and sophistication.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=3540&auto=format&fit=crop",
    icon: Smartphone,
    badge: "Technology",
    href: "/watch/smart",
    features: ["Fitness Tracking", "Notifications", "Long Battery", "Apps & Features"],
    priceRange: "$$$"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export default function WatchPage() {
  // Your Shopify store URL from environment variable
  const shopifyStoreUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || "https://your-store.myshopify.com";

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-size-[20px_20px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            Watch Collections
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Discover Your Perfect Timepiece
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our curated collections of premium, sport, and smart watches. 
            Each piece tells a unique story of craftsmanship and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Visit Our Store
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Watch Categories Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {watchCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground">
                        {category.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-semibold text-lg">
                        {category.priceRange}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-4">
                      <Button asChild className="w-full">
                        <Link href={category.href}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Catalog
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full">
                        <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Shop Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Timepieces?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer more than just watches - we provide an experience of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity Guaranteed",
                description: "Every watch is 100% authentic with official warranty and certification",
                icon: "✓"
              },
              {
                title: "Expert Consultation",
                description: "Our specialists help you find the perfect timepiece for your needs",
                icon: "★"
              },
              {
                title: "Lifetime Support",
                description: "Comprehensive after-sales service and maintenance support",
                icon: "♦"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Find Your Perfect Watch?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Browse our complete collection on Shopify or visit our showroom for a personalized experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={shopifyStoreUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Browse Full Collection
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
