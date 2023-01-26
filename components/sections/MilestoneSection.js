import Image from "next/image"
import React from "react"
import LineDescription from "../ui/LineDescription"
import TitleLine from "../ui/TitleLine"

export default function MilestoneSection() {
  return (
    <div>
      <TitleLine>TRACTION AND MILESTONE</TitleLine>

      <div className=" h-[5591px] relative flex justify-around w-2/3 mx-auto mt-40">
        {/* first */}
        <div className="w-full flex flex-col items-end z-50">
          <Items className="mr-auto mt-40">
            Farm Konek continues to have an ongoing facilitation for a total of
            forthcoming $900,000 worth of grants and investments
          </Items>
          <Items className="mr-auto mt-40">
            2022 Farm Konek's roadshow with F2C2 for digital clustering training
            farmers engaging to 230 FCA's containing 130,000 members
            <p className="text-xs text-gray-500 py-2">
              Digital clustering workshops with Department of Agriculture
            </p>
          </Items>
        </div>
        {/* middle */}
        <div className="pr-[1px] z-50">
          <div className="w-6 h-6 bg-primary rounded-full mt-5"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full mt-[14.1rem]"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full mt-[23.5rem]"></div>
        </div>
        <Image
          src="/images/line.svg"
          fill="cover"
          className="absolute object-contain mt-5 z-0"
        />
        {/* end */}
        <div className="flex flex-col w-full z-50">
          <h1 className="text-primary text-6xl font-semibold  pl-10">
            PRESENT
          </h1>
          <Items className="ml-auto mt-[28rem]">
            20 Million worth of community based funding support through PZC and
            Farm Konek Ecosystem
          </Items>
        </div>
      </div>
    </div>
  )
}

function Items({ className = "", children }) {
  return (
    <div className={`h-60 w-3/4 ${className} `}>
      {/* Image */}
      <div className="w-full h-40 bg-gray-400 rounded-md"></div>
      {/* description */}
      <div className=" flex items-stretch my-4">
        <div className="bg-primary text-primary rounded-full w-6 mr-4 "></div>
        <p className="font-semibold">{children}</p>
      </div>
    </div>
  )
}
