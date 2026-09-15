'use client';

import { useState } from 'react';
import { Send, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const conversations = [
  {
    id: 1,
    name: 'UrbanNest Manager',
    avatar: 'https://i.pravatar.cc/40?u=manager1',
    initials: 'UM',
    lastMessage: 'Yes, you can bring your own chair.',
    time: '2h ago',
    unread: 2,
    messages: [
      { from: 'them', text: 'Welcome! Your booking is confirmed.', time: '9:00 AM' },
      { from: 'me',   text: 'Thank you! Quick question — can I bring my own chair?', time: '9:45 AM' },
      { from: 'them', text: 'Yes, you can bring your own chair.', time: '11:30 AM' },
    ],
  },
  {
    id: 2,
    name: 'GreenLeaf Support',
    avatar: 'https://i.pravatar.cc/40?u=manager2',
    initials: 'GL',
    lastMessage: 'Your move-in kit will be ready.',
    time: 'Yesterday',
    unread: 0,
    messages: [
      { from: 'them', text: 'Hi! How can I help you today?', time: '10:00 AM' },
      { from: 'me',   text: 'Is the move-in kit included?', time: '10:05 AM' },
      { from: 'them', text: 'Your move-in kit will be ready.', time: '10:15 AM' },
    ],
  },
];

export default function MessagesPage() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [input, setInput] = useState('');

  const active = conversations.find(c => c.id === activeId)!;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
        <p className="text-slate-500 text-sm mt-1">Chat with hostel managers</p>
      </div>

      <div className="flex h-[520px] rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
        {/* Sidebar */}
        <div className="w-72 border-r flex flex-col shrink-0">
          <div className="p-3 border-b">
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input placeholder="Search..." className="bg-transparent text-sm outline-none flex-1 text-slate-700" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left ${activeId === c.id ? 'bg-primary/5' : ''}`}
              >
                <Avatar className="w-9 h-9 shrink-0">
                  <AvatarImage src={c.avatar} />
                  <AvatarFallback>{c.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-semibold truncate ${activeId === c.id ? 'text-primary' : 'text-slate-900'}`}>{c.name}</p>
                    <span className="text-xs text-slate-400 shrink-0 ml-2">{c.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center shrink-0 mt-0.5">{c.unread}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="px-5 py-3 border-b flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={active.avatar} />
              <AvatarFallback>{active.initials}</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-slate-900 text-sm">{active.name}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {active.messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  msg.from === 'me'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                  <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-primary-foreground/70' : 'text-slate-400'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t px-4 py-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-slate-100 rounded-lg px-4 py-2.5 outline-none text-slate-800 placeholder:text-slate-400"
            />
            <Button size="icon" className="shrink-0" disabled={!input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
