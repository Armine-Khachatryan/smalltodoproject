
import './App.css';
import React, {useState} from 'react';
import ToDo from './toDo/toDo';
import ToDoForm from './toDoForm/toDoForm';
import ToDoFooter from './toDoFooter/toDoFooter';



function App() {
  const [todos, setTodos]=useState([
    {
    id:Math.random(),
    text: "Learn JS",
    isCompleted:false
    },
    {
     id:Math.random(),
     text: "Learn CSS",
     isCompleted:false
     },
     {
     id:Math.random(),
     text: "Learn React",
     isCompleted:false
     }
]);

  return (
  
   <div className="app">
     <ToDoForm onAdd={(text)=>{
       setTodos([
         ...todos, 
         {
           id:Math.random(),
           text:text,
           isCompleted:false
         }
       ])
     }}/>
        <ToDo todos={todos}
        onDelete={(item)=>{
          setTodos(todos.filter((t)=>t.id!==item.id));
        }}
        
        onChange={(newTodo)=>{
          setTodos(
            todos.map((item)=>{
              if(item.id===newTodo.id){
                return newTodo;
              }
              return item;
            })
          )
        }}
        
        
        
        
        />
        <ToDoFooter todos={todos} onClearCompleted={()=>{
        setTodos(todos.filter((item)=>!item.isCompleted
        ))}}/>
    </div>
  );
}

export default App;
