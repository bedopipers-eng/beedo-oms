"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="ابحث عن طلب..."
          className="w-full border rounded-xl pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={34} />
          <div>
            <p className="font-semibold">Bedo</p>
            <p className="text-xs text-slate-500">مدير النظام</p>
          </div>
        </div>
      </div>
    </header>
  );
}