import React from "react";
import "../styles/TaskTable.scss"

const TaskTable = (props) => {
    return (<div className="task-container">

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map((task)=>(
                    <tr key={task.id}>
                    <td>{task.dateRef}</td>
                    <td>{task.taskRef}</td>
                </tr>
                ))}
            </tbody>
        </table>

    </div>);
};



export default TaskTable