import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Shield, Award } from "lucide-react";
import { HeroComponent} from "@/components/hero-component";
import { BrandsShowcase } from "@/components/brands-showcase";
import { NavigationSections } from "@/components/navigation-sections";
import { LayoutGridDemo } from "@/components/home-gallery";
import {FeaturesSectionDemo} from "@/components/features-section-demo-3";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      {/* Brands Showcase */}
      <BrandsShowcase />
      {/* Navigation Sections */}
      <NavigationSections />

      {/* Features Section */}
      <FeaturesSectionDemo />

      {/* CTA Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Ready to Find Your Perfect Timepiece?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Visit our showroom or schedule a consultation with our experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Visit Showroom</Button>
            <Button size="lg" variant="outline">Schedule Consultation</Button>
          </div>
        </div>
      </section>
      
      {/* Products Preview */}
      <LayoutGridDemo />

    </div>
  );
}
