"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  order: any;
};

export default function OrderDetailsModal({
  open,
  onClose,
  order,
}: Props) {
  console.log("open =", open);
console.log("order =", order);

if (!open || !order) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[700px] p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            تفاصيل الطلب
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">
              رقم الطلب
            </p>

            <p className="font-bold">
              {order.id}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              العميل
            </p>

            <p className="font-bold">
              {order.customer}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              الهاتف
            </p>

            <p>{order.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">
              المدينة
            </p>

            <p>{order.city}</p>
          </div>

          <div>
            <p className="text-gray-500">
              العنوان
            </p>

            <p>{order.address}</p>
          </div>

          <div>
            <p className="text-gray-500">
              المنتج
            </p>

            <p>{order.product}</p>
          </div>

          <div>
            <p className="text-gray-500">
              شركة الشحن
            </p>

            <p>{order.shipping}</p>
          </div>

          <div>
            <p className="text-gray-500">
              رقم التتبع
            </p>

            <p>{order.tracking}</p>
          </div>

        </div>

      </div>

    </div>
  );
}