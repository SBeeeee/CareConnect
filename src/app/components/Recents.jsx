import React from 'react'
import Link from 'next/link'
import { ReportData } from "../data/fhirdata";

function Recents() {
  return (
    <div className="bg-amber-200 mx-8 rounded-2xl mt-2 p-2 text-slate-900 h-80 mb-2 ">

      <div className="flex justify-between items-center"><h1 className="text-2xl font-bold ">Recent Health Records</h1>
        <Link href="" className="mr-4 underline h-">View All</Link>
      </div>
      <div className="overflow-y-auto h-[80%] mt-2">
        {ReportData.entry
          .filter((entry) => entry.resource.resourceType === "Observation")
          .map((observation, index) => {
            const patientRef = observation.resource.subject.reference.split('/')[1];
            const patient = ReportData.entry.find(
              (entry) => entry.resource.resourceType === "Patient" && entry.resource.id === patientRef
            );

            const patientName = patient
              ? `${patient.resource.name[0].given.join(' ')} ${patient.resource.name[0].family}`
              : "Unknown Patient";

            const doctorName = observation.resource.performer[0]?.display || "Unknown Doctor";
            const categoryCode = observation.resource.category[0]?.coding[0]?.code;
            const labelType = categoryCode === "exam" ? "Physical" : "Lab";
            const labelColor = labelType === "Physical" ? "text-red-500" : "text-blue-500";

            return (

              <div key={index} className="border-1 rounded-2xl h-16 flex items-center px-2 justify-between mt-2 ">
                <div>
                  <div>{patientName}</div>
                  <div>Doctor Name: {doctorName}</div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className={`bg-gray-200 ${labelColor} font-medium text-center rounded-2xl w-24 h-8 pt-1`}>
                    {labelType}
                  </div>
                  <button className="border-x-4 border-y-2 rounded-2xl px-2">View Details</button>
                </div>
              </div>

            );
          })}
      </div>

    </div>
  )
}

export default Recents
