'use client'
import React from 'react'

function TableStat() {
  const stats = [
    { metric: 'Total Data Shared', value: '2.5 GB' },
    { metric: 'Active Shares', value: '1,024' },
    { metric: 'Past Shares', value: '3,245' },
    { metric: 'Total Users Sharing', value: '857' },
  ];

  return (
    <div className="bg-white  text-black shadow-2xl rounded-2xl p-8 w-full">
      <h2 className="text-3xl font-bold mb-4 text-center">📊 Data Sharing Stats</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
        
          <tbody>
            {stats.map((item, index) => (
              <tr 
                key={index} 
                className="rounded-xl transition-all duration-300 shadow-md"
              >
                <td className="p-4 rounded-l-xl font-medium">{item.metric}</td>
                <td className="p-4 rounded-r-xl text-right text-lg font-semibold text-gray-900">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableStat;
