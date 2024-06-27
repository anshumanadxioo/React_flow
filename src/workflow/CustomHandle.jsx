import React from "react";
import { Handle } from "reactflow";

export default function CustomHandle({type,position}) {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: "white",
        border: "2px solid black",
      }}
      type={type} position={position}
    />
  );
}