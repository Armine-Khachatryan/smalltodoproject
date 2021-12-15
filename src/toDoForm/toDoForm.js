import React, {useState} from 'react';
import './style.css'

function ToDoForm ({onAdd}){

    const [text, setText]=useState("");

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            onAdd(text);
            setText("")
        }}>
            <input type="text" placeholder="What needs to be done" value={text} onChange={(evt) =>{setText(evt.target.value);}
        }/>
            <button> Add</button>
            </form>

    )
}

export default ToDoForm;