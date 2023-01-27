import React from "react"
import TitleLine from "../ui/TitleLine"

export default function Problem() {
  return (
    <div className=" bg-tertiary pb-40 pt-20" id="problem">
      <TitleLine color="white" className="py-10">
        Problem
      </TitleLine>
      {/* Content */}
      <div className="flex justify-evenly -mt-10">
        <CardItem number={1} title="Competency">
          Lack of consistent focus to people, strategy operations
          <p className="text-xs text-gray-300 font-normal pt-2">
            Impedes growth in production and the efficient management of farms
            and networks.
          </p>
        </CardItem>
        <CardItem number={2} title="Mapping">
          Dispersed nature of agriculture supply sources
          <p className="text-xs text-gray-300 font-normal pt-2">
            Hindrance in agricultural land's potential and human resource
            capability to recieve streamlined support or intervention.
          </p>
        </CardItem>
        <CardItem number={3} title="Market">
          Inability to consolidate efficiently and access demand
          <p className="text-xs text-gray-300 font-normal pt-2">
            Difficult for industry participants to consolidate and access them
            efficiently and improve value chain
          </p>
        </CardItem>
      </div>
    </div>
  )
}

function CardItem({ title, number, children }) {
  return (
    <div className=" w-60">
      {/* card */}
      <div className="relative w-40">
        <h1 className="text-[20rem] text-secondary transform -translate-x-24">
          {number}
        </h1>
        <div className="bg-gray-500 absolute w-60 h-80 top-20 rounded-lg shadow-xl" />
      </div>
      {/* details */}
      <div className=" flex items-stretch -mt-16">
        <div className="bg-secondary rounded-full w-4 mr-4 "></div>
        <div className="font-semibold text-white">
          <h1 className="text-primary text-2xl">{title}</h1>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
