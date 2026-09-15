'use client';

import Link from 'next/link';
import { Users, Home, IndianRupee, TrendingUp, Plus, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function OwnerDashboard() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-1.5 rounded-lg text-white font-bold text-xs">OWNER</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">StaySphere</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/">Back to main site</Link>
            </Button>
            <Button className="font-semibold">
              <Plus className="w-4 h-4 mr-2" /> Add Property
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Owner Dashboard</h1>
          <p className="text-slate-600">Manage your properties, students, and revenue.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Total Properties</p>
                  <h3 className="text-3xl font-bold text-slate-900">3</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Home className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +1</span>
                <span className="text-slate-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Total Occupancy</p>
                  <h3 className="text-3xl font-bold text-slate-900">92%</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +4%</span>
                <span className="text-slate-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Monthly Revenue</p>
                  <h3 className="text-3xl font-bold text-slate-900">₹4.2L</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +12%</span>
                <span className="text-slate-500 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Pending Bookings</p>
                  <h3 className="text-3xl font-bold text-slate-900">8</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-slate-500">Requires your approval</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Simplified table/list area */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="border-b bg-slate-50">
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Property</th>
                    <th className="px-6 py-4">Move-in Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">John Doe</td>
                      <td className="px-6 py-4 text-slate-600">UrbanNest Student Living</td>
                      <td className="px-6 py-4 text-slate-600">Aug 1, 2024</td>
                      <td className="px-6 py-4">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs font-bold">Pending Review</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="outline" size="sm">Review</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
