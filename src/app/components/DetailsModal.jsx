import React from 'react'

function DetailsModal({ isOpen, onClose,title,date,doctorname,label,details}) {
  if (!isOpen) return null;
  return (
   
    <div className="fixed inset-0 z-40  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] max-h-[60vh] overflow-y-auto">
        <div className="flex justify-between "><button onClick={onClose} className=" text-gray-600 hover:text-gray-900">✖</button>
        <div className="text-xl text-center  font-bold">{title}</div>
        <div className="">{date}</div>
        </div>
        <div className="text-lg font-bold">
          Doctor Name:<span className="font-medium">{doctorname}</span>
        </div>
     <div className="text-lg font-bold"> Type :
        <span className={`bg-gray-200 ${label==="Physical"?"text-red-500" : "text-blue-500"} font-medium text-center rounded-2xl w-24 h-8 pt-1 px-2 py-1`}>{label}</span>
     </div>
     <div className="text-lg font-bold">
      Report Of The Test:<span className="font-medium"> {details}</span>
     </div>

      </div>
      </div>
  ) 
}

export default DetailsModal
