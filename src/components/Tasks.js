//creates our actual tasks  
import Task from "./Task";
function Tasks(props) {
  console.log(props);
  return (
    <div>
       { props.tasks.map((task) => {
          return <Task key={task.id} task={task} completeTask={props.completeTask}/>
          
       })}
   </div> 
  );
}

export default Tasks;
