import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 flex flex-col">
        <Header />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome to Beedo OMS
          </p>

          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-gray-500">Today's Orders</h2>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-gray-500">Pending</h2>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-gray-500">Shipped</h2>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-gray-500">Delivered</h2>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}