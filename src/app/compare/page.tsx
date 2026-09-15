'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockProperties } from '@/data/mock';

export default function ComparePage() {
  const propertiesToCompare = mockProperties.slice(0, 3);

  const renderCheck = (hasFeature: boolean) => {
    return hasFeature ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Compare Properties</h1>
          <p className="text-slate-600">Compare up to 3 properties side-by-side to find your best fit.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 p-6 border-b border-r bg-slate-50 sticky left-0 z-10">
                  <span className="text-sm font-bold text-slate-500 uppercase">Features</span>
                </th>
                {propertiesToCompare.map(p => (
                  <th key={p.id} className="w-1/4 p-6 border-b text-center align-top">
                    <div className="relative h-32 w-full mb-4 rounded-xl overflow-hidden">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1 leading-tight">{p.name}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-slate-600 mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-slate-900">{p.rating}</span>
                      <span>({p.reviewCount})</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price */}
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Starting Price</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center font-bold text-lg">
                    ₹{p.startingPrice.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-500">/mo</span>
                  </td>
                ))}
              </tr>
              {/* Distance */}
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Distance to Uni</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className={`p-4 border-b text-center font-medium ${p.distanceToUniversity < 2 ? 'text-green-600' : 'text-slate-700'}`}>
                    {p.distanceToUniversity} km
                  </td>
                ))}
              </tr>
              {/* Match Score */}
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Match Score</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center">
                    <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">
                      {p.matchPercentage}%
                    </span>
                  </td>
                ))}
              </tr>
              {/* Rooms Available */}
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Room Types</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center text-sm text-slate-600">
                    {p.rooms.map(r => r.type).join(', ')}
                  </td>
                ))}
              </tr>
              {/* Amenities Breakdown */}
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Wi-Fi</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center">
                    {renderCheck(p.amenities.includes('Wi-Fi'))}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Food Included</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center">
                    {renderCheck(p.amenities.includes('Food'))}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Laundry</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center">
                    {renderCheck(p.amenities.includes('Laundry'))}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-r bg-slate-50 font-medium text-slate-700 sticky left-0 z-10">Gym</td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-4 border-b text-center">
                    {renderCheck(p.amenities.includes('Gym'))}
                  </td>
                ))}
              </tr>
              {/* Actions */}
              <tr>
                <td className="p-6 border-r bg-slate-50 sticky left-0 z-10"></td>
                {propertiesToCompare.map(p => (
                  <td key={p.id} className="p-6 text-center bg-slate-50/50">
                    <Button className="w-full font-semibold" asChild>
                      <Link href={`/hostel/${p.id}`}>Choose this hostel</Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
