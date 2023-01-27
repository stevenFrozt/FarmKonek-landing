import Image from "next/image"
import React from "react"
import ImageSlider from "../ui/ImageSlider"

export default function Products() {
  return (
    <div>
      {/* 1st PRODUCT */}
      <Product1 />
      {/* 2rd Product */}
      <Product3 />
      {/* 3rd Product */}
      <Product4 />
      {/* 4rd Product */}
      <Product2 />
    </div>
  )
}

function Product1() {
  return (
    <div className="h-screen w-full bg-[url('/images/backgroundGreen1.jpg')] bg-cover bg-bottom flex bg-fixed">
      {/* LAPTOP IMAGE */}
      <div className="w-1/2  flex items-center justify-center">
        <div className="relative w-[40rem] h-[40rem] ">
          <Image
            src="/images/laptop.png"
            fill
            alt="laptop"
            sizes="800px"
            className="object-contain absolute"
          />
        </div>
      </div>

      {/* DETAILS */}
      <div className="w-1/2  flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold text-white">
          Farm Leaders and Fulfillment Center CRM
        </h1>
        <button className="rounded-full bg-primary text-white py-4 px-20 text-xl font-semibold self-start mt-10">
          Learn More
        </button>
      </div>
    </div>
  )
}

function Product2() {
  return (
    <ImageSlider>
      <div className="h-screen w-full bg-[url('/images/backgroundBrown1.jpg')] bg-cover bg-bottom flex ">
        {/* LAPTOP IMAGE */}
        <div className="w-1/2  flex items-center justify-center">
          <div className="relative   w-[40rem] h-[40rem]">
            <Image
              src="/images/phoneYellow.png"
              fill
              alt="laptop"
              sizes="800px"
              className="object-contain absolute "
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/2  flex flex-col items-start justify-center">
          <h1 className="text-6xl font-semibold text-white w-96">
            Farmer Leader App
          </h1>
          <h3 className="py-4 text-white text-2xl w-3/5">
            M&E for Capacity Building of Clustered Producers
          </h3>
          <button className="rounded-full bg-primary text-white py-4 px-20 text-xl font-semibold self-start mt-4">
            Learn More
          </button>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="h-screen w-full bg-[url('/images/backgroundBrown1.jpg')] bg-cover bg-bottom flex ">
        {/* LAPTOP IMAGE */}
        <div className="w-1/2  flex items-end justify-center overflow-hidden">
          <div className="relative w-[40rem] h-[40rem] ">
            <Image
              src="/images/phoneZoom2Brown.png"
              fill
              alt="laptop"
              sizes="800px"
              className="object-contain absolute transform translate-y-3"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/2  flex flex-col items-start justify-center">
          <h1 className="text-5xl font-semibold text-white">
            Clustering and Inventory Management
          </h1>
        </div>
      </div>
      {/* ITEM 3 */}
      <div className="h-screen w-full bg-[url('/images/backgroundBrown1.jpg')] bg-cover bg-bottom flex ">
        {/* LAPTOP IMAGE */}
        <div className="w-1/2  flex items-end justify-center overflow-hidden scale-125 translate-x-40">
          <div className="relative w-[60rem] h-[60rem] ">
            <Image
              src="/images/phoneZoom3.png"
              fill
              alt="laptop"
              sizes="800px"
              className="object-contain absolute transform translate-y-40  "
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/4  flex flex-col items-start justify-center ml-60">
          <h1 className="text-5xl font-semibold text-white">
            Clustered reporting system and live orders support
          </h1>
        </div>
      </div>
    </ImageSlider>
  )
}

function Product3() {
  return (
    <ImageSlider color="brown">
      <div className="h-screen w-full bg-[url('/images/backgroundYellow1.jpg')] bg-cover bg-bottom flex ">
        {/* LAPTOP IMAGE */}
        <div className="w-1/2  flex items-center justify-center">
          <div className="relative   w-[40rem] h-[40rem]">
            <Image
              src="/images/phoneGreen.png"
              fill
              alt="laptop"
              sizes="800px"
              className="object-contain absolute "
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/2  flex flex-col items-start justify-center">
          <h1 className="text-6xl font-semibold text-white w-96">
            Farmer Technician App
          </h1>
          <h3 className="py-4 text-white text-2xl w-3/5">
            Cluster and Management Assignment and M&E
          </h3>
          <button className="rounded-full bg-tertiary text-white py-4 px-20 text-xl font-semibold self-start mt-4">
            Learn More
          </button>
        </div>
      </div>
      {/* 2nd Item */}
      <div className="h-screen w-full bg-[url('/images/backgroundYellow1.jpg')] bg-cover bg-bottom flex ">
        {/* LAPTOP IMAGE */}
        <div className="w-1/2  flex items-end justify-center overflow-hidden">
          <div className="relative w-[40rem] h-[40rem] transform translate-y-3">
            <Image
              src="/images/phoneZoom2Yellow.png"
              fill
              alt="laptop"
              sizes="800px"
              className="object-contain absolute"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/2  flex flex-col items-start justify-center">
          <h1 className="text-6xl font-semibold text-white w-3/4">
            Cluster Reporting System and support
          </h1>
        </div>
      </div>
    </ImageSlider>
  )
}

function Product4() {
  return (
    <div className="h-screen w-full bg-[url('/images/backgroundGreen1.jpg')] bg-cover bg-bottom flex bg-fixed">
      {/* LAPTOP IMAGE */}
      <div className="w-1/2  flex items-center justify-center">
        <div className="relative w-[40rem] h-[40rem] ">
          <Image
            src="/images/laptop.png"
            fill
            alt="laptop"
            sizes="800px"
            className="object-contain absolute"
          />
        </div>
      </div>

      {/* DETAILS */}
      <div className="w-1/2  flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold text-white">
          B2B Management and Quotation System
        </h1>
        <button className="rounded-full bg-primary text-white py-4 px-20 text-xl font-semibold self-start mt-10">
          Learn More
        </button>
      </div>
    </div>
  )
}
