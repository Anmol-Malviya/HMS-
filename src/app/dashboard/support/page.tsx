'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqs = [
  { q: 'How do I cancel my booking?', a: 'You can cancel your booking from the My Bookings page up to 48 hours before your move-in date. After that, cancellation fees may apply as per the hostel policy.' },
  { q: 'When is rent due each month?', a: 'Rent is due on the 1st of every month. You will receive a reminder email and push notification 5 days before the due date.' },
  { q: 'What documents are required for verification?', a: 'You need a Government ID (Aadhaar/Passport), Student ID card, recent passport-size photo, and address proof. Some hostels may additionally require a police verification form.' },
  { q: 'How do I request maintenance?', a: 'You can raise a maintenance request by messaging the hostel manager directly from the Messages section of your dashboard.' },
  { q: 'Can I change my room type after booking?', a: 'Room change requests are subject to availability and must be raised at least 15 days before your move-in date. Contact your hostel manager.' },
];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Support</h1>
        <p className="text-slate-500 text-sm mt-1">Get help and answers to common questions</p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Live Chat</h3>
              <p className="text-sm text-slate-500 mb-3">Chat with our support team. Usually replies in &lt;5 min.</p>
              <Button size="sm">Start Chat</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-sm text-slate-500 mb-3">Available Mon–Sat, 9 AM – 6 PM IST.</p>
              <Button size="sm" variant="outline">+91 98765 43210</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pt-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left flex items-center justify-between px-4 py-3.5 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-slate-800 text-sm">{faq.q}</span>
                {open === i
                  ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                }
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-slate-600 border-t bg-slate-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
