import Link from 'next/link';
import { CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BookingSuccessPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        
        <div className="mb-8 relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-pulse"></div>
          <CheckCircle2 className="w-24 h-24 text-green-500 relative z-10" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Your accommodation is confirmed!</h1>
        <p className="text-xl text-slate-600 mb-10">You're all set. We've sent a confirmation email with all the details.</p>

        <Card className="border-0 shadow-lg text-left mb-10 overflow-hidden">
          <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Booking ID</p>
              <p className="font-bold text-slate-900">#BKG-8472910</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Status</p>
              <p className="font-bold text-green-600">Confirmed & Paid</p>
            </div>
          </div>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Property</h4>
                <p className="font-bold text-slate-900 text-lg">UrbanNest Student Living</p>
                <p className="text-slate-600">Single Room</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Move-in Date</h4>
                <p className="font-bold text-slate-900 text-lg">August 1, 2024</p>
                <p className="text-slate-600">Check-in after 2:00 PM</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Address</h4>
                <p className="font-medium text-slate-900">Koramangala, Bangalore, India 560034</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 font-semibold px-8">
            <Download className="w-4 h-4 mr-2" /> Download Receipt
          </Button>
          <Button size="lg" className="w-full sm:w-auto h-12 font-semibold px-8" asChild>
            <Link href="/dashboard">
              Go to Student Dashboard <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
