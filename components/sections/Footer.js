import React from "react"

export default function Footer() {
  return (
    <div>
      <div className="flex">
        {/* logo */}
        <div>FarmKonek</div>
        {/* Items */}
        <div className="flex gap-4">
          {/* column 1 */}
          <div>
            <h4>Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
          {/* column 2*/}
          <div>
            <h4>Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
          {/* column 3 */}
          <div>
            <h4>Fundraise for</h4>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
            <p>Medical</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        {/* terms */}
        <div className="flex gap-4">
          <h4>Terms</h4>
          <h4>Privacy</h4>
          <h4>Legal</h4>
          <h4>Accessiblity Statement</h4>
        </div>
        {/* Socials */}
        <div>
          {/* Icons */}
          <div></div>
          {/* Download */}
          <div></div>
        </div>
      </div>
    </div>
  )
}
