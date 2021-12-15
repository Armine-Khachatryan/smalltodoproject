import React from 'react';
import './style.css'
import ToDoItem from '../toDoItem/toDoItem';

function ToDo({ todos , onChange , onDelete }) {


    return (

        <div> {
            todos.map((item) => {
                return (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                )
            })
        }</div>

    )
}

export default ToDo;