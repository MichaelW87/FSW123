import { useState } from "react";
import {todosArray} from './STORE.js';
import {v4 as uuidV4} from "uuid";
import TodoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "./App.css";



const App = () => {
  const [todos, setToDos] = useState(todosArray);
  
  const addTodo = (text) => {
    const toDoObject = {
      id: uuidV4(),
      text: text,
      isCompleted: false,
    };

    setToDos((oldTodos) => {
      return [...oldTodos, toDoObject];
    });
  };
   
  const completeTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let toDoIndex = temporaryToDosArray.findIndex(element => element.id  === id);
    temporaryToDosArray[toDoIndex].isCompleted = !temporaryToDosArray[toDoIndex].isCompleted;
    setToDos(temporaryToDosArray);
  };

  const deleteToDo = (id) => {
    let temporaryToDosArray = [...todos];
    let deleteToDoArray = temporaryToDosArray.filter(element => element.id !== id);
    setToDos(deleteToDoArray);

  };

  const editToDo = (id) => {
    let temporaryToDosArray = [...todos];
    let editToDoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editToDoItem].editState = !temporaryToDosArray[editToDoItem].editState;
    setToDos(temporaryToDosArray);
 

  };

  const submitEdit = (text, id) => {
  
    let temporaryToDosArray = [...todos];
    let editToDoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editToDoItem].text = text;
    temporaryToDosArray[editToDoItem].editState = !temporaryToDosArray[editToDoItem].editState;
    Object.assign(temporaryToDosArray[editToDoItem], temporaryToDosArray[editToDoItem]);
    setToDos(temporaryToDosArray);

  };

  return (
    <>
    <h1>To Do List</h1>
      <h2>Add new To Do:</h2>
      <ToDoForm addTodo={addTodo}/>
      <TodoList addTodo={addTodo} 
        data={todos} 
        completeTodo={completeTodo} 
        deleteToDo={deleteToDo} 
        editToDo={editToDo} 
        submitEdit={submitEdit}/>
      
    </>

  );
}

export default App;