"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  Printer,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "لوحة التحكم",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "الطلبات",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "المنتجات",
    href: "/products",
    icon: Package,
  },
  {
    title: "الشحن",
    href: "/shipping",
    icon: Truck,
  },
  {
    title: "مركز الطباعة",
    href: "/print",
    icon: Printer,
  },
  {
    title: "الإعدادات",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 border-l border-slate-800 text-white">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold">
         طلباتي
        </h1>
      </div>

      <nav className="p-4 space-y-2 text-right">
        {menuItems.map((item) => {
          const Icon = item.icon;

         return (
  <Link
    key={item.title}
    href={item.href}
    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
  >
    <Icon size={20} />
    <span>{item.title}</span>
  </Link>
);
        })}
      </nav>
    </aside>
  );
}