import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isVerified && (
            <Badge className="bg-white/95 text-slate-900 hover:bg-white flex items-center gap-1 shadow-sm backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              Verified
            </Badge>
          )}
        </div>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/50 backdrop-blur-md hover:bg-white transition-colors text-slate-700 hover:text-red-500">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">{property.name}</h3>
            <div className="flex items-center text-slate-500 text-sm">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {property.distanceToUniversity} km from {property.university}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-slate-900 font-semibold bg-slate-100 px-2 py-1 rounded-md text-sm">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              {property.rating}
            </div>
            <span className="text-xs text-slate-500 mt-1">({property.reviewCount} reviews)</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 4).map((amenity, idx) => (
            <span key={idx} className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 4 && (
            <span className="text-xs font-medium text-slate-500 px-1 py-1">
              +{property.amenities.length - 4} more
            </span>
          )}
        </div>
        
        <div className="pt-4 border-t flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-0.5">Starting from</span>
            <div className="font-bold text-lg text-slate-900">
              ₹{property.startingPrice.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-500">/mo</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-2 border-0">
              {property.matchPercentage}% Match
            </Badge>
            <Button size="sm" asChild>
              <Link href={`/hostel/${property.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
