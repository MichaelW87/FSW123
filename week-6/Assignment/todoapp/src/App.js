import { useState } from "react";
import { toDoArray } from "./components/STORE";
import {v4 as uuidV4} from "uuid";

function App() {
  const [todos, setToDo] = useState(toDoArray);
  
  const addTodo = (text) => {
    const toDoObject = {
      id: uuidV4(),
      text: text,
      isCompleted: false,
    };

    setToDo((oldTodos) => {
      return [...oldTodos, toDoObject];
    });
  };
   
  const completeToDo=(id)=>{
    let tempToDoArray=[...todos];
    let toDoIndex=tempToDoArray.findIndex(element=>element.id===id);
    tempToDoArray[toDoIndex].isCompleted=!tempToDoArray[toDoIndex].isCompleted;
    setToDo(tempToDoArray);
  };
  const deleteToDo=(id)=>{
    let tempToDoArray=[...todos];
    let deleteToDoArray=tempToDoArray.filter(element=>element.id!==id);
    setToDo(deleteToDoArray);
  };

  const editToDo = (id) => {
    let tempToDoArray = [...todos];
    let editToDoItem = tempToDoArray.findIndex(element => element.id === id);
    tempToDoArray[editToDoItem].editState = !tempToDoArray[editToDoItem].editState;
    setToDo(tempToDoArray);
 

  };

  const submitEdit = (text, id) => {
  
    let tempToDoArray = [...todos];
    let editToDoItem = tempToDoArray.findIndex(element => element.id === id);
    tempToDoArray[editToDoItem].text = text;
    tempToDoArray[editToDoItem].editState = !tempToDoArray[editToDoItem].editState;
    Object.assign(tempToDoArray[editToDoItem], tempToDoArray[editToDoItem]);
    setToDo(tempToDoArray);

  };

  return (
    <div className="App">
        addTodo={addTodo}
        data={todos} 
        completeTodo={completeToDo} 
        deleteToDo={deleteToDo} 
        editToDo={editToDo} 
        submitEdit={submitEdit}
    </div>
  );
}

export default App;
