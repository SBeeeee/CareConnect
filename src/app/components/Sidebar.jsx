'use client'
import React from 'react'
import { useState } from 'react';

function Sidebar() {
const [Open,setOpen]=useState(false);

  return (
    <div className={`${Open?"w-64":"w-12"} flex-shrink-0 text-gray-800 bg-[#2C2C2C] min-h-screen transition-all duration-300`}>
      <div className="flex justify-between items-center p-4 " onClick={()=>{setOpen(!Open)}}>
        <h1 className={`text-lg font-medium ${Open?"block":"hidden"}`}>CareConnect</h1>
        <button >
        {Open ? "◀" : "▶"}
        </button>
      </div>
      <ul className="flex flex-col space-y-4 p-4 overflow-hidden">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Profile</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Logout</li>
      </ul>
    </div>
  )
}

export default Sidebar
