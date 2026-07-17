"use client";
import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Printer,
  Trash2,
} from "lucide-react";

type Props = {
  order: any;
  onView: (order: any) => void;
};

export default function OrderActions({ order, onView }: Props) {
  
  return (
  <>
    <DropdownMenu>
    <DropdownMenuTrigger
  className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition"
>
  <button type="button">
    <MoreHorizontal size={18} />
  </button>
</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
       <DropdownMenuItem
  onClick={() => onView(order)}
>
  <Eye className="mr-2 h-4 w-4" />
  عرض الطلب
</DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          تعديل
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Printer className="mr-2 h-4 w-4" />
          طباعة
        </DropdownMenuItem>

        <DropdownMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    
}