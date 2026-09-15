'use client';

import { FileText, Upload, CheckCircle, Clock, AlertCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const documents = [
  { name: 'Government ID (Aadhaar)',   status: 'verified',  date: 'Jul 10, 2026', note: null },
  { name: 'Student ID Card',           status: 'verified',  date: 'Jul 11, 2026', note: null },
  { name: 'Address Proof',             status: 'pending',   date: 'Jul 14, 2026', note: 'Under review' },
  { name: 'Passport Size Photo',       status: 'verified',  date: 'Jul 10, 2026', note: null },
  { name: 'Police Verification Form',  status: 'required',  date: null,           note: 'Upload within 7 days' },
  { name: 'Parent / Guardian ID',      status: 'required',  date: null,           note: null },
];

const docStatus = {
  verified: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50',  label: 'Verified'     },
  pending:  { icon: Clock,        color: 'text-amber-600', bg: 'bg-amber-50',  label: 'Under Review' },
  required: { icon: AlertCircle,  color: 'text-red-500',   bg: 'bg-red-50',    label: 'Required'     },
};

export default function DocumentsPage() {
  const verified = documents.filter(d => d.status === 'verified').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Documents</h1>
        <p className="text-slate-500 text-sm mt-1">
          {verified}/{documents.length} documents verified
        </p>
      </div>

      {/* Progress */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Verification Progress</span>
            <span className="text-sm font-bold text-primary">{Math.round((verified / documents.length) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full transition-all"
              style={{ width: `${(verified / documents.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">Complete verification to confirm your booking.</p>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card className="border-2 border-dashed border-slate-200 shadow-none bg-slate-50">
        <CardContent className="py-10 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <p className="font-semibold text-slate-700 mb-1">Drag & drop or click to upload</p>
          <p className="text-sm text-slate-400">PDF, JPG, PNG up to 5 MB</p>
          <Button className="mt-4" size="sm">Select File</Button>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Required Documents</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {documents.map((doc) => {
              const s = docStatus[doc.status as keyof typeof docStatus];
              const Icon = s.icon;
              return (
                <div key={doc.name} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${s.bg}`}>
                    <FileText className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-400">
                      {doc.date ? `Uploaded ${doc.date}` : doc.note || 'Not uploaded yet'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`flex items-center gap-1 text-xs font-semibold ${s.color}`}>
                      <Icon className="w-3.5 h-3.5" /> {s.label}
                    </span>
                    {doc.status === 'required' && (
                      <Button size="sm" variant="outline">Upload</Button>
                    )}
                    {doc.status === 'verified' && (
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-slate-600">View</Button>
                    )}
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
