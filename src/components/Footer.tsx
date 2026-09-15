import Link from 'next/link';
import { Home, Globe, Mail, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">StaySphere</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Discover verified student accommodation anywhere in the world. Find a place that feels like home, instantly and securely.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/search?city=London" className="text-muted-foreground hover:text-primary transition-colors">Hostels in London</Link></li>
              <li><Link href="/search?city=Bangalore" className="text-muted-foreground hover:text-primary transition-colors">Hostels in Bangalore</Link></li>
              <li><Link href="/search?city=New+York" className="text-muted-foreground hover:text-primary transition-colors">Hostels in New York</Link></li>
              <li><Link href="/search?city=Sydney" className="text-muted-foreground hover:text-primary transition-colors">Hostels in Sydney</Link></li>
              <li><Link href="/search" className="text-muted-foreground hover:text-primary transition-colors">All Cities</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="/owner" className="text-muted-foreground hover:text-primary transition-colors">List Your Property</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support & Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/trust" className="text-muted-foreground hover:text-primary transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} StaySphere. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <select className="bg-transparent text-sm text-muted-foreground border-none outline-none focus:ring-0">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
            <select className="bg-transparent text-sm text-muted-foreground border-none outline-none focus:ring-0">
              <option>USD ($)</option>
              <option>INR (₹)</option>
              <option>GBP (£)</option>
              <option>EUR (€)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
