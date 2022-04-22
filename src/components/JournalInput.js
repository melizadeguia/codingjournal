import React, { useRef ,useState } from "react";
import JournalTable from "./JournalTable";

const journalInfo = (localStorage.getItem("entryDetails"))? JSON.parse(localStorage.getItem("entryDetails")):[];

const JournalInput = () => {

    const [entryList,setEntryList] = useState(journalInfo)
    console.log(entryList)

    const dateInput = useRef(null);
    const messageInput = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();

        const entryObject = {
            id: Date.now(),
            dateRef: dateInput?.current?.value,
            messageRef: messageInput?.current?.value
        }

        console.log(entryObject);
        setEntryList([...entryList, entryObject]);
        localStorage.setItem("contactDetails", JSON.stringify(entryList));

        console.log(entryList)

        dateInput.current.value = "";
        messageInput.current.value = "";
    }

    return (
        <div className="journal-container">
       <h2>Thoughts for the Day</h2>
       <form onSubmit={formSubmit}>
           <label>Date:</label>
           <input type="date" name="date" ref={dateInput}/>
           <br/>
           <textarea name="message" cols="10" rows="5" placeholder="Write your thougths here" ref={messageInput}></textarea>
           <br/>
           <input type="submit" name="submit" value="Save Entry" className="button"/>
       </form>
       <JournalTable entry={entryList}/>
       </div>
    )
}

export default JournalInput