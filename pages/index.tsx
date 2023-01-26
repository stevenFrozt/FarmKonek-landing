import React from "react"
import MarketSize from "../components/sections/MarketSize"
import QouteSection from "../components/sections/QouteSection"
import Footer from "../components/sections/Footer"
import DownloadApp from "../components/sections/DownloadApp"
import CommunityLeaf from "../components/sections/CommunityLeaf"
import MilestoneSection from "../components/sections/MilestoneSection"
import GlobalVission from "../components/sections/GlobalVission"
import Problem from "../components/sections/Problem"
import Solution from "../components/sections/Solution"
import Groupie from "../components/sections/Groupie"
import PartnerSection from "../components/sections/PartnerSection"
import Nav from "../components/ui/Nav"
import Carousel from "../components/ui/Carousel"
import Button from "../components/ui/Button"
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
      <div id="problem"></div>
      <Problem />
      {/* Solution Section */}
      <Solution />
      {/* Traction Milestone Section */}
      <div id="milestone"></div>
      <MilestoneSection />
      {/* Groupie */}
      <Groupie />
      {/* Global Vision*/}
      <GlobalVission />
      {/* Market size */}
      <MarketSize />
      {/* CEOs Section*/}
      {/* Qoute Section*/}
      <QouteSection />
      {/* Partners Section*/}
      <PartnerSection />
      {/* Footer Section*/}
      <Footer />
    </div>
  )
}
