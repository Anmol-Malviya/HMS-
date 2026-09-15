import Link from 'next/link';
import { Home, Search, Heart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">StaySphere</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/search" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Find Accommodation
          </Link>
          <Link href="/compare" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Compare
          </Link>
          <Link href="/owner" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            List your Property
          </Link>
          <div className="flex items-center gap-2 pl-4 border-l">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/saved">
                <Heart className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" className="font-semibold" asChild>
              <Link href="/dashboard">Log in</Link>
            </Button>
            <Button className="font-semibold" asChild>
              <Link href="/dashboard">Sign up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="w-5 h-5" />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon" asChild>
                <span><Menu className="w-5 h-5" /></span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/search" className="text-lg font-medium hover:text-primary transition-colors">
                  Find Accommodation
                </Link>
                <Link href="/compare" className="text-lg font-medium hover:text-primary transition-colors">
                  Compare Hostels
                </Link>
                <Link href="/dashboard/saved" className="text-lg font-medium hover:text-primary transition-colors">
                  Saved Properties
                </Link>
                <Link href="/owner" className="text-lg font-medium hover:text-primary transition-colors">
                  List your Property
                </Link>
                <hr className="my-4" />
                <Button className="w-full justify-start" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
