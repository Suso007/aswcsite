"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Watch, Activity, Smartphone, Clock, Building2, Users, Wrench, Star, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigationSections = [
  // Products
  {
    id: 1,
    title: "Premium Watches",
    description: "Premium timepieces from world-renowned brands",
    image: "/categories/premium-watch.jpg",
    icon: Watch,
    badge: "Premium",
    href: "/watch/premium"
  },
  {
    id: 2,
    title: "Sport Watches",
    description: "Durable and functional watches for active lifestyles",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Activity,
    badge: "Sports",
    href: "/watch/sport"
  },
  {
    id: 3,
    title: "Smart Watches",
    description: "Technology meets tradition in our smart watch",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Smartphone,
    badge: "Tech",
    href: "/watch/smart"
  },
  {
    id: 4,
    title: "Classic Timepieces",
    description: "Timeless designs that never go out of style",
    image: "/categories/time-pieces.jpg",
    icon: Clock,
    badge: "Classic",
    href: "/timepieces/classic"
  },
  {
    id: 5,
    title: "Tower Clocks",
    description: "Monumental timepieces for architectural excellence",
    image: "/categories/tower-cloc.jpg",
    icon: Building2,
    badge: "Architecture",
    href: "timepieces/tower-clocks"
  },
  {
    id: 6,
    title: "Time Attendance Solutions",
    description: "Advanced systems for workforce time management",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Users,
    badge: "Business",
    href: "/attendance-solutions"
  },
  // Services
    {
    id: 7,
    title: "Access Control Systems",
    description: "Secure and manage access to your timepieces",
    image: "/categories/access-control.jpeg",
    icon: Star,
    badge: "Custom",
    href: "/access-control"
  },
  {
    id: 8,
    title: "Watch Repair",
    description: "Expert repair services for all watch brands",
    image: "/categories/repair.png",
    icon: Wrench,
    badge: "Service",
    href: "/services/repair"
  },

  {
    id: 9,
    title: "Installation Services",
    description: "Installation for tower clocks and attendance systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Settings,
    badge: "Installation",
    href: "/services/installation"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export function NavigationSections() {
  return (
    <section className="py-8 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
            Explore Our World
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of services, collections
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navigationSections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="group cursor-pointer"
            >
            <Link href={section.href}>
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground border-0">
                      {section.badge}
                    </Badge>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </div>
    </section>
  );
}