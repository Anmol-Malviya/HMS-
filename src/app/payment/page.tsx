'use client';

import Link from 'next/link';
import { ArrowLeft, Lock, CreditCard as CardIcon, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PaymentPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="mb-8">
          <Link href="/booking" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to details
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Payment</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-10">
          <div className="flex items-center text-primary font-bold">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
              <CheckCircle />
            </div>
            Details
          </div>
          <div className="h-px bg-primary flex-1 mx-4"></div>
          <div className="flex items-center text-primary font-bold">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
              <CheckCircle />
            </div>
            Documents
          </div>
          <div className="h-px bg-primary flex-1 mx-4"></div>
          <div className="flex items-center font-bold text-primary">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">3</div>
            Payment
          </div>
        </div>

        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">Total to pay</h2>
              <div className="text-2xl font-bold text-primary">₹25,998</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-4 mb-8">
              <Lock className="w-6 h-6 text-green-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Your payment is securely processed</h4>
                <p className="text-sm text-slate-500 leading-relaxed">We use industry-standard encryption to protect your personal and payment information.</p>
              </div>
            </div>

            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 h-12">
                <TabsTrigger value="card" className="font-medium h-10">Credit Card</TabsTrigger>
                <TabsTrigger value="upi" className="font-medium h-10">UPI</TabsTrigger>
                <TabsTrigger value="netbanking" className="font-medium h-10">Net Banking</TabsTrigger>
                <TabsTrigger value="international" className="font-medium h-10">International</TabsTrigger>
              </TabsList>
              
              <TabsContent value="card">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Card Number</Label>
                    <div className="relative">
                      <CardIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <Input placeholder="0000 0000 0000 0000" className="pl-10 h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Expiry Date</Label>
                      <Input placeholder="MM/YY" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label>CVC</Label>
                      <Input placeholder="123" className="h-12" type="password" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Name on Card</Label>
                    <Input placeholder="John Doe" className="h-12" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="upi">
                <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl">
                  <p className="text-slate-500 mb-4">Scan QR code or enter your UPI ID</p>
                  <Input placeholder="username@bank" className="max-w-xs mx-auto h-12 mb-4" />
                  <Button variant="outline">Verify UPI ID</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="netbanking">
                <div className="space-y-4">
                  <Label>Select your bank</Label>
                  <select className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-1 shadow-sm">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              </TabsContent>
              
              <TabsContent value="international">
                <div className="p-8 text-center bg-slate-50 rounded-xl">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Pay via Swift or International Cards</h3>
                  <p className="text-sm text-slate-500">You will be redirected to our international payment gateway partner (Stripe).</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-10">
              <Button size="lg" className="w-full font-bold h-14 text-lg" asChild>
                <Link href="/booking/success">Pay ₹25,998 & Confirm Booking</Link>
              </Button>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">By confirming, you agree to StaySphere's Terms & Conditions.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
}
