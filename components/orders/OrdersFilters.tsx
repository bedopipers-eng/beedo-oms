"use client";

import { Search } from "lucide-react";

export default function OrdersFilters() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 mb-6">
      <div className="grid grid-cols-5 gap-4">

        <div className="relative col-span-2">
          <Search
            className="absolute left-3 top-3.5 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="ابحث برقم الطلب أو اسم العميل أو رقم الهاتف..."
            className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select className="border rounded-xl px-4">
          <option>كل المحافظات</option>
<option>القاهرة</option>
<option>الجيزة</option>
<option>الإسكندرية</option>
        </select>

        <select className="border rounded-xl px-4">
          <option>كل المنتجات</option>
<option>Luna Necklace</option>
<option>Rose Gold Ring</option>
<option>Heart Bracelet</option>
        </select>

        <select className="border rounded-xl px-4">
          <option>كل الحالات</option>
<option>قيد التجهيز</option>
<option>تم الشحن</option>
<option>تم التسليم</option>
        </select>

      </div>
    </div>
  );
}