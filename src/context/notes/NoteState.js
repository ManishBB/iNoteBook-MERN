import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name"  : "Manish",
        "class" : "15b"
    }

    const [state, setstate] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setstate({
                "name" : "Manya",
                "class" : "7c"
            })
        }, 1000);
    }

    return(
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;