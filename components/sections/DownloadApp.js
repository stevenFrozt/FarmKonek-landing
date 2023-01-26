import Image from "next/image"
import React from "react"

export default function DownloadApp() {
  return (
    <div className="flex items-center justify-center">
      {/* content */}
      <div className="w-[40%] transform scale-110">
        <h1 className="font-bold text-4xl w-[289px]">
          Download the FarmKonek App
        </h1>
        <p className="text-sm w-2/3 py-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis risus nec ante gravida eleifend. Morbi vulputate orci ut
          vestibulum molestie. Pellentesque
        </p>
        {/* Download Buttons */}
        <div>
          <h3 className="text-2xl font-medium py-2">Available in</h3>
          <div className="flex gap-4">
            {/* Apple Store */}
            <button className="flex bg-[#000000] items-center text-white px-5 py-2 rounded-lg gap-4 hover:scale-95 transition-all duration-100">
              <img src="/images/appleWhite.png" alt="apple" className="h-10" />
              <div>
                <p className="text-sm">Download on the</p>
                <h3 className="text-2xl font-semibold">App Store</h3>
              </div>
            </button>
            {/* Google play */}
            <button className="flex bg-[#000000] items-center text-white px-5 py-2 rounded-lg gap-4 hover:scale-95 transition-all duration-100">
              <img src="/images/googleplay1.png" alt="apple" className="h-10" />
              <div>
                <p className="text-xs uppercase text-left">Get it on</p>
                <h3 className="text-2xl font-semibold">Google Play</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-[33rem] h-[33rem] ">
        <Image
          src="/images/downloadApp.png"
          fill
          className="object-contain absolute"
        />
      </div>
    </div>
  )
}
