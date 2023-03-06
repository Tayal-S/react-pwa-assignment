import { db } from './db'

export function getAllStudentsFromDB() {
  return db.students.toArray().then((data) => {
      return data
  })
}

export function addStudentToDB(taskName, dueDate, assignedTo) {
  console.log(taskName, dueDate, assignedTo);
  db.students.put({ taskName, dueDate, assignedTo })
      .then(() => true)
      .catch(err => {
          alert("Ouch... " + err)
      })
}