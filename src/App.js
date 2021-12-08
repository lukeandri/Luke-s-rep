import "./App.css";
import React from "react";
//brings in the tasks we made from task.js
import Tasks from "./components/Tasks";
//brings in the header we made 
import Header from "./components/Header";
import { useState } from 'react';
import TaskEdit from "./components/taskEdit";
function App() {
  const[showTaskedit, showEdit]=useState(false);
  
  const onSaveTask =( te, date, priority, status )=>{
    console.log("saving tasks");
    myNewTaskObj = {
      te: {te} ,
      date: {date} , 
      priority: {priority}, 
      status: {status}
    }
    setTasks([myNewTaskObj, ...tasks
      // {te: te, date: date, id: Date.now(), complete: task.status, priority: priority},
      
    ])
  };
  const completeTask = (cTask) => {
   
  const cloneTask =tasks;
  cloneTask.map(task => {
    if(task.id==cTask.id){
      tasks.status="completed"; 
    }
  })
    console.log("completing task");
    setTasks(
     cloneTask
    )};
  const [tasks, setTasks] = useState([
    // { te: "Do hoomework", id: 1, date: "01/01/2021", status: "completed", priority: 1},
    // { te: "do chores", id: 2, date: "02/02/2022",status:"tbd", priority: 2 },
  ]);
  return (
    <div className="App">
      <Header></Header>

      <div className="main area">
        <div className="right side">
          <button
            className="newbtn"
            onClick={() => showEdit(!showTaskedit)}>
            {!showTaskedit && "New"}
            {showTaskedit && "-"}
          </button>
        </div>
        {showTaskedit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} completeTask={completeTask}></Tasks>
      </div>
    </div>
  );
}

export default App;