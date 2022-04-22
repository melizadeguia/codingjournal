import React, { useRef, useState } from "react";
import TaskTable from "./TaskTable";

const taskInfo = (localStorage.getItem("taskDetails")) ? JSON.parse(localStorage.getItem("taskDetails")) : [];

const TaskInput = () => {

    const [taskList, setTaskList] = useState(taskInfo)

    console.log(taskList);

    const dateInput = useRef(null);
    const taskInput = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();

        const taskObject = {
            id: Date.now(),
            dateRef: dateInput?.current?.value,
            taskRef: taskInput?.current?.value
        }
        console.log(taskObject);
        setTaskList([...taskList, taskObject]);
        localStorage.setItem("taskDetails", JSON.stringify(taskList))

        console.log(taskList)

        dateInput.current.value = "";
        taskInput.current.value = "";
    };


    return (
        <div className="task-container">
            <h2>Tasks</h2>
            <form onSubmit={formSubmit}>
                <label>Date:</label>
                <input type="date" name="date" ref={dateInput}/>
                <br />
                <textarea name="message" cols="10" rows="2" placeholder="Write Task" ref={taskInput}></textarea>
                <br />
                <input type="submit" name="submit" value="Add Task" className="button" />
            </form>
            <TaskTable tasks={taskList}/>
        </div>
    )
}

export default TaskInput