import { useContext } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoContext from "../../Context/ToDoContext";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";
function ToDoList(){
    const {list_todo} = useContext(ToDoContext);
    const {dispatch} = useContext(ToDoDispatchContext);
    console.log("list is: ",list_todo);
    return (
        <div>
            {list_todo.length > 0 && list_todo.map((todo)=><ToDo 
                    key={todo.id} 
                    id={todo.id} 
                    isFinished={todo.finished} 
                    todoData={todo.todoData}
                    changeFinished= {(check)=>dispatch({type:'on_finished',payload:{todo:todo,isFinished:check}})}
                    onDelete={()=>dispatch({type:'delete_todo' ,payload:{todo:todo}})}
                    onEdit={(textData)=>dispatch({type:'edit_todo',payload:{todo:todo,textData:textData}})} 
                />)}
        </div>
    );
}

export default ToDoList;