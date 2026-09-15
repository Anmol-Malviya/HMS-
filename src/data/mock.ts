import { City, Property, University, Review } from '../types';

export const mockCities: City[] = [
  { id: '1', name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop', propertyCount: 1240 },
  { id: '2', name: 'Bangalore', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop', propertyCount: 324 },
  { id: '3', name: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop', propertyCount: 512 },
  { id: '4', name: 'Mumbai', image: 'https://images.unsplash.com/photo-1522251141369-b31a31d279fb?q=80&w=800&auto=format&fit=crop', propertyCount: 420 },
  { id: '5', name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop', propertyCount: 890 },
  { id: '6', name: 'Toronto', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop', propertyCount: 650 },
  { id: '7', name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop', propertyCount: 430 },
  { id: '8', name: 'Berlin', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop', propertyCount: 580 },
];

export const mockUniversities: University[] = [
  { id: '1', name: 'Christ University', city: 'Bangalore' },
  { id: '2', name: 'New York University', city: 'New York' },
  { id: '3', name: 'University College London', city: 'London' },
  { id: '4', name: 'University of Sydney', city: 'Sydney' },
];

export const mockProperties: Property[] = [
  {
    id: 'p1',
    name: 'UrbanNest Student Living',
    location: 'Koramangala, Bangalore',
    city: 'Bangalore',
    distanceToUniversity: 1.2,
    university: 'Christ University',
    rating: 4.8,
    reviewCount: 248,
    startingPrice: 9999,
    amenities: ['Wi-Fi', 'Food', 'Laundry', 'CCTV', 'AC', 'Housekeeping', 'Gym'],
    matchPercentage: 96,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'A premium student accommodation offering everything you need for a comfortable stay. Located perfectly near Christ University with top-notch security and excellent food.',
    cancellationPolicy: 'Free cancellation up to 30 days before move-in date.',
    houseRules: ['Check-in after 2:00 PM', 'No smoking', 'No pets', 'Curfew: 11:30 PM'],
    type: 'Hostel',
    rooms: [
      {
        id: 'r1',
        type: 'Single',
        price: 14999,
        availability: 2,
        bedType: 'Single Bed',
        bathroom: 'Attached',
        amenities: ['AC', 'Desk', 'Wardrobe'],
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'r2',
        type: 'Twin',
        price: 10999,
        availability: 5,
        bedType: 'Two Single Beds',
        bathroom: 'Attached',
        amenities: ['AC', 'Desk', 'Wardrobe'],
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'r3',
        type: 'Triple',
        price: 8999,
        availability: 12,
        bedType: 'Three Single Beds',
        bathroom: 'Shared',
        amenities: ['Fan', 'Desk', 'Wardrobe'],
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'p2',
    name: 'The Social Hub',
    location: 'BTM Layout, Bangalore',
    city: 'Bangalore',
    distanceToUniversity: 2.5,
    university: 'Christ University',
    rating: 4.5,
    reviewCount: 156,
    startingPrice: 7500,
    amenities: ['Wi-Fi', 'Food', 'CCTV', 'Common Area'],
    matchPercentage: 88,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55dd1b6e159?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Vibrant student community living with focus on social experiences. Great for networking and meeting other students.',
    cancellationPolicy: 'Non-refundable deposit.',
    houseRules: ['Check-in anytime', 'No smoking in rooms', 'No pets', 'No curfew'],
    type: 'Co-living',
    rooms: [
      {
        id: 'r4',
        type: 'Twin',
        price: 9500,
        availability: 8,
        bedType: 'Bunk Bed',
        bathroom: 'Attached',
        amenities: ['Fan', 'Desk'],
        image: 'https://images.unsplash.com/photo-1598928506311-c55dd1b6e159?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'r5',
        type: 'Triple',
        price: 7500,
        availability: 15,
        bedType: 'Single & Bunk Bed',
        bathroom: 'Shared',
        amenities: ['Fan', 'Locker'],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'p3',
    name: 'Stanza Living Premium',
    location: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    distanceToUniversity: 4.1,
    university: 'Christ University',
    rating: 4.9,
    reviewCount: 412,
    startingPrice: 12999,
    amenities: ['Wi-Fi', 'Food', 'Laundry', 'CCTV', 'AC', 'Housekeeping', 'Gym', 'Pool'],
    matchPercentage: 92,
    isVerified: true,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Luxury student living with premium amenities. Perfect for students who want a hassle-free and high-end living experience.',
    cancellationPolicy: 'Free cancellation up to 14 days before move-in date.',
    houseRules: ['Check-in after 12:00 PM', 'No smoking', 'Curfew: 12:00 AM'],
    type: 'Premium PG',
    rooms: [
      {
        id: 'r6',
        type: 'Single',
        price: 18999,
        availability: 1,
        bedType: 'Queen Bed',
        bathroom: 'Attached',
        amenities: ['AC', 'TV', 'Mini Fridge', 'Desk', 'Wardrobe'],
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'r7',
        type: 'Twin',
        price: 12999,
        availability: 4,
        bedType: 'Two Single Beds',
        bathroom: 'Attached',
        amenities: ['AC', 'Desk', 'Wardrobe'],
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
];

export const mockReviews: Review[] = [
  {
    id: 'rev1',
    propertyId: 'p1',
    author: 'Rahul Sharma',
    rating: 5,
    date: '2023-08-15',
    content: 'Amazing place! The food is really good compared to other PGs. Management is responsive and it is very close to campus.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: 'rev2',
    propertyId: 'p1',
    author: 'Sneha Patel',
    rating: 4,
    date: '2023-09-02',
    content: 'Good security and clean rooms. Wi-Fi can be a bit slow on weekends, but overall a great experience.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 'rev3',
    propertyId: 'p2',
    author: 'John Doe',
    rating: 4.5,
    date: '2023-07-20',
    content: 'Loved the vibe! Met so many great people. Room is decent for the price.',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
  }
];
