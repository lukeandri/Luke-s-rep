//this is what will add all the date we see on the screen, the labels and the information we input will be displayed from here
import "../App.css";
function Task({ task, completeTask, editTask }) {
  console.log(task);
  return (
    <div className="task-container" key={task.id}>
      <h4>
        <b>Description:</b>{" "}
      </h4>
      <p>{task.te}</p>
      <img
        className="pic"
        src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
        alt="calendar"
      />
      <p> {task.date} </p>
      <p>
        <b>priority:</b> {task.priority}
      </p>
      <p>
        <b>class:</b> {task.subject}
      </p>

      <button className="common-button" onClick={() => editTask(task)}>
        Edit
      </button>
      <button className="common-button" onClick={() => completeTask(task)}>
        {task.status === "completed" && "Done ✅"}
        {task.status !== "completed" && "Click to complete ⬜"}
      </button>
    </div>
  );
}

export default Task;
