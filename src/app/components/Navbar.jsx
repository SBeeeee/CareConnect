"use client"
import React from 'react'
import Link from 'next/link'
import { MdOutlineFileUpload } from "react-icons/md";

function Navbar() {
  return (
    <div className=" px-4 shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-200 h-12 flex justify-between items-center sticky z-30 top-0">
      <Link href="/" className="text-xl font-bold">CareConnect</Link>
      <div className="flex gap-4 items-center">
      <Link href="" className="text-lg">Health Reports</Link>
      <Link href="" className="text-lg">Appointments</Link>
      <Link href="" className="flex items-center text-lg ">Share <MdOutlineFileUpload className="mt-1 text-xl" /></Link>
      </div>
      <Link href="" className="text-lg"> Signup/Login</Link>
    </div>
  )
}

export default Navbar
