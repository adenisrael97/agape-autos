"use client";


import React, { useState } from "react";
import ToggleButtons from "@/components/SellTrade/ToggleButtons";
import SellForm from "@/components/SellTrade/SellForm";
import TradeForm from "@/components/SellTrade/TradeForm";

export default function SellTradePage() {
  const [active, setActive] = useState("sell");
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 py-12 px-2">
      <div className="max-w-2xl mx-auto">
        <ToggleButtons active={active} setActive={setActive} />
        <div className="transition-all duration-500">
          {active === "sell" ? <SellForm /> : <TradeForm />}
        </div>
      </div>
    </div>
  );
}