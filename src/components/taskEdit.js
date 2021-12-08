import { useState } from "react";
function TaskEdit(props){
    const [te, setTe]= useState("");
    const [date, setDate]=useState("");
    const [priority, setPriority]=useState("");
    const saveTask =(e)=>{
        e.preventDefault();
        saveTask({te: te, date: date, priority: priority})
        setTe("");
        setDate("");
    };
    const handleFromSubmission = (event) =>{
        event.preventDefault();
    }
    return(
        <div className ="task"> 
        <h3>Add an item</h3>
        <form onSubmit = {(event) => handleFromSubmission(event)}>
        <label htmlFor="te">Description</label>
        <input
        type="text"
        name="desc"
        id="te"
        value={te}
        onChange={(e)=>setTe(e.target.value)}
        />
        <label htmlfor="date">Date</label>
        <input
        type="text"
        name="date"
        id="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />
        <label htmlfor="priority">Priority</label>
        <input
        type="text"
        name="priority"
        id="priority"
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
/>
        <div className="saveSide">
            <button className = "saveButton" onClick={() => props.onSaveTask(te,date ,priority )}>Save</button>
    
        </div>
        </form>
        </div>
    )
}
export default TaskEdit;