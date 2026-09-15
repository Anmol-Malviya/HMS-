'use client';

import { CreditCard, CheckCircle, Clock, Download, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const transactions = [
  { id: 'TXN-001', description: 'Rent – August 2026', date: 'Aug 1, 2026',  amount: 14999, status: 'paid' },
  { id: 'TXN-002', description: 'Security Deposit',    date: 'Jul 15, 2026', amount: 29998, status: 'paid' },
  { id: 'TXN-003', description: 'Rent – September 2026', date: 'Sep 1, 2026', amount: 14999, status: 'due' },
  { id: 'TXN-004', description: 'Maintenance Fee',     date: 'Jul 10, 2026', amount: 500,   status: 'paid' },
  { id: 'TXN-005', description: 'Rent – October 2026', date: 'Oct 1, 2026',  amount: 14999, status: 'upcoming' },
];

const statusStyle = {
  paid:     { label: 'Paid',     icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  due:      { label: 'Due',      icon: Clock,        color: 'text-red-600',   bg: 'bg-red-50'   },
  upcoming: { label: 'Upcoming', icon: Clock,        color: 'text-amber-600', bg: 'bg-amber-50' },
};

export default function PaymentsPage() {
  const totalPaid = transactions.filter(t => t.status === 'paid').reduce((s, t) => s + t.amount, 0);
  const totalDue  = transactions.filter(t => t.status === 'due').reduce((s, t) => s + t.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your rent and transaction history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-500 font-medium mb-1">Total Paid</p>
            <p className="text-2xl font-bold text-slate-900">₹{totalPaid.toLocaleString()}</p>
            <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> All cleared</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm border-red-100">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-500 font-medium mb-1">Amount Due</p>
            <p className="text-2xl font-bold text-red-600">₹{totalDue.toLocaleString()}</p>
            <p className="text-xs text-red-500 font-medium mt-1">Due Sep 1, 2026</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-500 font-medium mb-1">Next Payment</p>
            <p className="text-2xl font-bold text-slate-900">₹14,999</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Oct 1, 2026</p>
          </CardContent>
        </Card>
      </div>

      {/* Due Now CTA */}
      {totalDue > 0 && (
        <Card className="border-0 shadow-sm bg-red-50 border-red-200">
          <CardContent className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-red-700">Payment Overdue</p>
                <p className="text-sm text-red-600">September rent of ₹14,999 is due now.</p>
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white shrink-0">
              Pay ₹14,999 Now <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Transaction History */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg">Transaction History</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {transactions.map((txn) => {
              const s = statusStyle[txn.status as keyof typeof statusStyle];
              const Icon = s.icon;
              return (
                <div key={txn.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${s.bg}`}>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 truncate">{txn.description}</p>
                    <p className="text-xs text-slate-400">{txn.date} · {txn.id}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-slate-900">₹{txn.amount.toLocaleString()}</p>
                    <span className={`text-xs font-semibold ${s.color}`}>{s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
