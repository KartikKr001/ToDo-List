import './App.css'
import AddToDo from './Components/AddToDo/AddToDo'
import ToDoList from './Components/ToDoList/ToDoList'
import { useReducer, useState } from 'react';
import ToDoContext from './Context/ToDoContext';
import todoReducer from './reducers/TodoReducers';
import ToDoDispatchContext from './Context/ToDoDispatchContext';
function App() {  

  // const [list_todo,setList] = useState([
  //   {id:1,todoData:"todo1",finished:false}
  // ]);
  const [list_todo,dispatch] = useReducer(todoReducer,[]);

  return (
    <ToDoContext.Provider value={{list_todo}}>
      <ToDoDispatchContext.Provider value={{dispatch}}>
        <div>
          <AddToDo/>
          <ToDoList/>
        </div>
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>

  )
}

export default App
