import { useState } from "react"

export default function NewTask({ onAdd }) {


    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }


    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button onClick={handleClick} className="bg-stone-700 text-stone-50 hover:bg-stone-900 px-6 py-2 rounded-md text-sm">Add Task </button>
        </div>
    )
}