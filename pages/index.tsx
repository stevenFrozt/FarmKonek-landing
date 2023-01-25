import React from "react"
import MarketSize from "../components/sections/MarketSize"
import QouteSection from "../components/sections/QouteSection"
import Footer from "../components/sections/Footer"
import Nav from "../components/ui/Nav"
import Carousel from "../components/ui/Carousel"
import TitleLine from "../components/ui/TitleLine"
export default function Home() {
  return (
    <div className="relative h-[200vh] ">
      {/* Nav */}
      <Nav />
      {/* Landing Section */}
      {/* Community Section */}
      {/* Download The App Section */}
      {/* Product Section */}
      <Carousel />

      {/* Problem Section */}
      {/* Solution Section */}
      {/* Traction Milestone Section */}
      {/* Global Vision*/}
      {/* Market size */}
      <MarketSize />
      {/* CEOs Section*/}
      {/* Qoute Section*/}
      <QouteSection />
      {/* Partners Section*/}
      <TitleLine>OUR PARTNERS</TitleLine>

      {/* Footer Section*/}
      <Footer />
    </div>
  )
}
