"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Building2,
  UtensilsCrossed,
  Briefcase,
  GraduationCap,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

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
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const solutions = [
  {
    icon: Users,
    title: "Attendance Management",
    description: "Comprehensive employee attendance tracking with biometric integration, shift management, and automated reporting",
    status: "available",
    features: [
      "Real-time attendance tracking",
      "Multiple shift management",
      "Automated leave management",
      "Overtime calculation",
      "Mobile app integration",
      "GPS-based attendance"
    ]
  },
  {
    icon: Building2,
    title: "Hostel Management",
    description: "Complete hostel administration solution for student check-in/out, room allocation, and visitor management",
    status: "available",
    features: [
      "Student check-in/check-out",
      "Room allocation & management",
      "Visitor tracking",
      "Mess management integration",
      "Parent notifications",
      "Fee management"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Canteen Management",
    description: "Smart canteen solution with meal planning, inventory management, and cashless payment integration",
    status: "available",
    features: [
      "Meal planning & menu management",
      "Inventory tracking",
      "Cashless payment system",
      "Nutrition tracking",
      "Vendor management",
      "Usage analytics"
    ]
  },
  {
    icon: Briefcase,
    title: "Payroll Management",
    description: "Automated payroll processing with attendance integration, tax calculations, and compliance reporting",
    status: "upcoming",
    features: [
      "Automated salary calculation",
      "Tax & deduction management",
      "Attendance integration",
      "Statutory compliance",
      "Bank integration",
      "Payslip generation"
    ]
  },
  {
    icon: GraduationCap,
    title: "School Attendance",
    description: "Specialized attendance system for educational institutions with parent notifications and academic integration",
    status: "upcoming",
    features: [
      "Student attendance tracking",
      "Parent SMS/email alerts",
      "Class-wise reporting",
      "Academic integration",
      "Absentee management",
      "Performance analytics"
    ]
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "Tailor-made attendance and management solutions designed specifically for your unique business requirements",
    status: "available",
    features: [
      "Industry-specific modules",
      "Custom workflows",
      "API integration",
      "Scalable architecture",
      "Dedicated support",
      "Training included"
    ]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Increased Productivity",
    description: "Automate manual processes and reduce administrative overhead"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security with encrypted data and role-based access"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards and reports for data-driven decisions"
  },
  {
    icon: Calendar,
    title: "Compliance Ready",
    description: "Stay compliant with labor laws and industry regulations"
  }
];

const stats = [
  { number: "1000+", label: "Organizations Trust Us" },
  { number: "100K+", label: "Active Users" },
  { number: "99.9%", label: "System Uptime" },
  { number: "24/7", label: "Customer Support" }
];

export default function AttendanceSolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Smart Management Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Time Attendance
              <span className="block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Streamline your workforce management with our comprehensive suite of software solutions. 
              From attendance tracking to payroll processing, we have everything you need to manage 
              your organization efficiently.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cloud-Based Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Mobile Access</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Easy Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
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

      {/* Solutions Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Software Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of specialized management solutions, each designed to solve 
              specific organizational challenges.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {solution.status === "upcoming" && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                      solution.status === "upcoming" ? "bg-muted" : "bg-primary/10"
                    }`}>
                      <solution.icon className={`w-7 h-7 ${
                        solution.status === "upcoming" ? "text-muted-foreground" : "text-primary"
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1.5">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant={solution.status === "upcoming" ? "outline" : "default"} 
                      className="w-full"
                      disabled={solution.status === "upcoming"}
                      asChild={solution.status !== "upcoming"}
                    >
                      {solution.status === "upcoming" ? (
                        <span>Coming Soon</span>
                      ) : (
                        <a href="/contact">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of modern, cloud-based management systems designed for 
              today's dynamic organizations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            className="bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 text-center"
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
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our team to discuss your requirements and discover how our 
                solutions can streamline your organization's management processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="/contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <a href="/contact">
                    Contact Sales
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Need a custom solution? <a href="/contact" className="text-primary hover:underline font-medium">Contact us</a> for personalized consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
