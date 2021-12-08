function Task({ task, completeTask, priority}) {
    return (
    
      <div className="card text-left" key={task.id}>
        <div className="row">
          <div className="col-10">
            <h4>Description: {task.desc}</h4>
            <div className="task-meta">
                <p>{task.te}</p>
              <img
                src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                alt="calendar"
              />
              <h4>Date: {task.date}</h4>
            </div>
            <h4>priority: {task.priority}</h4>
          </div>
  
          <div className="col-2 is-center">
          <button className="checkBtn" onClick={() => completeTask(task)}>Click to complete
          {task.status =="completed" && "✅"}
  {!task.status =="completed" && "⬜"}
  
              
            </button>
           
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Task;
  