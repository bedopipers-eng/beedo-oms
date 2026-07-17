"use client";

import { orders } from "./DummyData";
import OrderStatus from "./OrderStatus";

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr className="text-left">
            <th className="p-4">
              <input type="checkbox" />
            </th>

            <th className="p-4">Order</th>

            <th className="p-4">Customer</th>

            <th className="p-4">Phone</th>

            <th className="p-4">City</th>

            <th className="p-4">Product</th>

            <th className="p-4 text-center">
              Items
            </th>

            <th className="p-4 text-center">
              Payment
            </th>

            <th className="p-4 text-center">
              Shipping
            </th>

            <th className="p-4 text-center">
              Tracking
            </th>

            <th className="p-4 text-center">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <input type="checkbox" />
              </td>

              <td className="p-4 font-semibold">
                {order.id}
              </td>

              <td className="p-4">
                {order.customer}
              </td>

              <td className="p-4">
                {order.phone}
              </td>

              <td className="p-4">
                {order.city}
              </td>

              <td className="p-4">
                {order.product}
              </td>

              <td className="p-4 text-center">
                {order.items}
              </td>

              <td className="p-4 text-center">
                {order.payment}
              </td>

              <td className="p-4 text-center">
                {order.shipping}
              </td>

              <td className="p-4 text-center">
                {order.tracking}
              </td>

              <td className="p-4 text-center">
                <OrderStatus status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}