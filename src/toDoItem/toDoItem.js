import React from 'react';
import './style.css'


function ToDoItem ({item , onChange , onDelete}){
 
    return(
        <div>
            <label>
                <input type="checkbox" checked={item.isCompleted} onChange={(e)=>{
                    onChange({
                        ...item,
                        isCompleted:e.target.checked
                        
                    })
                }}/>{item.text}
                <button onClick={()=>{
                    onDelete(item);
                }}>X</button>
            </label>
        </div>
    )
}


export default ToDoItem;