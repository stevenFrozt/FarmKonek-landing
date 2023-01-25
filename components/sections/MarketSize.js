import Image from "next/image"
import React from "react"
import LineDescription from "../ui/LineDescription"
export default function MarketSize() {
  return (
    <div className="h-screen relative flex">
      {/* background Image */}
      <div className="relative w-full h-[70%] mt-32">
        <Image
          src={"/images/marketsize.png"}
          fill="cover"
          className="object-contain"
        />
      </div>
      {/* Title */}
      <div className="absolute top-16 left-10 ml-8">
        <h1 className="text-5xl font-bold text-primary">MARKET SIZE</h1>
        <p className="w-2/4 mt-4 text-lg text-gray-500">
          Our Market: Philippines and Global Industry players in need of raw
          materials and food supply.
        </p>
      </div>
      {/* description */}
      <LineDescription>
        Total Production Capacity in Terms of Food Value Attributable to Small
        Holder Farmers.
      </LineDescription>
    </div>
  )
}
