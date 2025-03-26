'use client'
import React from 'react'
import { useState,useEffect } from 'react';

function Sidebar() {
const [Open,setOpen]=useState(false);



  return (
    <div className={`${Open?"w-64":"w-12"} flex-shrink-0 text-gray-800 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]  transition-all duration-300 shadow-lg`}>
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
