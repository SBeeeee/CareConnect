import React from 'react'
import TableStat from './TableStat'


function HeroSection() {
  return (
    <div className="  z-30  mt-2 mx-4 flex flex-wrap justify-center gap-2 text-slate-900">
      <div className="md:text-5xl rounded-2xl font-bold md:w-[48%] p-4 ">🩺  Your Health, Your Control  Access records, track appointments, manage meds, and stay informed all in one place.</div>
      <div className="md:w-[48%] w-full flex justify-center gap-2 rounded-2xl p-4 ">
     <TableStat/>
      </div>
    </div>
  )
}

export default HeroSection
