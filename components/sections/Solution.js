import Image from "next/image"
import React from "react"
import TitleLine from "../ui/TitleLine"

export default function Solution() {
  return (
    <div className=" bg-white mt-10 ">
      <TitleLine className="py-10">Solution</TitleLine>
      {/* content */}
      <div>
        <Items title="Farmer Accelerator Program" number={1}>
          <div>
            <li>Digital Clustering System</li>
            <li>Technical and Governance Education</li>
          </div>
          <p className="text-gray-500 pl-6 text-sm mt-4">
            Digitally clustered farmers receiving trainings for organic buyers
            and assigning clustered lands for specific clientele.
          </p>
          <div className="h-2 mt-10 flex gap-4 pl-6">
            <div className="h-full w-40 rounded-full bg-primary" />
            <div className="h-full w-2 rounded-full bg-primary" />
          </div>
        </Items>
        <Items title="Clustered Profiling" number={2}>
          <div>
            <li>Multiple Financing Options Access</li>
            <li>Insurance Access</li>
            <li>Fixed Income Opportunities</li>
          </div>
          <p className="text-gray-500 pl-6 text-sm mt-4">
            Cluster leaders facilitating inputs support and recieving packaged
            information for government intervention and subisides.
          </p>
          <div className="h-2 mt-10 flex gap-4 pl-6 justify-end">
            <div className="h-full w-2 rounded-full bg-primary" />
            <div className="h-full w-32 rounded-full bg-primary" />
          </div>
        </Items>
        <Items title="Consolidated Match Making Engine" number={3}>
          <div>
            <li>Multiple Financing Options Access</li>
            <li>Insurance Access</li>
            <li>Fixed Income Opportunities</li>
          </div>
          <p className="text-gray-500 pl-6 text-sm mt-4">
            Cluster leaders facilitating inputs support and recieving packaged
            information for government intervention and subisides.
          </p>
          <div className="h-2 mt-10 flex gap-4 pl-6">
            <div className="h-full w-10 rounded-full bg-primary" />
            <div className="h-full w-40 rounded-full bg-primary" />
            <div className="h-full w-2 rounded-full bg-primary" />
          </div>
        </Items>
      </div>
    </div>
  )
}

function Items({ number, title, children }) {
  return (
    <div className="flex w-9/12 mx-auto  h-96  transform translate-x-10 mt-20">
      <div className="relative w-1/2">
        <h1 className="text-[28rem] text-gray-200 font-bold z-0 transform -translate-x-10 -translate-y-36">
          {number}
        </h1>
        <div className="absolute top-20  left-40 z-50">
          <h3 className="font-semibold text-3xl pb-4">{title}</h3>
          <div>{children}</div>
        </div>
      </div>
      {/* Image */}
      <div className=" w-1/2 flex items-center justify-center">
        <div className="relative -skew-x-6 hover:skew-x-0 transition-transform duration-200 first-div">
          <div className="bg-primary w-80 h-80  rounded-3xl  transform translate-x-4 hover:translate-x-0 transition-transform duration-200 next-div"></div>
          <div className="bg-gray-400 w-80 h-80  rounded-3xl  transition-transform duration-200 absolute top-0 overflow-hidden">
            <Image
              src="/images/testImage.png"
              fill
              alt="img"
              className="object-cover absolute"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
