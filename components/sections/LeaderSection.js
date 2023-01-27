import React from "react"

export default function LeaderSection() {
  return (
    <div className=" my-40 space-y-20">
      {/* 1 */}
      <Item />
      {/* 2 */}
      <Item />
      {/* 3 */}
      <Item />
    </div>
  )
}

function Item({ image, name, role, children }) {
  return (
    <div className="flex w-3/4 mx-auto items-center gap-20">
      {/* image */}
      <div className="w-1/4">
        {/* dummy image */}
        <div className="w-60 h-60 bg-gray-400 border-primary border-8 rounded-full"></div>
        <div className="text-center py-4">
          <h3 className="text-xl font-bold">John Doe</h3>
          <h5 className="text-secondary font-semibold">CTO</h5>
        </div>
      </div>
      <div className="space-y-2">
        <li>
          Regional Agri & Fishery Council Chairman for MIMAROPA - International
          Trade and Export Sector
        </li>
        <li>
          Founded several community based driven business models Project
          Zacchaeus, with initial grants of $500,000 dollars from USAID and
          Government
        </li>
        <li>
          Focal person of BIMP-EAGA EAST ASEAN Growth Area Projects in Palawan
          and facilitated National government and Economic cooperation projects
        </li>
        <li>
          Thought leader in community based agri-entrpreneurship & design
          thinking strategies for community based business models as seen in TV
          and social media platforms
        </li>
      </div>
    </div>
  )
}
