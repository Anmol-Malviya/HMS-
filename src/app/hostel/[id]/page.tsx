'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, MapPin, Share, Heart, CheckCircle2, 
  Wifi, Coffee, Shield, Calendar, Map as MapIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockProperties, mockReviews } from '@/data/mock';

export default function HostelDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const propertyId = resolvedParams.id;
  const property = mockProperties.find(p => p.id === propertyId) || mockProperties[0];
  const reviews = mockReviews.filter(r => r.propertyId === property.id);

  const [selectedRoom, setSelectedRoom] = useState(property.rooms[0].id);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-slate-900">{property.name}</h1>
              {property.isVerified && (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-semibold text-slate-900 mr-1">{property.rating}</span>
                <span className="underline cursor-pointer">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center text-primary font-medium">
                <MapIcon className="w-4 h-4 mr-1" />
                <span>{property.distanceToUniversity} km from {property.university}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="font-semibold">
              <Share className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button variant="outline" size="sm" className="font-semibold">
              <Heart className="w-4 h-4 mr-2" /> Save
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
          <div className="md:col-span-2 row-span-2 relative h-full">
            <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
          </div>
          <div className="hidden md:block relative h-full">
            <Image src={property.images[1]} alt={property.name} fill className="object-cover" />
          </div>
          <div className="hidden md:block relative h-full">
            <Image src={property.images[2] || property.images[0]} alt={property.name} fill className="object-cover" />
          </div>
          <div className="hidden md:block md:col-span-2 relative h-full">
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 cursor-pointer hover:bg-black/40 transition-colors">
              <Button variant="secondary" className="font-semibold">View all photos</Button>
            </div>
            <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About this property</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
            </section>
            
            <hr className="border-border" />

            {/* Key Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <MapIcon className="w-6 h-6 text-primary" />
                  <span className="font-medium">{property.distanceToUniversity} km from campus</span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-medium">24/7 Security</span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Wifi className="w-6 h-6 text-primary" />
                  <span className="font-medium">High-speed Wi-Fi</span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Coffee className="w-6 h-6 text-primary" />
                  <span className="font-medium">Meals Included</span>
                </div>
              </div>
            </section>
            
            <hr className="border-border" />

            {/* Rooms */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Rooms & Pricing</h2>
              <div className="space-y-4">
                {property.rooms.map((room) => (
                  <Card key={room.id} className={`overflow-hidden border-2 cursor-pointer transition-colors ${selectedRoom === room.id ? 'border-primary bg-primary/5' : 'border-border/50 hover:border-primary/50'}`} onClick={() => setSelectedRoom(room.id)}>
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/3 relative h-48 sm:h-auto">
                        <Image src={room.image} alt={room.type} fill className="object-cover" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{room.type} Room</h3>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-slate-900">₹{room.price.toLocaleString('en-IN')}</span>
                              <span className="text-slate-500 text-sm">/mo</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 mb-4">
                            <span>• {room.bedType}</span>
                            <span>• {room.bathroom} Bathroom</span>
                            <span>• {room.availability} left</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map(a => (
                              <Badge variant="secondary" key={a}>{a}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-end">
                          <Button variant={selectedRoom === room.id ? "default" : "outline"}>
                            {selectedRoom === room.id ? "Selected" : "Select Room"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <hr className="border-border" />
            
            {/* Reviews */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <h2 className="text-2xl font-bold text-slate-900">{property.rating} · {property.reviewCount} Reviews</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map(review => (
                  <div key={review.id} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Image src={review.avatar} alt={review.author} width={48} height={48} className="rounded-full" />
                      <div>
                        <h4 className="font-bold text-slate-900">{review.author}</h4>
                        <p className="text-sm text-slate-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-slate-700">{review.content}</p>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
          
          {/* Sticky Booking Widget */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-24">
              <Card className="border border-slate-200 shadow-xl rounded-2xl overflow-hidden">
                <div className="p-6 bg-slate-900 text-white">
                  <div className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-1">Starting from</div>
                  <div className="text-3xl font-bold">₹{property.startingPrice.toLocaleString('en-IN')}<span className="text-lg font-normal text-slate-400">/month</span></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <form action="/booking">
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="border rounded-xl p-3">
                          <label className="text-xs font-bold text-slate-500 uppercase">Move-in Date</label>
                          <input type="date" className="w-full mt-1 border-none outline-none bg-transparent font-medium" defaultValue="2024-08-01" />
                        </div>
                        <div className="border rounded-xl p-3">
                          <label className="text-xs font-bold text-slate-500 uppercase">Duration</label>
                          <select className="w-full mt-1 border-none outline-none bg-transparent font-medium">
                            <option>12 Months</option>
                            <option>6 Months</option>
                            <option>3 Months</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-slate-600">
                        <span>Selected Room Rent</span>
                        <span>₹{property.rooms.find(r => r.id === selectedRoom)?.price.toLocaleString('en-IN') || property.startingPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Security Deposit</span>
                        <span>₹10,000</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Service Fee</span>
                        <span>₹999</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between font-bold text-lg text-slate-900">
                        <span>Total Due</span>
                        <span>₹{((property.rooms.find(r => r.id === selectedRoom)?.price || property.startingPrice) + 10999).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <Button size="lg" className="w-full text-lg font-bold h-14" type="submit">
                      Reserve this room
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4">You won't be charged yet.</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
