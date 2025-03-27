import React from 'react'

const display = [
    {
      title: "Seamless Health Data Interoperability",
      description: "Enable smooth and secure exchange of patient data across healthcare systems using FHIR standards."
    },
    {
      title: "Secure Patient Access & Authorization",
      description: "Provide patients with full control over who can access their health records with OAuth2-based authentication."
    },
    {
      title: "EHR Integration with SMART Apps",
      description: "Connect electronic health records (EHR) with third-party applications for enhanced healthcare management."
    },
    {
      title: "Real-Time Health Analytics & Insights",
      description: "Leverage AI-driven analytics to monitor patient vitals, predict risks, and improve healthcare outcomes."
    }
  ];
  
function Cards() {
   
      
  return (
    <div>
        <h1 className="text-4xl font-bold text-slate-900 text-center mt-4 mb-2">Services We Provide</h1>
<div className="flex justify-evenly">
        {display.map((element,index)=>(
            <div key={index} className="border-4 w-60 rounded-4xl h-44 shadow-2xl border-black ml-4 p-2 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
                    <div className="font-semibold text-lg text-center">
                      {element.title}
                    </div>
                <div className="text-center font-extralight">{element.description}</div>    
            </div>
        ))}
    
    </div>
    </div>
  )
}

export default Cards
