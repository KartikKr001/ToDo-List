import { useContext } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoContext from "../../Context/ToDoContext";
function ToDoList(){
    const {list_todo,setList} = useContext(ToDoContext);

    function onFinished(todo,isFinished){
        const updated_list = list_todo.map((x)=>{
            if(x.id == todo.id){
                todo.finished = isFinished;
            }
            return x;
        });
        console.log("updated: ",updated_list);
        setList(updated_list);
    }

    function onDelete(todo){
        const updated_list = list_todo.filter((x)=>(x.id != todo.id));
        console.log("deleted: ",updated_list);
        setList(updated_list);
    }

    function onEdit(todo,textData){
        const updated_list = list_todo.map((x)=>{
            if(x.id == todo.id){
                x.todoData = textData;
            }
            return x;
        });
        console.log("editted: ",updated_list);
        setList(updated_list);
    }

    console.log("list is: ",list_todo);
    return (
        <div>
            {list_todo.length > 0 && list_todo.map((todo)=><ToDo 
                    key={todo.id} 
                    id={todo.id} 
                    isFinished={todo.finished} 
                    todoData={todo.todoData}
                    changeFinished= {(check)=>onFinished(todo,check)}
                    onDelete={()=>onDelete(todo)}
                    onEdit={(textData)=>onEdit(todo,textData)}
                />)}
        </div>
    );
}

export default ToDoList;