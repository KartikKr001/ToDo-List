import './App.css'
import AddToDo from './Components/AddToDo/AddToDo'
import ToDoList from './Components/ToDoList/ToDoList'
import { useState } from 'react';
import ToDoContext from './Context/ToDoContext';
function App() {  

  const [list_todo,setList] = useState([
    {id:1,todoData:"todo1",finished:false}
  ]);
  return (
    <ToDoContext.Provider value={{list_todo,setList}}>
      <div>
        <AddToDo updateList={(newTodo)=>{
          setList([...list_todo,{id:list_todo.length+1,todoData:newTodo,finished:false}]);
        }}/>
        <ToDoList/>
      </div>
    </ToDoContext.Provider>

  )
}

export default App
