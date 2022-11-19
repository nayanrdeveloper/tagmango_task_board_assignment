import Image from "next/image";
import React from "react";
import { Calendar } from "react-calendar";
import HireSection from "./HireSection/HireSection";

function RightSection() {
  return (
    <div className="p-2 bg-white w-80">
      <div className="flex flex-col gap-5 rounded-md p-3">
        <HireSection />
        <Calendar />
      </div>
    </div>
  );
}

export default RightSection;
