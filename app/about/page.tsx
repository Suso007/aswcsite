"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, Globe, Heart, Shield, Star, Target, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { LayoutGridDemo } from "@/components/about-gallery";

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
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const stats = [
  { number: `${(new Date().getFullYear() - 1908).toString()}+`, label: "Years of Excellence", icon: Clock },
  { number: "50,000+", label: "Satisfied Customers", icon: Users },
  { number: "18+", label: "Premium Brands", icon: Award },
  { number: "5+", label: "Countries Served", icon: Globe },
];

const values = [
  {
    icon: Heart,
    title: "Heritage & Tradition",
    description: "Honoring the timeless art of Swiss watchmaking with every timepiece we curate."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every watch undergoes rigorous authentication and quality testing before reaching you."
  },
  {
    icon: Star,
    title: "Expert Craftsmanship",
    description: "Our certified watchmakers bring decades of experience to every repair and service."
  },
  {
    icon: Target,
    title: "Customer First",
    description: "Your satisfaction drives everything we do, from selection to after-sales service."
  }
];

const milestones = [
  {
    year: "1908",
    title: "Foundation",
    description: "Anglo Swiss Watch Co. was founded by a Swiss National from Langendorf named Mr. E.O. Gammeter(late).."
  },
  {
    year: "1925",
    title: "Royal Recognition",
    description: "By 1925 this farm became one of the biggest in india having its Head office in Calcutta.."
  },
  {
    year: "1925",
    title: "International Expansion",
    description: "Having Branchs in Singapore and Solethurn (Switzerland).."
  },
  {
    year: "1944",
    title: "Changed Hands",
    description: "In 1944 the firm Changed hands having become Retail firm from Wholesale having lost Singapore branch, purchased by Mr. S.M. Sayeed(late).."
  },
  {
    year: "2010",
    title: "Digital Evolution",
    description: "Launched our online platform, bringing luxury timepieces to customers worldwide."
  },
  {
    year: "2024",
    title: "New Chapter",
    description: "Celebrating 120 years of excellence with expanded collections and innovative services."
  }
];

const team = [
  {
    name: "Mr. Ahmed Sualeh",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Leading Anglo Swiss Watch Co. with 25 years of experience in luxury timepieces."
  },
  {
    name: "Ms. Farah Sualeh",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Certified Swiss watchmaker with expertise in restoration and precision timing."
  },
  {
    name: "Mr. Mofiqul Islam",
    role: "Sr. Executive - Sales, Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passionate about connecting customers with their perfect timepiece for over 15 years."
  },
  {
    name: "Mr. Dibyendu Bhattacharya",
    role: "Sr. Executive - Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ensuring exceptional service and building lasting relationships with our valued clients."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Excellence Since 1908
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Our Story of</span>
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Timeless Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over a century, Anglo Swiss Watch Co. has been the trusted guardian of time, 
              bringing you the world's finest timepieces with unwavering commitment to quality and service.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Pioneer in India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Swiss Heritage</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Time Recording Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <Card className="border bg-card shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Heritage Story Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Legacy Built on 
                <span className="block text-primary">Precision & Passion</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                anglo-swiss watch co. is the pioneer company to have introduced time recording concept in India. We manufacture both mechanical and electronic Time Recorders till date. Our time recorders were the earliest tools in time attendance systems management and access control systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clock card machine or punch clock or time recorder, is a mechanical (or electronic) time piece used to assist in tracking the hours an employee of a company has worked, which allows a time recorder to have an official record of the hours an employee worked to calculate and pay an employee.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Authorized dealer for 40+ premium brands</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Certified by Swiss Watch Federation</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Royal Navy's official timekeeper since 1920</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about/anglo1959.png"
                  alt="Historic watch workshop"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-background border shadow-lg rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">1959</div>
                <div className="text-sm text-muted-foreground">The company head office at Dalhousie Square (Kolkata) as it looked in the year 1959</div>
              </div>
            </motion.div>
          </div>

          {/* Pioneer in Time Recording Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/about/workshop.png"
                    alt="Historic workshop and service facility"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-xs font-medium">Service Excellence</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg">
                <div className="text-lg font-bold">Pioneer</div>
                <div className="text-xs">State of the Art Service Facility at our company head office Since 1950</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Pioneers of 
                <span className="block text-primary">Time Recording in India</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also have the best state-of-the-art service facility for service and repairs of all kinds and reputed brands of wrist watches, most of all the expensive Swiss and Japanese brands. Our time recorders were the earliest tools in time attendance management and access control systems.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                <blockquote className="text-muted-foreground italic mb-2">
                  "Time flies over us, but leaves its shadow behind"
                </blockquote>
                <cite className="text-sm font-medium text-foreground">— Nathaniel Hawthorne</cite>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">First time recording systems in India</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Mechanical & electronic time recorders</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Access control system pioneers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="hidden py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Service Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We also have the best state-of-the-art service facility for service and repairs of all kinds 
              and reputed brands of wrist watches, most of all the expensive Swiss and Japanese brands.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border bg-card shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1594736797933-d0c4a3a4cf6d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Swiss watch servicing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Swiss Watch Expertise</h3>
                  <p className="text-muted-foreground mb-4">
                    Competent in servicing expensive Swiss brands with hand-picked qualified engineers 
                    who have been trained by Swiss factory technicians.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Factory-trained technicians</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Authentic Swiss parts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border bg-card shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1610122625543-2671ba8ecf66?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Japanese watch servicing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Japanese Precision</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized service for renowned Japanese watch brands, maintaining the highest 
                    standards of precision and reliability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Japanese brand expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Precision timing adjustment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border bg-card shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Time attendance systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Time Recording Systems</h3>
                  <p className="text-muted-foreground mb-4">
                    Our time recorders were the earliest tools in time attendance management 
                    and access control systems across India.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Mechanical & electronic systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Access control integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Anglo Swiss Watch Co. into the trusted name it is today.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:px-8">
                    <Card className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md border bg-card shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from selecting timepieces to serving our customers.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals who bring decades of experience to serve you better.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border bg-card shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    <LayoutGridDemo/>

      {/* Call to Action */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center bg-primary/5 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience Our Legacy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit our showroom and discover why Anglo Swiss Watch Co. has been the trusted choice 
              for timepiece enthusiasts for over a century.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Visit Our Showroom
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}