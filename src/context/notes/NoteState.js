import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    const getNotes = async()=>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOGZlODcwOTNmYmZmZTIyNjVhZGFlIn0sImlhdCI6MTYzMTEyNTEzNX0.EluGU7XoU1o0zZrSW-ei1Lbwu58ED8w9BV5NU2OwNh4'
        }
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }
    //Add a note
    const addNote = async(title, description, tag)=>{
      console.log("Adding a new note!")
      const note = {
        "_id": "613ca29a4b403151d3beb06d",
        "user": "6138fe87093fbffe2265adae",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-09-11T12:35:38.688Z",
        "__v": 0
      }

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOGZlODcwOTNmYmZmZTIyNjVhZGFlIn0sImlhdCI6MTYzMTEyNTEzNX0.EluGU7XoU1o0zZrSW-ei1Lbwu58ED8w9BV5NU2OwNh4'
        },
        body: JSON.stringify({title, description, tag})
      });

      const json = response.json();
      console.log(json)
      setNotes(notes.concat(note));
    }

    //Delete a note
    const deleteNote = async(id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOGZlODcwOTNmYmZmZTIyNjVhZGFlIn0sImlhdCI6MTYzMTEyNTEzNX0.EluGU7XoU1o0zZrSW-ei1Lbwu58ED8w9BV5NU2OwNh4'
        }
      });

      const json = response.json();
      console.log(json)
      console.log("Deleting note with id "+ id)
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);
    }

    //Update a note
    const editNote = async(id, title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOGZlODcwOTNmYmZmZTIyNjVhZGFlIn0sImlhdCI6MTYzMTEyNTEzNX0.EluGU7XoU1o0zZrSW-ei1Lbwu58ED8w9BV5NU2OwNh4'
        },
        body: JSON.stringify({title, description, tag})
      });

      const json = await response.json();
      console.log(json)

      let newNotes = JSON.parse(JSON.stringify(notes));
      for(let index = 0 ; index < newNotes.length; index++){
        const element = newNotes[index];
        if(element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    }

    return(
        <NoteContext.Provider value={{notes , addNote , deleteNote , editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;