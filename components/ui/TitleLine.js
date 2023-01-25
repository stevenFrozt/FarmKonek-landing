import React from "react"

export default function TitleLine({ children }) {
  return (
    <div className="h-max flex mx-auto w-max">
      <div className="w-4 h-auto bg-primary mr-2 rounded-lg"></div>
      <h2 className="font-semibold uppercase text-3xl text-tertiary">
        {children}
      </h2>
    </div>
  )
}
