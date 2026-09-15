'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { mockProperties } from '@/data/mock';

export default function BookingPage() {
  const [step, setStep] = useState(1); // 1: Personal, 2: Documents
  const property = mockProperties[0];
  const room = property.rooms[0];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="mb-8">
          <Link href={`/hostel/${property.id}`} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to property
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Complete your booking</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-10 max-w-2xl">
          <div className="flex items-center text-primary font-bold">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">1</div>
            Personal Details
          </div>
          <div className="h-px bg-slate-200 flex-1 mx-4"></div>
          <div className={`flex items-center font-bold ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
            Documents
          </div>
          <div className="h-px bg-slate-200 flex-1 mx-4"></div>
          <div className="flex items-center font-bold text-slate-400">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mr-2">3</div>
            Payment
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            {step === 1 ? (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" defaultValue="Anmol" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-t pt-8">University Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="university">University/College Name</Label>
                      <Input id="university" placeholder="e.g. Christ University" defaultValue="Christ University" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Name</Label>
                      <Input id="course" placeholder="e.g. B.Tech Computer Science" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="master">Masters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t">
                    <Button size="lg" className="font-semibold px-8" onClick={() => setStep(2)}>
                      Continue to Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Upload Documents</h2>
                  <p className="text-slate-500 mb-8">Please upload clear copies of the following documents to verify your identity.</p>
                  
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-1">Government ID (Aadhaar/Passport)</h3>
                      <p className="text-sm text-slate-500 mb-4">Upload PDF, JPG, or PNG (Max 5MB)</p>
                      <Button variant="outline" size="sm">Browse Files</Button>
                    </div>

                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-1">Student ID / Admission Letter</h3>
                      <p className="text-sm text-slate-500 mb-4">Upload PDF, JPG, or PNG (Max 5MB)</p>
                      <Button variant="outline" size="sm">Browse Files</Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-8 mt-8 border-t">
                    <Button variant="ghost" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button size="lg" className="font-semibold px-8" asChild>
                      <Link href="/payment">Continue to Payment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="w-full lg:w-[380px] shrink-0">
            <Card className="border-0 shadow-sm sticky top-24">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={property.images[0]} alt={property.name} fill className="object-cover rounded-t-xl" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{room.type} Room • 12 Months Stay</p>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Monthly Rent</span>
                      <span className="font-medium text-slate-900">₹{room.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Security Deposit (Refundable)</span>
                      <span className="font-medium text-slate-900">₹10,000</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Service Fee</span>
                      <span className="font-medium text-slate-900">₹999</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Total Due Today</span>
                      <span className="text-2xl font-bold text-primary">₹{(room.price + 10999).toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-right">Includes taxes and fees</p>
                  </div>

                  <div className="bg-green-50 text-green-700 p-3 rounded-lg mt-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">Free cancellation until 14 days before move-in date.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
