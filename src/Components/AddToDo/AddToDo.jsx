import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../Context/ToDoContext";

function AddToDo({updateList}){
    const [inpTxt,setInp] = useState('');
    const {list_todo,setList} = useContext(ToDoContext);
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
                        console.log(typeof updateList);
                        updateList(inpTxt);
                        setInp('')
                    }
                }> Add</button>
        </div>
    );

}
export default AddToDo;