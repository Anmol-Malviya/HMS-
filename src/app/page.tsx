import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Calendar, CreditCard, CheckCircle, Shield, Globe, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import PropertyCard from '@/components/PropertyCard';
import { mockCities, mockProperties, mockReviews } from '@/data/mock';

export default function Home() {
  const popularCities = mockCities.slice(0, 4);
  const featuredProperties = mockProperties.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
            alt="Students in a premium accommodation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Find your perfect student home, <span className="text-primary">anywhere in the world.</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium">
              Search verified hostels and student accommodation by city, university, budget, and lifestyle.
            </p>
          </div>
          
          {/* Search Module */}
          <Card className="max-w-4xl mx-auto shadow-xl border-0 overflow-hidden">
            <div className="p-6 md:p-8 bg-white">
              <form action="/search" className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Where are you going?</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input name="city" placeholder="City or university" className="pl-10 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Move-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input type="date" name="date" className="pl-10 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Budget (Max)</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select name="budget" className="w-full h-12 pl-10 pr-4 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Any Budget</option>
                      <option value="10000">₹10,000 / mo</option>
                      <option value="15000">₹15,000 / mo</option>
                      <option value="25000">₹25,000 / mo</option>
                    </select>
                  </div>
                </div>
                <Button type="submit" size="lg" className="h-12 w-full text-lg font-semibold">
                  <Search className="mr-2 h-5 w-5" /> Search
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Popular Cities</h2>
              <p className="text-slate-500 text-lg">Find the best student accommodations across the globe.</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/search">View All Cities</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCities.map((city) => (
              <Link href={`/search?city=${city.name}`} key={city.id}>
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-[280px] relative">
                  <Image src={city.image} alt={city.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                    <p className="text-white/80 font-medium">{city.propertyCount} properties</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Booking your perfect student accommodation has never been easier. Follow these simple steps to find your new home.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Search', desc: 'Find properties near your university within your budget.', icon: Search },
              { title: 'Compare', desc: 'Compare amenities, prices, and reviews of top hostels.', icon: MapPin },
              { title: 'Verify', desc: 'Check our verified tags and authentic student reviews.', icon: CheckCircle },
              { title: 'Book', desc: 'Secure your room instantly with our safe payment system.', icon: CreditCard },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Hostels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Featured Properties</h2>
              <p className="text-slate-500 text-lg">Handpicked student accommodations with premium amenities and verified reviews.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="font-semibold" asChild>
              <Link href="/search">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why StaySphere? */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Why StaySphere?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We eliminate the stress of finding student accommodation with our trusted global platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">100% Verified</h3>
                <p className="text-slate-500 text-sm">Every property and review is manually verified by our team for your safety.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Secure Booking</h3>
                <p className="text-slate-500 text-sm">Your payments are protected. We only release funds to hosts after you move in.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Global Coverage</h3>
                <p className="text-slate-500 text-sm">Find accommodation in over 50+ countries near top universities worldwide.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Student Community</h3>
                <p className="text-slate-500 text-sm">Connect with future flatmates and read authentic reviews from real students.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Loved by Students Worldwide</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Don't just take our word for it. Here's what students have to say about their experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockReviews.map((review) => (
              <Card key={review.id} className="border border-slate-100 shadow-sm bg-slate-50">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-current' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{review.content}"</p>
                  <div className="flex items-center gap-3">
                    <Image src={review.avatar} alt={review.author} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-bold text-sm text-slate-900">{review.author}</p>
                      <p className="text-xs text-slate-500">Student at University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Ready to find your new home?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have already found their perfect accommodation with StaySphere.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold" asChild>
            <Link href="/search">Explore accommodations</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
