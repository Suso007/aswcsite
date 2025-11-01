import Link from "next/link"
import { Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-linear-to-br from-primary/20 via-primary/10 to-background overflow-hidden border-t">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                              src="/logomain.png"
                              alt="Anglo Swiss Watch Co."
                              width={120}
                              height={40}
                              className="w-auto transition-all duration-300 ease-in-out h-10"
                              priority
                            />
              <span className="text-xl font-bold text-foreground">Anglo Swiss Watch Co.</span>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/watches/luxury" className="text-muted-foreground hover:text-foreground transition-colors">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link href="/watches/sport" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sport Watches
                </Link>
              </li>
              <li>
                <Link href="/watches/smart" className="text-muted-foreground hover:text-foreground transition-colors">
                  Smart Watches
                </Link>
              </li>
              <li>
                <Link href="/timepieces" className="text-muted-foreground hover:text-foreground transition-colors">
                  Classic Timepieces
                </Link>
              </li>
              <li>
                <Link href="/tower-clocks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tower Clocks
                </Link>
              </li>
              <li>
                <Link href="/attendance-solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Time Attendance Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/repair" className="text-muted-foreground hover:text-foreground transition-colors">
                  Watch Repair
                </Link>
              </li>
              <li>
                <Link href="/services/engraving" className="text-muted-foreground hover:text-foreground transition-colors">
                  Custom Engraving
                </Link>
              </li>
              <li>
                <Link href="/services/installation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-muted-foreground hover:text-foreground transition-colors">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Timekeeper Avenue<br />
                  London, UK W1K 1AA
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@angloswisswatchco.com</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Newsletter</h4>
              <p className="text-xs text-muted-foreground">
                Subscribe for exclusive offers and new arrivals
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="text-xs"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Anglo Swiss Watch Co. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Authorized dealer for:</span>
            <div className="flex space-x-2 font-medium text-foreground">
              <span>Rolex</span>
              <span>•</span>
              <span>Omega</span>
              <span>•</span>
              <span>Seiko</span>
              <span>•</span>
              <span>Tissot</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}