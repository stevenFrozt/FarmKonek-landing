import Image from "next/image"
import Link from "next/link"
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
          alt="logo"
        />
      </div>
      {/* Items */}
      <div className="flex items-center gap-10 font-semibold">
        <h3>Blog</h3>
        <Link href="#product">
          <h3>Product</h3>
        </Link>
        <Link href="#problem">
          <h3>Problem</h3>
        </Link>
        <Link href="#solution">
          <h3>Solution</h3>
        </Link>
        <Link href="#milestone">
          <h3>Traction and Milestone</h3>
        </Link>
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}
