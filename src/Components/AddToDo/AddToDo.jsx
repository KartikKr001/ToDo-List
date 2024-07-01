import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../Context/ToDoContext";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";

function AddToDo(){
    const [inpTxt,setInp] = useState('');
    const {list_todo,setList} = useContext(ToDoContext);
    const {dispatch} = useContext(ToDoDispatchContext);
    console.log("list is :",list_todo);
    return(
        <div>
            <input id="input-add-todo" 
                placeholder="add your text" 
                type="text"
                value={inpTxt}    
                onChange={(e) => {
                    setInp(e.target.value);
                }}
                ></input>
            <button disabled={inpTxt == ""}
                    onClick={()=>{
                        console.log(inpTxt);
                        dispatch({type:'add_todo',payload:{todoData:{inpTxt}}})
                        setInp('')
                    }
                }> Add</button>
        </div>
    );

}
export default AddToDo;