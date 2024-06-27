import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Position } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function PaymentCountry({ data }) {
  const { currency, country, countryCode } = data;

  return ( 
    <div className="flex items-center rounded-lg bg-gray-300 border-2 border-gray-500 p-2 gap-2 w-40">
      <div>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </div>
      <div className="flex-grow">
        <div>
          <p >{country}</p>
          <p className="text-xs">{currency}</p>
        </div>
      </div>
      <CustomHandle type="source" position={Position.Right}/>
      <CustomHandle type="target" position={Position.Left}/>
    </div>
  );
}
