export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  distanceToUniversity: number;
  university: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  amenities: string[];
  matchPercentage: number;
  isVerified: boolean;
  images: string[];
  description: string;
  cancellationPolicy: string;
  houseRules: string[];
  rooms: Room[];
  type: string;
}

export interface Room {
  id: string;
  type: 'Single' | 'Twin' | 'Triple' | 'Studio';
  price: number;
  availability: number;
  bedType: string;
  bathroom: 'Attached' | 'Shared';
  amenities: string[];
  image: string;
}

export interface City {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
}

export interface University {
  id: string;
  name: string;
  city: string;
}

export interface Review {
  id: string;
  propertyId: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}
