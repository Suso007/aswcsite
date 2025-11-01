"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingCart, User, ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "Premium Watches",
    href: "/watch/premium",
    description: "Premium timepieces from world-renowned brands",
    section: "Watches",
  },
  {
    title: "Sport Watches",
    href: "/watch/sport",
    description: "Durable and functional watches for active lifestyles",
    section: "Watches",
  },
  {
    title: "Smart Watches",
    href: "/watch/smart",
    description: "Technology meets tradition in our smart watch collection",
    section: "Watches",
  },
  {
    title: "Classic Timepieces",
    href: "/timepieces/classic",
    description: "Timeless designs that never go out of style",
    section: "Timepieces",
  },
  {
    title: "Tower Clocks",
    href: "/timepieces/tower-clocks",
    description: "Monumental timepieces for architectural excellence",
    section: "Timepieces",
  },
  {
    title: "Access Control Systems", 
    href: "/access-control",
    description: "Secure and manage access to your places",
    section: "Access Control",
  },
  {
    title: "Time Attendance Solutions",
    href: "/attendance-solutions",
    description: "Advanced systems for workforce time management",
    section: "Access Control",
  },
]

const services = [
  {
    title: "Watch Repair",
    href: "/services/repair",
    description: "Expert repair services for all watch brands",
  },
  {
    title: "Installation Services",
    href: "/services/installation", 
    description: "Professional installation for tower clocks and attendance systems",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [expandedMenus, setExpandedMenus] = React.useState<{[key: string]: boolean}>({
    products: false,
    services: false
  })
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [redirectType, setRedirectType] = React.useState<'account' | 'cart'>('account')
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const isActivePath = (path: string) => {
    if (path === '/') return pathname === path
    return pathname?.startsWith(path) || false
  }

  const handleShopifyRedirect = (type: 'account' | 'cart') => {
    setRedirectType(type)
    setDialogOpen(true)
  }

  const confirmRedirect = () => {
    const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'https://your-store.myshopify.com'
    const path = redirectType === 'account' ? '/account' : '/cart'
    window.open(`${shopifyUrl}`, '_blank', 'noopener,noreferrer')
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redirect to Store</AlertDialogTitle>
            <AlertDialogDescription>
              {redirectType === 'account'
                ? 'You will be redirected to our store to access your account. Continue?'
                : 'You will be redirected to our store to view your cart. Continue?'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRedirect}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-12' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logomain.png"
                alt="Anglo Swiss Watch Co."
                width={120}
                height={40}
                className={`w-auto transition-all duration-300 ease-in-out ${
                  isScrolled ? 'h-8' : 'h-10'
                }`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex text-foreground">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] gap-6 p-6 md:grid-cols-3">
                    {/* Dynamically generate sections */}
                    {Array.from(new Set(products.map(p => p.section))).map((section) => (
                      <div key={section} className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3 pb-2 border-b">
                          {section}
                        </h4>
                        <ul className="space-y-2">
                          {products
                            .filter((product) => product.section === section)
                            .map((product) => (
                              <ListItem
                                key={product.title}
                                title={product.title}
                                href={product.href}
                              >
                                {product.description}
                              </ListItem>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/brands" className={navigationMenuTriggerStyle()}>
                  Brands
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
          {/* Right Section */}
          <div className="flex items-center space-x-3 text-foreground">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search watches..."
                  className="pl-8 w-64"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <ThemeToggle />

            <Button variant="ghost" size="icon" onClick={() => handleShopifyRedirect('account')}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => handleShopifyRedirect('cart')}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
                <div className="flex h-full flex-col">
                  {/* Header Section */}
                  <div className="flex items-center gap-3 border-b px-6 py-4 bg-muted/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                      <span className="text-sm font-bold">AS</span>
                    </div>
                    <div className="flex flex-col">
                      <SheetTitle className="text-sm font-semibold">Anglo Swiss</SheetTitle>
                      <SheetDescription className="text-xs text-muted-foreground">Watch Co.</SheetDescription>
                    </div>
                  </div>

                  {/* Navigation Content */}
                  <div className="flex-1 overflow-auto px-6 py-6">
                    <nav className="space-y-2">
                      {/* Main Navigation Links */}
                      <div className="space-y-1 mb-6">
                        <h4 className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Menu
                        </h4>
                        
                        <Link
                          href="/"
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                            isActivePath("/") || pathname === "/"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <span>Home</span>
                          {(isActivePath("/") || pathname === "/") && (
                            <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                              Active
                            </Badge>
                          )}
                        </Link>

                        <Link
                          href="/brands"
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                            isActivePath("/brands")
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <span>Brands</span>
                          {isActivePath("/brands") && (
                            <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                              Active
                            </Badge>
                          )}
                        </Link>

                        <Link
                          href="/about"
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                            isActivePath("/about")
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <span>About Us</span>
                          {isActivePath("/about") && (
                            <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                              Active
                            </Badge>
                          )}
                        </Link>

                        <Link
                          href="/contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                            isActivePath("/contact")
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <span>Contact</span>
                          {isActivePath("/contact") && (
                            <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                              Active
                            </Badge>
                          )}
                        </Link>
                      </div>

                      <Separator className="my-4" />

                      {/* Products Section - Collapsible */}
                      <div className="space-y-1">
                        <h4 className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Collections
                        </h4>
                        
                        <Collapsible 
                          open={expandedMenus.products} 
                          onOpenChange={(open) => setExpandedMenus(prev => ({...prev, products: open}))}
                        >
                          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 group">
                            <span>Products</span>
                            <div className="flex items-center gap-2">
                              {expandedMenus.products ? (
                                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 mt-1">
                            <div className="ml-3 space-y-1 border-l border-border/50 pl-3">
                              {products.map((product) => (
                                <Link
                                  key={product.title}
                                  href={product.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={cn(
                                    "flex flex-col space-y-1 rounded-md px-3 py-2 transition-all duration-200",
                                    isActivePath(product.href)
                                      ? "bg-primary/10 text-primary border border-primary/20"
                                      : "hover:bg-accent/50 hover:text-accent-foreground"
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{product.title}</span>
                                    {isActivePath(product.href) && (
                                      <div className="h-2 w-2 bg-primary rounded-full" />
                                    )}
                                  </div>
                                  <span className="text-xs text-muted-foreground line-clamp-2">
                                    {product.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Services Section - Collapsible */}
                        <Collapsible 
                          open={expandedMenus.services} 
                          onOpenChange={(open) => setExpandedMenus(prev => ({...prev, services: open}))}
                        >
                          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 group">
                            <span>Services</span>
                            <div className="flex items-center gap-2">
                              {expandedMenus.services ? (
                                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 mt-1">
                            <div className="ml-3 space-y-1 border-l border-border/50 pl-3">
                              {services.map((service) => (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={cn(
                                    "flex flex-col space-y-1 rounded-md px-3 py-2 transition-all duration-200",
                                    isActivePath(service.href)
                                      ? "bg-primary/10 text-primary border border-primary/20"
                                      : "hover:bg-accent/50 hover:text-accent-foreground"
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{service.title}</span>
                                    {isActivePath(service.href) && (
                                      <div className="h-2 w-2 bg-primary rounded-full" />
                                    )}
                                  </div>
                                  <span className="text-xs text-muted-foreground line-clamp-2">
                                    {service.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </nav>
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t bg-muted/20 p-6">
                    <div className="flex flex-col space-y-3">
                      <Button variant="outline" className="w-full justify-start text-sm h-11" size="sm" onClick={() => handleShopifyRedirect('account')}>
                        <User className="h-4 w-4 mr-3" />
                        My Account
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm h-11" size="sm" onClick={() => handleShopifyRedirect('cart')}>
                        <ShoppingCart className="h-4 w-4 mr-3" />
                        View Cart
                      </Button>
                      <Separator className="my-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Theme</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"