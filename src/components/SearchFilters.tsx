'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SearchFilters() {
  const [budget, setBudget] = useState([20000]);

  return (
    <Card className="border-0 shadow-sm sticky top-24">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <Button variant="ghost" size="sm" className="h-8 text-xs text-primary">Clear all</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Budget */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Monthly Budget (Max)</h3>
          <Slider 
            value={budget} 
            onValueChange={(val) => setBudget(val as number[])} 
            max={50000} 
            min={5000} 
            step={1000} 
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>₹5,000</span>
            <span>₹{budget[0].toLocaleString('en-IN')}</span>
          </div>
        </div>

        <hr className="border-border" />

        {/* Room Type */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Room Type</h3>
          <div className="space-y-2">
            {['Single', 'Twin Sharing', 'Triple Sharing', 'Studio'].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`room-${type}`} />
                <Label htmlFor={`room-${type}`} className="text-sm font-normal text-slate-600">{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-border" />

        {/* Distance from University */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Distance</h3>
          <RadioGroup defaultValue="3km">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1km" id="dist-1km" />
              <Label htmlFor="dist-1km" className="text-sm font-normal text-slate-600">&lt; 1 km</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3km" id="dist-3km" />
              <Label htmlFor="dist-3km" className="text-sm font-normal text-slate-600">&lt; 3 km</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5km" id="dist-5km" />
              <Label htmlFor="dist-5km" className="text-sm font-normal text-slate-600">&lt; 5 km</Label>
            </div>
          </RadioGroup>
        </div>

        <hr className="border-border" />

        {/* Amenities */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Amenities</h3>
          <div className="space-y-2">
            {['Wi-Fi', 'Food Included', 'Laundry', 'AC', 'Gym', 'CCTV'].map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox id={`amenity-${amenity}`} />
                <Label htmlFor={`amenity-${amenity}`} className="text-sm font-normal text-slate-600">{amenity}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <hr className="border-border" />

        {/* Verification */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="verified-only" className="font-semibold text-sm cursor-pointer">Verified Properties Only</Label>
            <Checkbox id="verified-only" defaultChecked />
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
