import Image from "next/image"
import React from "react"

export default function CommunityLeaf() {
  return (
    <div className="relative w-full h-2/5">
      <Image
        src="/images/everyCommunity.png"
        fill
        alt="community"
        className="object-contain absolute"
        priority
        unoptimized
      />
    </div>
  )
}
