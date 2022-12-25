import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
function TaskList() {

  // Use the data from Context
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <div className='listTask'>
        <h1>No tasks yet</h1>
      </div>

    )
  }

  // Returns the list of tasks
  return (
    <div className='listTask'>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList