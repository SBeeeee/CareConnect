'use client'
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings, IoIosLogOut } from "react-icons/io";

function Sidebar() {
  const [Open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!Open)} className={`${Open ? "w-64" : "w-16"} flex-shrink-0  text-white bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] transition-all duration-300 shadow-lg h-screen`}>
    
      <div className="flex justify-between items-center p-4">
        {Open && <h1 className="text-lg font-medium">CareConnect</h1>}
        <button  className="text-white">
          {Open ? "◀" : "▶"}
        </button>
      </div>

      <ul className="flex flex-col space-y-4 p-4">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <div className="flex items-center gap-2">
            <MdDashboard className="text-xl min-w-[24px]" />
            <span className={`${Open ? "block" : "hidden"}`}>Dashboard</span>
          </div>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <div className="flex items-center gap-2">
            <CgProfile className="text-xl min-w-[24px]" />
            <span className={`${Open ? "block" : "hidden"}`}>Profile</span>
          </div>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <div className="flex items-center gap-2">
            <IoIosSettings className="text-xl min-w-[24px]" />
            <span className={`${Open ? "block" : "hidden"}`}>Settings</span>
          </div>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <div className="flex items-center gap-2">
            <IoIosLogOut className="text-xl min-w-[24px]" />
            <span className={`${Open ? "block" : "hidden"}`}>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
