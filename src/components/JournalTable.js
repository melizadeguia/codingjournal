import React from "react";
import "../styles/JournalTable.scss"


const JournalTable = (props) => {

    return (<div className="journal-container">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Journal Entry</th>
                </tr>
            </thead>
            <tbody>
                {props.entry.map((item) => (
                    <tr key={item.id}>
                        <td>{item.dateRef}</td>
                        <td>{item.messageRef}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>

    </div>);
};



export default JournalTable