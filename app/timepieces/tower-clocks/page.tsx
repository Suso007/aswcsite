"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, MapPin, Calendar, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const towerClockProjects = [
  {
    id: 1,
    title: "Historic City Hall Tower",
    location: "Downtown Metro City",
    year: "2023",
    description: "A magnificent restoration of a century-old clock tower, featuring four illuminated clock faces visible from miles away. This project involved complete mechanical overhaul while preserving the original aesthetic.",
    image: "/categories/tower-cloc.JPG",
    features: ["4 Illuminated Faces", "Automated Bell System", "Weather Resistant", "GPS Synchronized"]
  },
  {
    id: 2,
    title: "University Campus Clock Tower",
    location: "State University",
    year: "2022",
    description: "A modern tower clock installation combining traditional craftsmanship with cutting-edge technology. The system features automatic time synchronization and low-maintenance LED illumination.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3540&auto=format&fit=crop",
    features: ["Modern Design", "LED Illumination", "Remote Monitoring", "Energy Efficient"]
  },
  {
    id: 3,
    title: "Corporate Plaza Monument Clock",
    location: "Business District",
    year: "2024",
    description: "An architectural landmark featuring a contemporary tower clock design. This installation serves as both a functional timepiece and a stunning visual centerpiece for the plaza.",
    image: "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?q=80&w=3540&auto=format&fit=crop",
    features: ["Contemporary Design", "Digital Integration", "Landmark Feature", "Premium Finish"]
  }
];

const galleryImages = [
  {
    src: "/categories/tower-cloc.JPG",
    alt: "Tower Clock 1"
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3540&auto=format&fit=crop",
    alt: "Tower Clock Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?q=80&w=3540&auto=format&fit=crop",
    alt: "Tower Clock Detail"
  },
  {
    src: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=3540&auto=format&fit=crop",
    alt: "Clock Mechanism"
  },
  {
    src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=3540&auto=format&fit=crop",
    alt: "Tower Clock Face"
  },
  {
    src: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=3540&auto=format&fit=crop",
    alt: "Historic Tower"
  }
];

export default function TowerClocksPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-6 md:py-10 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
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
              Architectural Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tower Clocks
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Monumental timepieces that define skylines and serve as landmarks for generations. 
              We specialize in designing, manufacturing, and installing tower clocks that combine 
              traditional craftsmanship with modern technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Architecture & Technical Specifications - New Design */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-4" variant="outline">
              Technical Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Architecture of Anglo-Swiss Tower Clock
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Precision engineering combining mechanical excellence with modern electronic control
            </p>
          </motion.div>

          {/* Main Architecture Description - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-primary/10 to-background border-2 border-primary/20 p-6 md:p-10">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-3xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mechanical & Electronic Integration</h3>
                    <p className="text-muted-foreground">Advanced hybrid system for unmatched reliability</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    Anglo Swiss Analog Tower Clocks represent the perfect combination of <strong className="text-foreground">Mechanical & Electronic Time Systems</strong>. 
                    Behind each dial, the mechanical portion features a precision gear box with solid-state mechanical moving parts driven by stepper motors 
                    that control the clock hands with exceptional accuracy.
                  </p>
                  <p>
                    Our gears are manufactured from <strong className="text-foreground">hardened full steel and bronze</strong>, mounted on main plates and 
                    bottom plates for maximum durability. The center wheel torque can carry weights ranging from 10 kg to 100 kg, depending on the clock size.
                  </p>
                  <p>
                    The entire mechanical system is protected within a steel enclosure, safeguarding against dust and environmental factors. Each movement 
                    connects to a <strong className="text-foreground">microprocessor-based timer controller panel</strong> that receives twenty-second impulse 
                    signals from a GPS-enabled timer, ensuring all clock faces remain perfectly synchronized with local standard time.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Technical Specs - Modern Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Operating Temperature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-lg font-bold">Operating Temperature</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">0°C - 60°C</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reliable operation in all weather conditions, from freezing winters to scorching summers
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Power Supply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold">Power Supply</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">220V ±10V</span>
                    <span className="text-muted-foreground">50/60 HZ</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    12V, 7AMP SMF Battery backup ensures <strong className="text-foreground">48-72 hours</strong> continuous operation during power failures
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-lg font-bold">Premium Materials</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span><strong className="text-foreground">High-density acrylic</strong> translucent dial sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Roman or numerical figures with vinyl lamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Heavy FRP or die-cast metal ring support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▪</span>
                    <span>Back-lit illumination with auto timer for night visibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Durability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-bold">Built to Last</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Fully weather-proof construction</strong> designed to withstand:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-primary">✓</span>
                      <span>Extreme heat</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-primary">✓</span>
                      <span>Freezing cold</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-primary">✓</span>
                      <span>Heavy rain</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-primary">✓</span>
                      <span>UV exposure</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Options - Feature Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary via-primary/90 to-primary/80 p-6 md:p-8">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
                  <span className="text-4xl">🔔</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Optional Sound System
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Enhance your tower clock with our premium <strong>striking sound system</strong> featuring musical chimes 
                    and programmable hourly striking. Perfect for creating an authentic bell tower experience with customizable 
                    timing schedules.
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0 text-sm px-4 py-2">
                  Optional Add-on
                </Badge>
              </div>
              
              {/* Decorative wave */}
              <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M45.3,-76.6C58.9,-69.2,70.5,-57.6,77.7,-43.6C84.9,-29.6,87.6,-13.3,86.8,2.7C85.9,18.7,81.5,34.4,73.1,47.8C64.7,61.2,52.3,72.3,37.9,78.8C23.5,85.3,7.1,87.2,-8.6,84.8C-24.3,82.4,-39.3,75.6,-52.7,66.3C-66.1,57,-78,45.2,-84.3,30.8C-90.6,16.4,-91.4,-0.6,-87.1,-16.3C-82.8,-32,-73.5,-46.5,-61.3,-54.5C-49.1,-62.5,-34,-64,-19.8,-68.8C-5.6,-73.6,7.8,-81.7,21.7,-84.5C35.6,-87.3,31.7,-84,45.3,-76.6Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Tower Clock Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore some of our most prestigious tower clock installations
            </p>
          </motion.div>

          <div className="space-y-12">
            {towerClockProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative h-[400px] rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Badge className="mb-4">{project.year}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                        Project Features
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < towerClockProjects.length - 1 && (
                  <div className="mt-2 md:mt-12 lg:mt-20 border-t border-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-6 md:py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Design",
                description: "Tailored solutions to match your architectural vision",
                icon: "🎨"
              },
              {
                title: "Manufacturing",
                description: "In-house production with quality control",
                icon: "⚙️"
              },
              {
                title: "Installation",
                description: "Professional installation by experienced teams",
                icon: "🏗️"
              },
              {
                title: "Maintenance",
                description: "Ongoing support and maintenance services",
                icon: "🔧"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{capability.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of our tower clock installations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
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
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Discuss Your Tower Clock Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team of experts is ready to help you create a landmark timepiece for your building. 
              Contact us for a detailed consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us for Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/installation">
                  Learn About Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
