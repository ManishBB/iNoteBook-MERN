import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "613901ae093fbffe2265adb6",
          "user": "6138fe87093fbffe2265adae",
          "title": "Second Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-08T18:32:14.282Z",
          "__v": 0
        },
        {
          "_id": "613901ba093fbffe2265adba",
          "user": "6138fe87093fbffe2265adae",
          "title": "Fourth Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-08T18:32:26.254Z",
          "__v": 0
        },
        {
          "_id": "613901bf093fbffe2265adbc",
          "user": "6138fe87093fbffe2265adae",
          "title": "Fifth Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-08T18:32:31.327Z",
          "__v": 0
        },
        {
          "_id": "613ca2994b403151d3beb069",
          "user": "6138fe87093fbffe2265adae",
          "title": "Fifth Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-11T12:35:37.080Z",
          "__v": 0
        },
        {
          "_id": "613ca29a4b403151d3beb06b",
          "user": "6138fe87093fbffe2265adae",
          "title": "Fifth Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-11T12:35:38.064Z",
          "__v": 0
        },
        {
          "_id": "613ca29a4b403151d3beb06d",
          "user": "6138fe87093fbffe2265adae",
          "title": "Fifth Note",
          "description": "Lorem Ipsum baar baar likhoo!",
          "tag": "general",
          "date": "2021-09-11T12:35:38.688Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;