function todoReducer(state,action){
    if(action.type == 'on_finished'){
        const todo = action.payload.todo;
        const isFinished = action.payload.isFinished;
        const updated_list = state.map((x)=>{
            if(x.id == todo.id){
                todo.finished = isFinished;
            }
            return x;
        });
        console.log("updated: ",updated_list);
        return updated_list;
    }
    
    else if(action.type == 'edit_todo'){
        const todo = action.payload.todo;
        const textData = action.payload.textData;
        const updated_list = state.map((x)=>{
            if(x.id == todo.id){
                x.todoData = textData;
            }
            return x;
        });
        console.log("editted: ",updated_list);
        return updated_list;
    }
    
    else if(action.type == 'delete_todo'){
        const todo = action.payload.todo;
        const updated_list = state.filter((x)=>(x.id != todo.id));
        return updated_list;
    }

    else if(action.type == 'add_todo'){
        const newTodo = action.payload.todoData.inpTxt;
        console.log("newTodo: ",newTodo);
        return [...state,{id:state.length+1,todoData:newTodo,finished:false}];
    }

}

export default todoReducer;