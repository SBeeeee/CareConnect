import React from 'react'

function DetailsModal({ isOpen, onClose}) {
  if (!isOpen) return null;
  return (
   
    <div className="fixed inset-0 z-40  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] max-h-[60vh] overflow-y-auto">
      <button 
          onClick={onClose} 
          className=" text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        
      </div>
      </div>
  )
}

export default DetailsModal
