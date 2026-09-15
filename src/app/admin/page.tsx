'use client';

import Link from 'next/link';
import { ShieldCheck, Users, Home, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <header className="bg-red-700 text-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">StaySphere Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium bg-red-800 px-3 py-1 rounded-full">Super Admin</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-600">System overview and verifications.</p>
          </div>
          <Button variant="outline">Download Reports</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Total Users</p>
                  <h3 className="text-2xl font-bold text-slate-900">12,450</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Listed Properties</p>
                  <h3 className="text-2xl font-bold text-slate-900">842</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Pending Verification</p>
                  <h3 className="text-2xl font-bold text-slate-900">24</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Open Tickets</p>
                  <h3 className="text-2xl font-bold text-slate-900">15</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader className="border-b bg-slate-50">
            <CardTitle>Verification Queue</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-4">Property Name</th>
                    <th className="px-6 py-4">Owner</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Submitted On</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Sunshine Living Phase 2</td>
                      <td className="px-6 py-4 text-slate-600">Ramesh Kumar</td>
                      <td className="px-6 py-4 text-slate-600">Mumbai</td>
                      <td className="px-6 py-4 text-slate-600">2 hours ago</td>
                      <td className="px-6 py-4 text-right">
                        <Button size="sm">Verify Details</Button>
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
