import Image from "next/image"
import React from "react"
import TitleLine from "../ui/TitleLine"

export default function PartnerSection() {
  return (
    <div className="h-screen w-full">
      <div>
        <TitleLine>OUR PARTNERS</TitleLine>
      </div>
      {/* PARTNERS */}
      <div>
        <div className="flex justify-center pt-36 gap-4">
          <ImagePartner url="/images/partners/1.png" />
          <ImagePartner url="/images/partners/2.png" />
          <ImagePartner url="/images/partners/3.png" />
          <ImagePartner url="/images/partners/4.png" />
          <ImagePartner url="/images/partners/5.png" />
        </div>
        <div className="flex justify-center pt-10 gap-4">
          <ImagePartner url="/images/partners/6.png" />
          <ImagePartner url="/images/partners/7.png" />
        </div>
      </div>
    </div>
  )
}

function ImagePartner({ url }) {
  return (
    <div className="relative w-52 h-52">
      <Image src={url} alt="partner" fill className="object-contain absolute" />
    </div>
  )
}
