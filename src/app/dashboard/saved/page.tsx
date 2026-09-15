'use client';

import { Heart, Trash2, GitCompare } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/data/mock';

const saved = mockProperties.slice(0, 4);

export default function SavedPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Saved Hostels</h1>
          <p className="text-slate-500 text-sm mt-1">{saved.length} properties in your wishlist</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/compare">
            <GitCompare className="w-4 h-4 mr-2" /> Compare All
          </Link>
        </Button>
      </div>

      {saved.length === 0 ? (
        <Card className="border-0 shadow-sm">
          <CardContent className="py-20 text-center">
            <Heart className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-2">No saved hostels yet</h3>
            <p className="text-slate-500 text-sm mb-6">Browse properties and tap the heart icon to save them here.</p>
            <Button asChild><Link href="/search">Browse Hostels</Link></Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {saved.map((property) => (
            <div key={property.id} className="relative group">
              <PropertyCard property={property} />
              <button
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 z-10"
                title="Remove from saved"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
