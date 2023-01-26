import Image from "next/image"
import React from "react"
import TitleLine from "../ui/TitleLine"

export default function GlobalVission() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <TitleLine>Global vission</TitleLine>
      <div className="flex items-center w-2/3 mx-auto  mt-10 gap-40">
        {/* image */}
        <div className="relative w-[30rem] h-[30rem]">
          <Image
            src="/images/globe.png"
            fill
            className="absolute object-contain"
            alt="globe"
          />
        </div>
        {/* content */}
        <div className="w-1/2">
          {/* title */}
          <div className="flex items-center">
            <div className="w-4 h-28 bg-primary rounded-full mr-4 " />
            <h2 className="font-bold text-4xl">
              International Cluster Farming Association for Small Farm Holders
            </h2>
          </div>
          {/* columns */}
          <div className="flex gap-12 text-2xl py-4">
            {/* 1st col */}
            <div>
              <li>Philippines</li>
              <li>Cambodia</li>
              <li>Laos</li>
              <li>Malaysia</li>
            </div>
            {/* 2nd col */}

            <div>
              <li>Myanmar</li>
              <li>Indonesia</li>
              <li>Vietnam</li>
              <li>Thailand</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
