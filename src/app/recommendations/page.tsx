'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockProperties } from '@/data/mock';

export default function RecommendationsPage() {
  const recommendations = mockProperties.slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Your best matches</h1>
          <p className="text-xl text-slate-600">Based on your budget, university, lifestyle and preferences.</p>
        </div>

        <div className="space-y-8">
          {recommendations.map((property, index) => (
            <Card key={property.id} className="overflow-hidden border-2 border-primary/20 shadow-lg relative">
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
                  TOP MATCH
                </div>
              )}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                  <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
                </div>
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{property.name}</h2>
                        <p className="text-slate-500">{property.distanceToUniversity} km from {property.university}</p>
                      </div>
                      <div className="bg-green-100 text-green-800 font-bold text-xl px-3 py-1 rounded-lg border border-green-200">
                        {property.matchPercentage}% Match
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mt-6 border border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-primary" /> Why we recommend this
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        Fits your budget of under ₹15,000, is very close to your university, and matches your preference for premium amenities like Wi-Fi and included meals. It also has excellent security ratings.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">98%</div>
                        <div className="text-xs text-slate-500">Budget</div>
                      </div>
                      <div className="text-center border-l">
                        <div className="text-lg font-bold text-slate-900">95%</div>
                        <div className="text-xs text-slate-500">Location</div>
                      </div>
                      <div className="text-center border-l">
                        <div className="text-lg font-bold text-slate-900">96%</div>
                        <div className="text-xs text-slate-500">Amenities</div>
                      </div>
                      <div className="text-center border-l">
                        <div className="text-lg font-bold text-slate-900">94%</div>
                        <div className="text-xs text-slate-500">Safety</div>
                      </div>
                      <div className="text-center border-l">
                        <div className="text-lg font-bold text-slate-900">97%</div>
                        <div className="text-xs text-slate-500">Reviews</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between pt-6 border-t">
                    <div>
                      <span className="text-sm text-slate-500">Starting from</span>
                      <div className="font-bold text-2xl text-slate-900">₹{property.startingPrice.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-500">/mo</span></div>
                    </div>
                    <Button size="lg" asChild>
                      <Link href={`/hostel/${property.id}`}>
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
