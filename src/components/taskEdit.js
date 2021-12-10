//this file is mainly used for the inputs and setting the values in our task
import { useState, useEffect } from "react";

function TaskEdit({ currentEditableTask, onSaveTask }) {
  const [te, setTe] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [subject, setSubject] = useState("");

  const saveTask = () => {
    let edited = currentEditableTask.te !== undefined;
    console.log(currentEditableTask);

    console.log("TaskEdit.js SaveTask. Edited: " + edited);

    onSaveTask(te, date, priority, subject, edited);

    setTe("");
    setDate("");
    setPriority("");
    setSubject("");
  };

  // useEffect is called anytime the edit button is clicked
  //took some time to figure this one out but it is the equivilant to a constructor in my head
  useEffect(() => {
    if (currentEditableTask.te !== undefined) {
      setTe(currentEditableTask.te);
      setDate(currentEditableTask.date);
      setSubject(currentEditableTask.subject);
      setPriority(currentEditableTask.priority);
    }

    console.log("Task Edit loaded/rendered");
  }, [currentEditableTask]);

  const handleFromSubmission = (event) => {
    event.preventDefault();
  };

  return (
    //below are all the fields and types to handle a submit from the inputs we use for each of the fields
    <div className="task">
      <h3>Add an item</h3>
      <form onSubmit={(event) => handleFromSubmission(event)}>
        <label>Description</label>
        <input
          type="text"
          name="desc"
          id="te"
          value={te}
          placeholder="Enter description"
          onChange={(e) => setTe(e.target.value)}
        />
        <label>Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          placeholder="Enter date due"
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Priority</label>
        <input
          type="text"
          name="priority"
          id="priority"
          placeholder="Enter priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <label>Class</label>
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Enter subject/topic"
          onChange={(e) => setSubject(e.target.value)}
        />
        <div className="saveSide">
          <button className="menu-button" onClick={() => saveTask()}>
            Save{console.log("it works")}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskEdit;
