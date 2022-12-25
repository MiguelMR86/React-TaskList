import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

// Initializaing the context
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    
    // Initializing tasks state
    const [tasks, setTasks] = useState([])

    // First execution, Introducing data
    useEffect(() => {
        setTasks(data)
    },[])

    // Create task
    function createTask(task){
        setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
        }])
    }
    
    // Delete task
    function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    // Returns the data
    return (
        // Comment: Provider => Provide information for its child components
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}