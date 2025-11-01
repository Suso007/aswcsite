"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string; // Will be used for logo path
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300 px-6 py-8 group cursor-pointer"
            key={item.name}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Brand Logo Container */}
              <div className="relative w-32 h-20 flex items-center justify-center bg-background/80 rounded-lg border border-border/30 group-hover:border-primary/20 transition-colors p-4">
                {/* Placeholder for brand logo - you can replace with actual images */}
                <div className="w-full h-full bg-linear-to-r from-muted to-muted/70 rounded flex items-center justify-center">
                  <span className="hidden text-sm font-bold text-muted-foreground">
                    {item.name}
                  </span>
                </div>
                
                {/* You can replace above with actual Image component when you have logos */}
                <Image
                  src={item.quote}
                  alt={item.name}
                  fill
                  className="object-contain p-2 filter group-hover:brightness-110 transition-all dark:bg-amber-50"
                />
              </div>
              
              {/* Brand Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.title}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
