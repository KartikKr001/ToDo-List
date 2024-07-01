import { useContext, useState } from "react";
import ToDoContext from "../../Context/ToDoContext";

function ToDo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const {list_todo,setList} = useContext(ToDoContext);

    const [finished,setFinished] = useState(isFinished);
    const [editting,setEditting] = useState(false);
    const [inpTxt,setInpTxt] = useState('');

    return (
        <div>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinished(e.target.checked);
                changeFinished(e.target.checked);
            }}/>
            {editting? <input type="text" placeholder="enter..." onChange={e=>setInpTxt(e.target.value)}/>: <span>{todoData}</span>}

            <button onClick={()=>{
                setEditting(!editting);
                onEdit(inpTxt);
            }
            }> {editting? "Save": "Edit"} </button>
            <button onClick={onDelete}> Delete </button>
        </div>
    );
}

export default ToDo;