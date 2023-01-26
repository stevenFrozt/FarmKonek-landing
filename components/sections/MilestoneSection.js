import Image from "next/image"
import React from "react"
import LineDescription from "../ui/LineDescription"
import TitleLine from "../ui/TitleLine"

export default function MilestoneSection() {
  return (
    <div className="mb-60">
      <TitleLine>TRACTION AND MILESTONE</TitleLine>

      <div className=" h-[5591px] relative flex justify-around w-2/3 mx-auto mt-40">
        {/* first */}
        <div className="w-full flex flex-col items-end z-50">
          <Items className="mr-auto mt-40">
            Farm Konek continues to have an ongoing facilitation for a total of
            forthcoming $900,000 worth of grants and investments
          </Items>
          <Items className="mr-auto mt-[19rem]">
            2022 Farm Konek's roadshow with F2C2 for digital clustering training
            farmers engaging to 230 FCA's containing 130,000 members
            <p className="text-xs text-gray-500 py-2">
              Digital clustering workshops with Department of Agriculture
            </p>
          </Items>
          <h3 className=" mt-[14rem] pr-10 text-2xl font-semibold uppercase text-[#D4D1D0]">
            June
          </h3>
          <Items className="mr-auto mt-[15rem]">
            2022 March More communities are engaged growing into 300 engaged and
            partner farmers
            <p className="text-xs text-gray-500 py-2">
              FK founders engaged with farmer's community engaged in producing
              white cassava and introduced capacity building for small farmers
              as an assiciation
            </p>
          </Items>
          <h3 className=" mt-[24.6rem] pr-10 text-2xl font-semibold uppercase text-[#D4D1D0]">
            january
          </h3>
          <h1 className="text-primary text-8xl pr-10  font-semibold  mt-[11rem]">
            2022
          </h1>
          <Items className="mr-auto mt-[24rem]">
            2021 Farm Konek had a traction from locals and gain support from LGU
            and business guidance from AIM and officially launched
            <p className="text-xs text-gray-500 py-2">
              LGU and DA partnered with Farm Konek for operating 40,000,000
              funded facility
            </p>
          </Items>
          <Items className="mr-auto mt-[24rem]">
            2021 Meeting with Cabinet Secretary of DA for partnership
            <p className="text-xs text-gray-500 py-2">
              Secretary of Department of Agriculture with Mayor of Puerto
              Princesa City
            </p>
          </Items>
          <h1 className="text-primary text-8xl pr-10  font-semibold  mt-[23rem]">
            2021
          </h1>
          <h3 className=" mt-[14.5rem] pr-10 text-2xl font-semibold uppercase text-[#D4D1D0]">
            December
          </h3>
          <Items className="mr-auto mt-[17rem]">
            2020 Developing partnerships with City Agriculture Office of PPPS
            and did Facebook marketing
            <p className="text-xs text-gray-500 py-2">
              The team partnered with City Agriculture Office in doing marketing
              of LGU organized associations
            </p>
          </Items>
          <Items className="mr-auto mt-[17rem]">
            2019 Livelihood Development
            <p className="text-xs text-gray-500 py-2">
              FK founders engaged with farmer's community engaged in producing
              white cassava and introduced capacity building for small farmers
              as an assiciation
            </p>
          </Items>
        </div>
        {/* middle */}
        <div className="pr-[1px] z-50">
          <div className="w-6 h-6 bg-primary rounded-full mt-5"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[14.1rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[14.5rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[20.5rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[23.5rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[29.8rem]"></div>
          <div className="w-6 h-6 bg-primary rounded-full mt-[14rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17.5rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[14rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17.2rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17.1rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17.2rem]"></div>
          <div className="w-6 h-6 bg-primary rounded-full mt-[14.8rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[23.2rem]"></div>
          <div className="w-6 h-6 bg-primary rounded-full mt-[14.8rem]"></div>
          <div className="w-6 h-6 bg-[#D4D1D0] rounded-full mt-[17.2rem]"></div>
          <div className="w-6 h-6 bg-tertiary rounded-full mt-[17rem]"></div>
        </div>
        <Image
          src="/images/line.svg"
          fill="cover"
          className="absolute object-contain mt-5 z-0"
        />
        {/* end */}
        <div className="flex flex-col w-full z-50">
          <h1 className="text-primary text-6xl font-semibold  pl-10">
            PRESENT
          </h1>
          <Items className="ml-auto mt-[23rem]">
            20 Million worth of community based funding support through PZC and
            Farm Konek Ecosystem
          </Items>
          <Items className="ml-auto mt-[22rem]">
            2022 June Farm Konek recieved 5 Million worth of support from
            Department of Agriculture
            <p className="text-xs text-gray-500 py-2">
              The support is a post harvest and collection efficiency from
              clustered users
            </p>
          </Items>
          <h3 className=" mt-[19.5rem] pl-10 text-2xl font-semibold uppercase text-[#D4D1D0]">
            March
          </h3>
          <Items className="ml-auto mt-[20rem]">
            2022 January relief support
            <p className="text-xs text-gray-500 py-2">
              Farm Konek through partnerships supported 350 farmers affected by
              Typhoon Odette using the data
            </p>
          </Items>
          <Items className="ml-auto mt-[20rem]">
            2021 Farm Konek inclusion in Regional Agri Fishery Council
            <p className="text-xs text-gray-500 py-2">
              FK's growing traction created integrity in mapping farmers for
              international trade and export relations
            </p>
          </Items>
          <Items className="ml-auto mt-[20rem]">
            2021 MVP using google forms and Facebook
            <p className="text-xs text-gray-500 py-2">
              FK through AIM explored the Design Thinking of the business model
              focused in clustering
            </p>
          </Items>
          <Items className="ml-auto mt-[22rem]">
            2021 FK recieved a PHP 60,000. support from DOST through PITBI
            <p className="text-xs text-gray-500 py-2">
              Grantee of PITBI and recognized by the DOST
            </p>
          </Items>
          <Items className="ml-auto mt-[22rem]">
            2020 of December first capacity building program
            <p className="text-xs text-gray-500 py-2">
              FK developed a values formation and capacity building program with
              Servant Leadership and Innovation Labs
            </p>
          </Items>
          <h1 className="text-primary text-8xl font-semibold  pl-10 mt-[29.5rem]">
            2020
          </h1>
          <h1 className="text-tertiary text-8xl font-semibold  pl-10 mt-[32rem]">
            2019
          </h1>
        </div>
      </div>
    </div>
  )
}

function Items({ className = "", children }) {
  return (
    <div className={`h-60 w-3/4 ${className} `}>
      {/* Image */}
      <div className="w-full h-40 bg-gray-400 rounded-md"></div>
      {/* description */}
      <div className=" flex items-stretch my-4">
        <div className="bg-primary text-primary rounded-full w-6 mr-4 "></div>
        <p className="font-semibold">{children}</p>
      </div>
    </div>
  )
}
