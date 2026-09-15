'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, BookOpen, Heart, Activity, 
  CreditCard, FileText, MessageSquare, HelpCircle, 
  User, Settings, LogOut, Bell
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Bookings', href: '/dashboard/bookings', icon: BookOpen },
    { name: 'Saved Hostels', href: '/dashboard/saved', icon: Heart },
    { name: 'Compare', href: '/compare', icon: Activity },
    { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
    { name: 'Documents', href: '/dashboard/documents', icon: FileText },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { name: 'Support', href: '/dashboard/support', icon: HelpCircle },
  ];

  const profileItems = [
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden lg:flex flex-col fixed inset-y-0 z-10 pt-16 mt-px">
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1 mb-8">
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Main Menu</p>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-1">
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Preferences</p>
            {profileItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5 text-red-500" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Topbar inside dashboard */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-6 sticky top-16 z-10">
          <h2 className="text-xl font-bold text-slate-900 hidden sm:block">
            {navItems.find(i => i.href === pathname)?.name || profileItems.find(i => i.href === pathname)?.name || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>
            <div className="flex items-center gap-3 border-l pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">Anmol Doe</p>
                <p className="text-xs text-slate-500 mt-1">Student</p>
              </div>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=student" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
