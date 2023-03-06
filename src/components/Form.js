import { useState, useRef } from "react"

import { addStudentToDB } from "../utils/helpers";

export const Form = () => {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const taskNameEl = useRef(null);
    const dueDateEl = useRef(null);
    const assignedToEL = useRef(null);

    const submitForm = async () => {
        await addStudentToDB(taskName,dueDate,assignedTo)
    }

    return (
        <div>
            <form>

                <label>Task Name</label>
                <input
                    ref={taskNameEl}
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Task Name..."
                />

                <label>Due Date</label>
                <input
                    ref={dueDateEl}
                    type="date"
                    id="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="DueDate"
                />

                <label>Assigned To</label>
                <input
                    ref={assignedToEL}
                    type="text"
                    id="assignedTo"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    placeholder="Assigned to"
                />

                <button onClick={() => submitForm()}>Add Task</button>
            </form>
        </div>
    )
}