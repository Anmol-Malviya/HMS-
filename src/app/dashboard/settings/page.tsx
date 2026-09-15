'use client';

import { useState } from 'react';
import { Bell, Moon, Globe, Shield, Smartphone, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 rounded-full transition-colors focus:outline-none ${enabled ? 'bg-primary' : 'bg-slate-200'}`}
    >
      <span
        className={`inline-block h-5 w-5 mt-0.5 rounded-full bg-white shadow transform transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0.5'}`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsAlerts: false,
    darkMode: false,
    language: 'English',
    twoFactor: false,
    dataSharing: false,
  });

  const toggle = (k: keyof typeof settings) =>
    setSettings(s => ({ ...s, [k]: !s[k] }));

  const sections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', sub: 'Booking updates, receipts, promotions', key: 'emailNotifications' },
        { label: 'Push Notifications',  sub: 'Alerts on your device',                key: 'pushNotifications'  },
        { label: 'SMS Alerts',           sub: 'Payment reminders via SMS',            key: 'smsAlerts'           },
      ],
    },
    {
      title: 'Appearance',
      icon: Moon,
      items: [
        { label: 'Dark Mode', sub: 'Switch to a darker color scheme', key: 'darkMode' },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', sub: 'Adds extra security to your account', key: 'twoFactor'   },
        { label: 'Data Sharing',              sub: 'Share usage data to improve the app', key: 'dataSharing' },
      ],
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account preferences</p>
      </div>

      {sections.map(({ title, icon: Icon, items }) => (
        <Card key={title} className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Icon className="w-4 h-4 text-primary" /> {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="divide-y p-0">
            {items.map(({ label, sub, key }) => (
              <div key={key} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
                <Toggle
                  enabled={settings[key as keyof typeof settings] as boolean}
                  onToggle={() => toggle(key as keyof typeof settings)}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Language */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" /> Language & Region
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">App Language</p>
              <p className="text-xs text-slate-400 mt-0.5">Currently set to {settings.language}</p>
            </div>
            <button className="flex items-center gap-1 text-sm text-primary font-semibold hover:underline">
              Change <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-0 shadow-sm border-red-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-6 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">Delete Account</p>
              <p className="text-xs text-slate-400 mt-0.5">Permanently remove your account and all data</p>
            </div>
            <Button variant="destructive" size="sm">Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
