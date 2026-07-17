import {
  ShoppingBag,
  Truck,
  CheckCircle,
  RotateCcw,
} from "lucide-react";

const cards = [
  {
    title: "إجمالي الطلبات",
    value: 1250,
    icon: ShoppingBag,
    color: "bg-blue-500",
  },
  {
    title: "جاهزة للشحن",
    value: 56,
    icon: Truck,
    color: "bg-orange-500",
  },
  {
    title: "تم التسليم",
    value: 890,
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    title: "مرتجع",
    value: 13,
    icon: RotateCcw,
    color: "bg-red-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-slate-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
            >
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
}