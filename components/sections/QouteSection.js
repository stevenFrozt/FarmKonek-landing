import React from "react"

export default function QouteSection() {
  return (
    <div className="bg-secondary text-white h-screen flex justify-center items-center my-40">
      <div className="w-2/4 text-3xl flex justify-center">
        {/* left Top Qoute */}
        <img
          src="images/qouteLeft.png"
          alt=""
          className="mix-blend-screen w-16 h-16 mx-10"
        />
        <p className="py-10">
          Do nothing out of selfish ambition or vain conceit. Rather, in
          humility value others above yourselves, not looking to your own
          interests but each of you to the interests of the others.
        </p>
        {/* Right bottom Qoute */}
        <img
          src="images/qouteRight.png"
          alt=""
          className="mix-blend-screen w-16 h-16 mx-4 self-end"
        />
      </div>
    </div>
  )
}
