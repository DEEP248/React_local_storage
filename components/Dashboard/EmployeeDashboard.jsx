import React from 'react'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-10 py-8'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
