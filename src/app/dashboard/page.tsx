import Link from 'next/link';
import Image from 'next/image';
import { Home, Calendar, CreditCard, ChevronRight, MessageSquare, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/data/mock';

export default function DashboardOverview() {
  const recommended = mockProperties.slice(1, 3);

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-primary/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-primary/20">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome back, Anmol! 👋</h1>
          <p className="text-slate-600">You have an upcoming move-in. Make sure all your documents are uploaded.</p>
        </div>
        <Button className="mt-4 md:mt-0 font-semibold" asChild>
          <Link href="/dashboard/documents">Check Documents</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Upcoming Booking */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50 border-b pb-4">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>Upcoming Stay</span>
                <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-md">In 14 Days</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-48 relative">
                  <Image src={mockProperties[0].images[0]} alt="Property" fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{mockProperties[0].name}</h3>
                    <p className="text-sm text-slate-500 mb-4">Single Room • 12 Months Stay</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Move-in Date</p>
                        <p className="font-medium text-slate-900 flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-primary" /> Aug 1, 2024
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Status</p>
                        <p className="font-medium text-green-600">Confirmed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                    <Button variant="outline" size="sm" className="flex-1">Contact Host</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Properties */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">Recommended for you</h2>
              <Link href="/recommendations" className="text-sm font-semibold text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommended.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column (Sidebar Widgets) */}
        <div className="space-y-6">
          
          {/* Payment Widget */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary" /> Payment Due
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 mb-1">₹14,999</div>
              <p className="text-sm text-slate-500 mb-4">Due on Sep 1, 2024</p>
              <Button className="w-full font-semibold">Pay Now</Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Hostel Manager replied</p>
                    <p className="text-xs text-slate-500">"Yes, you can bring your own chair..."</p>
                    <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Booking Confirmed</p>
                    <p className="text-xs text-slate-500">UrbanNest Student Living</p>
                    <p className="text-xs text-slate-400 mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 text-primary text-sm font-semibold">
                View all activity <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}
