import { useState } from 'react'

import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Escalade",
        day: 'Lundi 19 avril',
        reminder: true
    },
    {
        id: 2,
        text: "Médecin",
        day: 'Mardi 20 avril',
        reminder: true
    },
    {
        id: 3,
        text: "Entretien",
        day: ' Jeudi 21 avril',
        reminder: true
    }
  ])

  // Add task :
  const addTask = (task) => {
    const id = Math.floor(Math.random()* 10000) +1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task :
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder :
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No more task in your do to list'}
    </div>
  );
}

export default App;