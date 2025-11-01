"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Award, 
  Clock, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Sparkles,
  Crown,
  Shield,
  Target,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    y: 0
  }
};

const brandData = [
  {
    name: "Longines",
    logo: "/brands/Longines-logo.png",
    category: "Luxury Swiss",
    established: "1832",
    country: "Switzerland",
    specialty: "Elegant timepieces with heritage",
    description: "Longines embodies tradition, elegance and performance. With a rich heritage dating back to 1832, Longines has always been synonymous with elegance and precision.",
    features: ["Swiss Made", "Heritage Collection", "Sports Timing", "Elegance"],
    priceRange: "₹50,000 - ₹5,00,000",
    icon: Crown,
    gradient: "from-yellow-600 to-amber-700"
  },
  {
    name: "Tissot",
    logo: "/brands/tissot-logo.png",
    category: "Swiss Heritage",
    established: "1853",
    country: "Switzerland",
    specialty: "Innovation and Swiss precision",
    description: "Tissot is a Swiss luxury watch manufacturer that has been crafting precision timepieces since 1853, known for their innovation and timeless designs.",
    features: ["Swiss Movement", "T-Touch Technology", "Chronographs", "Sports Watches"],
    priceRange: "₹15,000 - ₹2,00,000",
    icon: Sparkles,
    gradient: "from-red-600 to-red-700"
  },
  {
    name: "Rado",
    logo: "/brands/rado-logo.png",
    category: "Design Innovation",
    established: "1917",
    country: "Switzerland",
    specialty: "Master of materials and design",
    description: "Rado is known as the Master of Materials, creating watches with innovative materials like high-tech ceramic, sapphire crystal, and diamonds.",
    features: ["High-Tech Ceramic", "Scratch Resistant", "Innovative Design", "Master of Materials"],
    priceRange: "₹40,000 - ₹8,00,000",
    icon: Shield,
    gradient: "from-gray-800 to-black"
  },
  {
    name: "Citizen",
    logo: "/brands/Citizen_logo.png",
    category: "Eco-Drive Technology",
    established: "1918",
    country: "Japan",
    specialty: "Solar-powered timepieces",
    description: "Citizen is renowned for its Eco-Drive technology, creating watches powered by light that never need a battery replacement.",
    features: ["Eco-Drive Solar", "Atomic Timekeeping", "Perpetual Calendar", "Water Resistant"],
    priceRange: "₹8,000 - ₹1,50,000",
    icon: Zap,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    name: "Seiko",
    logo: "/brands/seiko-logo.png",
    category: "Japanese Precision",
    established: "1881",
    country: "Japan",
    specialty: "Kinetic and Spring Drive technology",
    description: "Seiko revolutionized timekeeping with innovations like quartz movement, kinetic technology, and the unique Spring Drive mechanism.",
    features: ["Kinetic Technology", "Spring Drive", "Automatic Movement", "Prospex Sports"],
    priceRange: "₹5,000 - ₹3,00,000",
    icon: Target,
    gradient: "from-navy-600 to-navy-800"
  },
  {
    name: "Casio",
    logo: "/brands/casio-logo.png",
    category: "Digital Innovation",
    established: "1946",
    country: "Japan",
    specialty: "G-Shock and digital technology",
    description: "Casio is famous for creating the virtually indestructible G-Shock watches and innovative digital timepieces for every lifestyle.",
    features: ["G-Shock Tough", "Multi-Function", "Solar Power", "Radio Controlled"],
    priceRange: "₹2,000 - ₹80,000",
    icon: Shield,
    gradient: "from-orange-600 to-red-600"
  },
  {
    name: "Swatch",
    logo: "/brands/swatch-logo.png",
    category: "Swiss Fashion",
    established: "1983",
    country: "Switzerland",
    specialty: "Colorful and artistic timepieces",
    description: "Swatch revolutionized the watch industry with affordable Swiss-made watches featuring bold designs and artistic collaborations.",
    features: ["Swiss Made", "Artistic Designs", "Limited Editions", "Fashion Forward"],
    priceRange: "₹5,000 - ₹25,000",
    icon: Sparkles,
    gradient: "from-pink-500 to-purple-600"
  },
  {
    name: "Titan",
    logo: "/brands/Titan_Company_Logo.png",
    category: "Indian Heritage",
    established: "1984",
    country: "India",
    specialty: "Contemporary Indian timepieces",
    description: "Titan is India's leading watch brand, known for contemporary designs, precision engineering, and understanding Indian sensibilities.",
    features: ["Indian Design", "Contemporary Style", "Edge Collection", "Raga Collection"],
    priceRange: "₹3,000 - ₹50,000",
    icon: Star,
    gradient: "from-amber-600 to-yellow-600"
  },
  {
    name: "Fastrack",
    logo: "/brands/FASTRACK-Logo-Black.png",
    category: "Youth Fashion",
    established: "1998",
    country: "India",
    specialty: "Trendy watches for youth",
    description: "Fastrack caters to the young and trendy, offering fashion-forward watches that complement the dynamic lifestyle of today's youth.",
    features: ["Youth Oriented", "Trendy Designs", "Affordable Fashion", "Bold Colors"],
    priceRange: "₹1,500 - ₹15,000",
    icon: Zap,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    name: "Timex",
    logo: "/brands/Timex-Logo.png",
    category: "American Classic",
    established: "1854",
    country: "USA",
    specialty: "Durable and affordable timepieces",
    description: "Timex has been creating reliable, affordable watches for over 165 years, known for their durability and the famous 'Takes a licking and keeps on ticking' slogan.",
    features: ["Durable Build", "Indiglo Backlight", "Expedition Series", "Classic Designs"],
    priceRange: "₹3,000 - ₹25,000",
    icon: Shield,
    gradient: "from-blue-700 to-blue-900"
  },
  {
    name: "Victorinox",
    logo: "/brands/Victorinox_Logo.png",
    category: "Swiss Army",
    established: "1884",
    country: "Switzerland",
    specialty: "Robust Swiss Army timepieces",
    description: "Victorinox Swiss Army creates robust, functional timepieces built to the same exacting standards as their famous Swiss Army knives.",
    features: ["Swiss Army Heritage", "Robust Construction", "Field Ready", "Military Precision"],
    priceRange: "₹20,000 - ₹1,50,000",
    icon: Shield,
    gradient: "from-red-700 to-red-900"
  },
  {
    name: "Cross",
    logo: "/brands/cross-logo.jpg",
    category: "Luxury Writing",
    established: "1846",
    country: "USA",
    specialty: "Premium writing instruments and timepieces",
    description: "Cross extends their luxury writing instrument expertise to create sophisticated timepieces that embody elegance and precision.",
    features: ["Luxury Design", "Premium Materials", "Executive Style", "Refined Elegance"],
    priceRange: "₹15,000 - ₹75,000",
    icon: Crown,
    gradient: "from-gray-700 to-gray-900"
  }
];

const categories = [
  { name: "All Brands", count: brandData.length, icon: Globe },
  { name: "Swiss Heritage", count: 5, icon: Crown },
  { name: "Japanese Precision", count: 3, icon: Target },
  { name: "Fashion & Youth", count: 2, icon: Sparkles },
  { name: "Luxury Collection", count: 4, icon: Award }
];

const stats = [
  { number: "18+", label: "Premium Brands" },
  { number: "117+", label: "Years Combined Heritage" },
  { number: "1000+", label: "Watch Models" },
  { number: "50K+", label: "Happy Customers" }
];

export default function BrandsPage() {
  const handleExploreClick = (brandName: string) => {
    const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_LINK || "https://angloswisswatchco.myshopify.com/";
    // You can customize the URL to include brand search or specific collection
    const searchUrl = `${shopifyUrl}search?q=${encodeURIComponent(brandName)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              Premium Timepiece Collection
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Discover Our
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Brand Partners
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of world-renowned timepiece brands, each representing 
              decades of craftsmanship, innovation, and horological excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Authorized Dealer</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Genuine Products</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Warranty Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Categories Filter */}
      <section className="hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Filter our premium timepiece collection by heritage, innovation, and style.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border bg-card shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} brands</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Premium Brand Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each brand in our collection has been carefully selected for their commitment to quality, 
              innovation, and horological excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brandData.map((brand, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  {/* Brand Header with Gradient */}
                  <div className={`h-32 bg-linear-to-br ${brand.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {brand.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <brand.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    {/* Brand Logo and Basic Info */}
                    <div className="flex items-start space-x-4">
                      <div className="relative w-16 h-16 bg-white rounded-lg p-2 shadow-md shrink-0">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{brand.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>Est. {brand.established}</span>
                          <span>•</span>
                          <span>{brand.country}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialty */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary mb-1">{brand.specialty}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {brand.description}
                    </p>

                    <Separator />

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {brand.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Price Range</p>
                        <p className="text-sm font-semibold text-foreground">{brand.priceRange}</p>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" onClick={() => handleExploreClick(brand.name)}>
                        Explore
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-primary/5 rounded-2xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Find Your Perfect Timepiece
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Visit our showroom to experience these exceptional timepieces in person. Our experts 
                are ready to help you find the perfect watch that matches your style and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Visit Our Showroom
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Schedule Consultation
                </Button>
              </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}