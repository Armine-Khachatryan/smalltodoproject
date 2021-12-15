

function ToDoFooter ({todos, onClearCompleted}){
    console.log(todos , "testestsets")

    const completedSize=todos.filter((item)=>item.isCompleted).length;
    console.log(completedSize, "dfdf")
   
    return(
        <div>
        <div>{completedSize}/{todos.length} Completed</div>
        <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )}

    export default ToDoFooter;