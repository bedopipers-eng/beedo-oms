type Props = {
  status: string;
};

export default function OrderStatus({ status }: Props) {
  const statusMap: Record<string, string> = {
    Pending: "قيد التجهيز",
    Shipped: "تم الشحن",
    Delivered: "تم التسليم",
    Cancelled: "ملغي",
  };

  const colors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {statusMap[status] ?? status}
    </span>
  );
}