import React from "react";

const Note = ({text, state, topic, id, deleteFromList}) => {
    let note = {
        text: text,
        state: state,
        topic: topic,
        id: id
    }

    const deleteItem = () => {
        deleteFromList(note.id);
    }

    return(
        <div className="flex items-center justify-center">
            <p className="mh4">{note.text}</p>
            <p className="mh4 dark-pink">{note.topic}</p>
            <p className="mh4 dark-red">{note.state}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>


        // <div className="flex items-center justify-center">
        //     <div className="item mh4">{note.text} //</div>
        //     <div className="item mh4">
        //         {note.topic}
        //     </div>
        //     <div className="item mh4">
        //         {note.state}
        //     </div>
        //     <div className="button mh4">
        //         <button onClick={deleteItem}>Delete</button>
        //     </div>
        // </div>
    )
}

export default Note;