import React from "react";
import { Handle, Position } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function PaymentInit({ data }) {
  const { amount } = data;

  return (
    <div className="border-2 border-purple-600 bg-white">
      <div className="bg-purple-900 p-2">
        <p className="text-white text-sm">Payment Initialized</p>
      </div>
      <div className="p-4">
        <p className="text-blue-600 text-2xl">${amount}</p>
      </div>
      <CustomHandle type="source" position={Position.Left}/>
    </div>
  );
}
