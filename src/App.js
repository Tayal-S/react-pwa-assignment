import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import './App.css'
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Students } from './components/Students';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Form />
      <hr />
      
    </>
  );
}

export default App;

// const db = new Dexie('PWAdb')
// db.version(1).stores({
//   students: '++id,taskName,dueDate,assignedTo',
// })

// export function getAllStudentsFromDB() {
//   return db.students.toArray().then((data) => {
//       return data
//   })
// }

// export function addStudentToDB(taskName, dueDate, assignedTo) {
//   console.log(taskName, dueDate, assignedTo);
//   db.students.put({ taskName, dueDate, assignedTo })
//       .then(() => true)
//       .catch(err => {
//           alert("Ouch... " + err)
//       })
// }




// async function queryByName(name) {
//   if (name === undefined) return 0
//   return await db.students
//       .filter((student) => {
//           return student.name === name
//       })
//       .toArray()
// }
// // @ts-ignore
// const { todos } = db

// const App = () => {
//   const allItems = useLiveQuery(() => todos.toArray(), [])

  
//   const completedItems = allItems?.filter((item) => item.completed === true)

//   const addTask = async (event) => {
//     event.preventDefault()
//     const taskid = document.querySelector('#sid')
//     const taskname = document.querySelector('#name')
//     const taskdate= document.querySelector('#date')
//     const taskassigned = document.querySelector('#assignedto')
//     //console.log('..>', taskField.value)
    
//     await todos.add({
//       id:taskid['value'],
//       taskName: taskname['value'],
//       dueDate: taskdate['value'],
//       assignedTo:taskassigned['value']
//     })

//     //taskField['value'] = ''
//   }

//   const deleteTask = async (id) => todos.delete(id)

//   const toggleStatus = async (id, event) => {
//     await todos.update(id, { completed: !!event.target.checked })
//   }

//   return (
//     <div className="container">
//       <h3 className="teal-text center-align">Mcda 5550- PWA Assignment</h3>
//       <form onSubmit={addTask}>
//             <label for="id">Student Id</label>
//             <input type="text" id="sid" name="sid" placeholder="Axxx"
//             />
            
//             <label for="taskName">Task Name</label>
//             <input type="text" id="name" name="name" placeholder="Task Name"/>

//             <label for="date">Due Date</label>
//             <input type="text" id="date" name="date" placeholder="Due Date for the task"/>
            
//             <label for="assignedTo">Assigned To</label>
//             <input type="text" id="assignedto" name="assigned" placeholder="Assigned To.."/>

//             <input type="submit" value="Add Student"/>
//       </form>
//       </div>
    

//   )
// }

// export default App
