import React from 'react'
import TableStat from './TableStat'
import "../globals.css"
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <div className="  z-30  mt-2 mx-4 flex flex-wrap justify-center gap-2   text-slate-900">
      
      <div className="flex flex-col py-8 justify-between md:w-[48%] ">
      <div className="md:text-5xl rounded-2xl font-bold  p-4 "><div>🩺  Your Health, Your Control  Access records, track appointments, manage meds, and stay</div>
      
      </div>
      <div className="flex  justify-end"><Link href="trends" className="text-white border-black border-x-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl flex border-y-3 text-sm p-3 px-4 shadow-blue-900 shadow-2xl font-medium items-center hover:cursor-pointer mt-2">Visualize Trends <MdArrowOutward className="text-lg ml-1"/></Link></div> 
      </div>
      
      
      <div className="md:w-[48%] w-full  gap-2 rounded-2xl p-4 ">
     <TableStat/>
      </div>
    </div>
  )
}

export default HeroSection
