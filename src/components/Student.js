export const Student = ({ taskName, dueDate, assignedTo }) => {
    return (
        <div className="student">
            <h1>{taskName}</h1>
            <h2>{dueDate}</h2>
            <p>{assignedTo}</p>
        </div>
    )
  }