"use client"
import React from "react";
import Link from "next/link";
import { ReportData } from "../data/fhirdata";
import DetailsModal from "./DetailsModal";
import { useState } from "react";

function Recents() {
  const [isOpen, setIsOpen] = useState(false);
  const [selecteddate,setSelecteddate]=useState(null);
  const [selectedlabel,setSelectedlabel]=useState(null);
  const [selecteddoctorname,setSelecteddoctorname]=useState(null);
  const [selecteddetails,setSelecteddetails]=useState(null);
  const [selectedtitle,setSelectedtitle]=useState(null);

  const openModal = (title,date,label,details,doctorName) => {
    setSelectedtitle(title);
    setSelecteddate(date);
    setSelecteddetails(details);
    setSelecteddoctorname(doctorName);
    setSelectedlabel(label);
    setIsOpen(true);
  };


  return (
    <div className=" mx-8 bg-white shadow-2xl border border-gray-200 rounded-2xl mt-2 p-2 text-slate-900 h-80 mb-2 ">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recent Health Records</h1>
        <Link href="#" className="mr-4 underline">View All</Link>
      </div>

      <div className="overflow-y-auto h-[80%] mt-2">
        {ReportData.entry
          .filter((entry) => entry.resource.resourceType === "Observation")
          .map((observation, index) => {
            const doctorName = observation.resource.performer[0]?.display || "Unknown Doctor";
            const categoryCode = observation.resource.category[0]?.coding[0]?.code;
            const labelType = categoryCode === "exam" ? "Physical" : "Lab";
            const labelColor = labelType === "Physical" ? "text-red-500" : "text-blue-500";

            const title = observation.resource.code?.text || "No Title";
            const date = observation.resource.effectiveDateTime
              ? observation.resource.effectiveDateTime.split("T")[0]
              : "No Date";
            const details=observation.resource.details;
            return (
              <div key={index} className="border rounded-2xl h-20 flex items-center px-4 justify-between mt-2 bg-white/10 shadow-sm">
          
                <div className="w-1/3">
                  <div className="font-semibold">{doctorName}</div>
                  <div className="text-sm text-gray-600">{date}</div>
                </div>

                <div className="w-1/3 text-center font-semibold">
                  {title}
                </div>

                <div className="w-1/3 flex gap-4 items-center justify-end">
                  <div className={`bg-gray-200 ${labelColor} font-medium text-center rounded-2xl w-24 h-8 pt-1 `}>
                    {labelType}
                  </div>
                  <button onClick={()=>{openModal(title,date,labelType,details,doctorName)}} className="border-x-4 border-y-2 rounded-2xl px-4 py-1">View</button>
                </div>
                <DetailsModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={selectedtitle} date={selecteddate} doctorname={selecteddoctorname} label={selectedlabel} details={selecteddetails}/>
              </div>
            );
          })}
      </div>

    </div>
  );
}

export default Recents;
