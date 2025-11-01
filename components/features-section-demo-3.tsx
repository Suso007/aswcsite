import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconClock,
  IconShield,
  IconTruck,
  IconCertificate,
  IconStar,
  IconGift,
  IconHeadphones,
  IconAward,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Premium Watch Collection",
      description:
        "Curated selection of luxury and premium timepieces from world-renowned brands.",
      icon: <IconClock />,
    },
    {
      title: "Authentic Guarantee",
      description:
        "Every watch comes with authenticity certification and manufacturer warranty.",
      icon: <IconCertificate />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Best prices in the market with flexible payment options and EMI facilities.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Expert Watch Service",
      description: "Professional repair and maintenance by certified technicians.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Free Home Delivery",
      description: "Safe and secure delivery to your doorstep with insurance coverage.",
      icon: <IconTruck />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance for all your watch-related queries and support.",
      icon: <IconHeadphones />,
    },
    {
      title: "Lifetime Service Warranty",
      description:
        "Comprehensive after-sales service and lifetime maintenance support.",
      icon: <IconShield />,
    },
    {
      title: "Exclusive Collections",
      description: "Limited edition timepieces and exclusive brand partnerships.",
      icon: <IconAward />,
    },
  ];
  return (
    <section className="mt-8">
    <div className="text-center mb-6">
          <h2 className="text-lg md:text-3xl font-semibold mb-2 text-foreground">
            Why Choose <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"> anglo swiss watch co.</span>?
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            We proudly represent the world's most prestigious watchmakers
          </p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
        
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
