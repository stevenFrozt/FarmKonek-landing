import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai"
import { BsCircleFill } from "react-icons/bs"
import Image from "next/image"
export default function ImageSlider({ children, color = "" }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={false}
        showDots={true}
        customRightArrow={<CustomRightArrow color={color} />}
        customLeftArrow={<CustomLeftArrow color={color} />}
        customDot={<CustomDot color={color} />}
      >
        {children}
      </Carousel>
    </div>
  )
}

const CustomRightArrow = ({ onClick, color, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className={`${
        color ? "bg-tertiary" : "bg-primary"
      } z-10 absolute right-16 h-12 w-12 rounded-full flex items-center justify-center text-3xl pl-1 text-white shadow-xl`}
    >
      <AiOutlineCaretRight />
    </button>
  )
}

const CustomLeftArrow = ({ onClick, color, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className={`${
        color ? "bg-tertiary" : "bg-primary"
      } z-10 absolute left-16 h-12 w-12 rounded-full flex items-center justify-center text-3xl pr-1 text-white shadow-xl`}
    >
      <AiOutlineCaretLeft />
    </button>
  )
}

const CustomDot = ({ onClick, color, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest
  const carouselItems = [0, 1, 2]

  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <div className=" text-sm w-8 justify-center pb-8">
      <button
        className={
          color
            ? active
              ? "text-secondary"
              : "text-tertiary"
            : active
            ? "text-primary"
            : "text-gray-400/70"
        }
        onClick={() => onClick()}
      >
        <BsCircleFill />
      </button>
    </div>
  )
}
