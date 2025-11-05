"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BrandsShowcase() {
  return (
    <>    
    <section className="py-8 bg-linear-to-b from-background to-muted/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-3xl font-semibold mb-2 text-foreground">
            Available Watch Brands
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            We proudly represent the world's most prestigious watchmakers
          </p>
        </div>
        
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={brands}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
    </>
  );
}

const brands = [
  {
    quote: "/brands/Citizen_logo.png",
    name: "Citizen",
    title: "A Citizen of the World"
  },
  {
    quote: "/brands/casio-logo.png",
    name: "Casio",
    title: "Innovation & Technology"
  },
  {
    quote: "/brands/seiko-logo.png",
    name: "Seiko",
    title: "Moving Ahead, Touching Hearts"
  },
  {
    quote: "/brands/tissot-logo.png",
    name: "Tissot",
    title: "Innovators by Tradition"
  },
  {
    quote: "/brands/swatch-logo.png",
    name: "Swatch",
    title: "Always Different, Always New"
  },
  {
    quote: "/brands/rado-logo.png",
    name: "Rado",
    title: "If We Can Imagine It, We Can Make It"
  },
  {
    quote: "/brands/Longines-logo.png",
    name: "Longines",
    title: "Elegance is an Attitude"
  },
  {
    quote: "/brands/Timex-Logo.png",
    name: "Timex",
    title: "Takes a Licking and Keeps on Ticking"
  },
  {
    quote: "/brands/FASTRACK-Logo-Black.png",
    name: "Fastrack",
    title: "Move On"
  },
  {
    quote: "/brands/Titan_Company_Logo.png",
    name: "Titan",
    title: "What Makes You Tick"
  },
  {
    quote: "/brands/Victorinox_Logo.png",
    name: "Victorinox",
    title: "Makers of the Original Swiss Army Knife"
  },
  {
    quote: "/brands/waterman_logo.png",
    name: "Waterman",
    title: "L'art d'écrire"
  }
];
