import React from "react"

export default function LineDescription({ children }) {
  return (
    <div className="absolute right-16 h-16  flex items-center top-16 w-1/4 text-lg ">
      <div className="w-3 h-full rounded-full bg-primary mr-4"></div>
      <h3>{children}</h3>
    </div>
  )
}
