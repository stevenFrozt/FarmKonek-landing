import React from "react"

export default function Button({ children, className = "", type = "default" }) {
  const styled = {
    default: `bg-secondary text-white rounded-lg px-8 py-3 m-4 font-medium ${className}`,
    outlined: `border-[3px] border-secondary text-secondary rounded-lg px-8 py-3 m-4 font-medium ${className}`
  }

  return <button className={styled[type]}>{children}</button>
}
