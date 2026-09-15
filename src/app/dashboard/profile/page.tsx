'use client';

import { useState } from 'react';
import { Camera, User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: 'Anmol Malviya',
    email: 'anmol@example.com',
    phone: '+91 98765 43210',
    city: 'Indore, Madhya Pradesh',
    college: 'IIT Indore',
    year: '3rd Year',
    bio: 'Computer Science student looking for quality student accommodation near campus.',
  });

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your personal information</p>
        </div>
        <Button variant={editing ? 'default' : 'outline'} onClick={() => setEditing(e => !e)}>
          {editing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      {/* Avatar */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6 flex items-center gap-5">
          <div className="relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://i.pravatar.cc/150?u=student" />
              <AvatarFallback className="text-xl">AM</AvatarFallback>
            </Avatar>
            {editing && (
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Camera className="w-3.5 h-3.5 text-white" />
              </button>
            )}
          </div>
          <div>
            <p className="font-bold text-lg text-slate-900">{form.name}</p>
            <p className="text-sm text-slate-500">{form.college} · {form.year}</p>
            <span className="inline-block mt-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Student</span>
          </div>
        </CardContent>
      </Card>

      {/* Personal Info */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <User className="w-4 h-4 text-primary" /> Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Full Name',    key: 'name',    icon: User,           type: 'text' },
            { label: 'Email',        key: 'email',   icon: Mail,           type: 'email' },
            { label: 'Phone',        key: 'phone',   icon: Phone,          type: 'tel' },
            { label: 'City',         key: 'city',    icon: MapPin,         type: 'text' },
            { label: 'College',      key: 'college', icon: GraduationCap,  type: 'text' },
            { label: 'Year',         key: 'year',    icon: GraduationCap,  type: 'text' },
          ].map(({ label, key, icon: Icon, type }) => (
            <div key={key}>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">{label}</label>
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-slate-300 shrink-0" />
                {editing ? (
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={e => update(key, e.target.value)}
                    className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-primary text-slate-800"
                  />
                ) : (
                  <p className="text-sm text-slate-800">{form[key as keyof typeof form]}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bio */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          {editing ? (
            <textarea
              value={form.bio}
              onChange={e => update('bio', e.target.value)}
              rows={3}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-primary text-slate-800 resize-none"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.bio}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
