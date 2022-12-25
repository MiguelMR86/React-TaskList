import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    // All the states of the task: Title & Description
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // CreateTask from Context
    const { createTask } = useContext(TaskContext)

    // Form Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title != "" && description != "") {
            createTask({
                title,
                description
            });
        }

        // Clears the text of the form
        setTitle("")
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit} className="formClass">
            <h1 className='title'>Add New Task</h1>
            <input
                placeholder=' Write the title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus />
            <textarea
                placeholder=' Describe it'
                onChange={(e) => setDescription(e.target.value)}
                value={description}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm