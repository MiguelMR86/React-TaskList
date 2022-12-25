import React from 'react'
import TaskList from './commponents/TaskList';
import TaskForm from './commponents/TaskForm' 

function App() {
  return (
    <>
      <div className='title'><h1>Tasks List</h1></div>
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App