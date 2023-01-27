import Image from "next/image"
import React from "react"

export default function Groupie() {
  return (
    <div className="h-screen mb-40">
      <div className="w-5/6 mx-auto flex gap-20">
        <div className="relative  w-1/2 h-80 ">
          <Image
            src="/images/companyGroupie.png"
            alt="groupi"
            fill
            className="object-contain absolute bg-white p-2 shadow-lg"
          />
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="flex items-center">
            <div className="w-8 rounded-full self-stretch bg-primary mr-4" />
            <p>
              The Farm Konek Team is officially a grantee of a multi country
              expansion of its platform services to serve the Brunei, Indonesia,
              Malaysia, Philippines East ASEAN Sub Regions championing the
              agriculture market of these countries under the Agribusiness
              Pillar. Funded by Republic of Korea
            </p>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="w-5/6 mx-auto flex gap-20 mt-20">
        <div className="relative  w-1/2 h-80  ">
          <Image
            src="/images/companyGroupie.png"
            alt="groupi"
            fill
            className="object-contain absolute bg-white p-2 shadow-lg"
          />
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="flex items-center">
            <div className="w-8 rounded-full self-stretch bg-primary mr-4" />
            <p>
              The partnership with the community using the system together with
              National Government and Local Government Units, the company
              acquired within one year a <b>$90,000 dollars'</b> worth of
              support from development fundings and grants and became one of the
              stewards 40 Million Pesos worth of infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
