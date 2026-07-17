import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import OrdersTable from "@/components/orders/OrdersTable";
import OrdersFilters from "@/components/orders/OrdersFilters";
import StatsCards from "@/components/dashboard/StatsCards";
export default function OrdersPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 flex flex-col">
        <Header />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold">
  الطلبات
</h1>

<p className="text-slate-500">
  إدارة جميع طلبات Shopify
</p>
            </div>

            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
                استيراد الطلبات
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl">
                إنشاء شحنة
              </button>
            </div>
          </div>

          <StatsCards />

<OrdersFilters />

<OrdersTable />

        </div>
      </section>
    </main>
  );
}