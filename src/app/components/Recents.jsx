import React from 'react'
import Link from 'next/link'

function Recents() {
  return (
    <div className="bg-amber-200 mx-8 rounded-2xl mt-2 p-2 text-slate-900 h-80 mb-2">
   
    <div className="flex justify-between items-center"><h1 className="text-2xl font-bold ">Recent Health Records</h1>
    <Link href="" className="mr-4 underline h-">View All</Link>
    </div>
    <div className="border-1 rounded-2xl h-16 flex items-center px-2 justify-between">
    <div>
    <div>John Doe</div>
    <div>Doctor Name:</div>
    </div>
<div className="flex gap-4 items-center"><div className="bg-gray-200 text-red-500 font-medium text-center rounded-2xl  w-24 h-8 pt-1">Phyical</div>
<button className="border-x-4 border-y-2 rounded-2xl px-2">View Details</button></div>
    </div>

    </div>
  )
}

export default Recents
