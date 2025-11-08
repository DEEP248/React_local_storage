import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex justify-between items-center">
        <h3 className="bg-black/30 text-xs px-3 py-1 rounded-full text-white uppercase tracking-wide">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-100 opacity-80">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-100 opacity-90">{data.taskDescription}</p>

      <div className="mt-6">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-xl transition duration-300 shadow-md hover:shadow-lg hover:scale-105">
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask