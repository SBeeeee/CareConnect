import React from 'react'
import TableStat from './TableStat'
import "../globals.css"

function HeroSection() {
  return (
    <div className="  z-30  mt-2 mx-4 flex flex-wrap justify-center gap-2  text-slate-900">
      <div className="md:text-5xl rounded-2xl font-bold md:w-[48%] p-4 "><div>🩺  Your Health, Your Control  Access records, track appointments, manage meds, and stay</div>
       <div className="flex justify-end"><button className="text-white border-black border-x-4 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl  border-y-2 text-sm p-0.5 px-4 font-medium w-36 hover:cursor-pointer mt-2">Book Appointment</button></div> 
      </div>
      
      <div className="md:w-[48%] w-full  gap-2 rounded-2xl p-4 ">
     <TableStat/>
      </div>
    </div>
  )
}

export default HeroSection
