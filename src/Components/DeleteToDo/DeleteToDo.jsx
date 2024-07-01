import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../Context/ToDoContext";
function DeleteToDo({id}){
    const {list_todo,setList} = useContext(ToDoContext);
    console.log("list is :",list_todo);

    // search for todo
    function search(){
        list_todo.map((t)=>{})
    }

    

}
export default AddToDo;