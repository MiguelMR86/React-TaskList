import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
function TaskCard({task}) {
  
  // DeleteTask function from Context
  const { deleteTask } = useContext(TaskContext)

  // Returns a Card with a task
  return (
    <div className='card'>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
    </div>  
    )
}

export default TaskCard