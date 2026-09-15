'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockProperties } from '@/data/mock';

const bookings = [
  {
    id: 'BK-001',
    property: mockProperties[0],
    room: 'Single Room',
    moveIn: 'Aug 1, 2026',
    moveOut: 'Jul 31, 2027',
    duration: '12 Months',
    status: 'confirmed',
    amount: 14999,
  },
  {
    id: 'BK-002',
    property: mockProperties[1],
    room: 'Double Sharing',
    moveIn: 'Oct 1, 2026',
    moveOut: 'Mar 31, 2027',
    duration: '6 Months',
    status: 'pending',
    amount: 9500,
  },
  {
    id: 'BK-003',
    property: mockProperties[2],
    room: 'Triple Sharing',
    moveIn: 'Jan 5, 2026',
    moveOut: 'Jun 30, 2026',
    duration: '6 Months',
    status: 'completed',
    amount: 7200,
  },
];

const statusConfig = {
  confirmed: { label: 'Confirmed', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  pending:   { label: 'Pending',   icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
  completed: { label: 'Completed', icon: Clock,        color: 'text-slate-500', bg: 'bg-slate-100' },
  cancelled: { label: 'Cancelled', icon: XCircle,      color: 'text-red-500',  bg: 'bg-red-50' },
};

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Bookings</h1>
          <p className="text-slate-500 text-sm mt-1">Track and manage all your hostel reservations</p>
        </div>
        <Button asChild>
          <Link href="/search">Find Accommodation</Link>
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              tab === 'All'
                ? 'bg-primary text-white border-primary'
                : 'text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="space-y-4">
        {bookings.map((booking) => {
          const status = statusConfig[booking.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;
          return (
            <Card key={booking.id} className="border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-44 h-44 relative shrink-0">
                    <Image
                      src={booking.property.images[0]}
                      alt={booking.property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono text-slate-400 mb-1">{booking.id}</p>
                        <h3 className="font-bold text-lg text-slate-900 leading-tight">{booking.property.name}</h3>
                        <p className="text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {booking.property.location} · {booking.room}
                        </p>
                      </div>
                      <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${status.color} ${status.bg}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {status.label}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-xs uppercase font-semibold text-slate-400 mb-1">Move-in</p>
                        <p className="font-medium text-slate-800 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> {booking.moveIn}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-slate-400 mb-1">Move-out</p>
                        <p className="font-medium text-slate-800 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" /> {booking.moveOut}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-slate-400 mb-1">Rent/mo</p>
                        <p className="font-bold text-slate-900">₹{booking.amount.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      {booking.status === 'confirmed' && (
                        <Button variant="outline" size="sm">Contact Host</Button>
                      )}
                      {booking.status === 'pending' && (
                        <Button variant="destructive" size="sm">Cancel</Button>
                      )}
                      {booking.status === 'completed' && (
                        <Button variant="outline" size="sm">Book Again</Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
