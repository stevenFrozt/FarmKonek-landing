import Image from "next/image"
import React from "react"
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai"

export default function Footer() {
  return (
    <div className="w-full border-2">
      <div className="flex w-5/6 mx-auto justify-evenly items-center py-10 ">
        {/* logo */}
        <div className="w-1/4 relative h-28">
          <Image
            src="/images/logo.png"
            fill
            alt="logo"
            className="object-contain absolute "
          />
        </div>
        {/* Items */}
        <div className="flex gap-40 w-3/4 items-center  justify-center">
          {/* column 1 */}
          <div className="space-y-4">
            <h4 className="font-bold">Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
          {/* column 2*/}
          <div className="space-y-4">
            <h4 className="font-bold">Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
          {/* column 3 */}
          <div className="space-y-4">
            <h4 className="font-bold">Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr />
      <div className=" py-6 flex items-center justify-between w-3/4  mx-auto">
        {/* terms */}
        <div className="flex gap-4">
          <h4>Terms</h4>
          <h4>Privacy</h4>
          <h4>Legal</h4>
          <h4>Accessiblity Statement</h4>
        </div>
        {/* Socials */}
        <div className="">
          {/* Icons */}
          <div className="flex gap-4 items-center py-4 ">
            <AiFillFacebook />
            <AiFillYoutube />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
          {/* Download */}
          <div className="flex items-center transform  gap-4 scale-75 transform -translate-x-10 ">
            {/* Apple Store */}
            <button className="flex bg-[#000000] items-center text-white px-4 py-1 rounded-lg gap-4  transition-all duration-100 ">
              <img src="/images/appleWhite.png" alt="apple" className="h-5" />
              <div>
                <p className="text-xs">Download on the</p>
                <h3 className="text-sm font-semibold text-left">App Store</h3>
              </div>
            </button>
            {/* Google play */}
            <button className="flex bg-[#000000] items-center text-white px-4 py-1 rounded-lg gap-4  transition-all duration-100 ">
              <img src="/images/googleplay1.png" alt="apple" className="h-4" />
              <div>
                <p className="text-xs uppercase text-left">Get it on</p>
                <h3 className="text-sm font-semibold">Google Play</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
