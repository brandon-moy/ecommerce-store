"use client";

import { useState, useEffect } from "react";

import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return (
    <div className="font-semi-bold">{formatter.format(Number(value))}</div>
  );
};

export default Currency;
