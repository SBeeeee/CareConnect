"use client"
import React from 'react'
import Link from 'next/link'
import { MdOutlineFileUpload } from "react-icons/md";

function Navbar() {
  return (
    <div className=" shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-200 h-12 flex justify-between items-center">
      <Link href="contact">Logo</Link>
      <Link href="">Health Reports</Link>
      <Link href="">Share <MdOutlineFileUpload /></Link>
      <Link href="">Signup/Login</Link>
    </div>
  )
}

export default Navbar
