import React from "react";


const NoteList = ({notes}) => {
    return(
        <div>
            {
                //very important iterate over the notes !!! otherwise the list on screen is not updated
                notes.map((note) => note)
            }
        </div>
    )
}

export default NoteList;