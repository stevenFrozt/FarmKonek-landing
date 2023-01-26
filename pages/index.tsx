import React from "react"
import MarketSize from "../components/sections/MarketSize"
import QouteSection from "../components/sections/QouteSection"
import Footer from "../components/sections/Footer"
import DownloadApp from "../components/sections/DownloadApp"
import CommunityLeaf from "../components/sections/CommunityLeaf"
import MilestoneSection from "../components/sections/MilestoneSection"
import Nav from "../components/ui/Nav"
import Carousel from "../components/ui/Carousel"
import TitleLine from "../components/ui/TitleLine"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative h-[200vh] ">
      {/* Nav */}
      <Nav />
      {/* Landing Section */}

      {/* Community Section */}
      <CommunityLeaf />

      {/* Download The App Section */}
      <DownloadApp />

      {/* Product Section */}
      <Carousel />

      {/* Problem Section */}

      {/* Solution Section */}

      {/* Traction Milestone Section */}
      <MilestoneSection />
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
