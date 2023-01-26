import Image from "next/image"
import React from "react"

export default function Nav() {
  return (
    <div className=" top-0 w-full bg-white z-50 flex justify-between px-20 ">
      {/* LOGO */}
      <div className="relative w-28 h-28">
        <Image
          src={"/images/logo.png"}
          fill="cover"
          className="absolute object-contain"
        />
      </div>
      {/* Items */}
      <div className="flex items-center gap-10 font-semibold">
        <h3>Blog</h3>
        <h3>Problem</h3>
        <h3>Product</h3>
        <h3>Community</h3>
        <h3>Traction and Milestone</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}
