import { useState } from "react";




const ToDoForm = ({addTodo}) => {


    const [isInputEmpty, SetIsInputEmpty] = useState(false);
    const [toDoInput, setToDoInput] = useState("");

    const inputChangeHandler = (event) => {
        setToDoInput(event.target.value);
    };

    const setInputToFalseHandler = () => {
        SetIsInputEmpty(false);
    };
    
    const setInputToTrueHandler = () => {
        SetIsInputEmpty(true);

    };

    const sendToDo = (event) => {
        event.preventDefault();
        if(event.target.children[0].value === "")
        {
            setInputToTrueHandler();
        }
        else
        {
            addTodo(toDoInput);
            setInputToFalseHandler();
        }
    };

    return (
        <>
            <form onSubmit={sendToDo}>
                <input type="text" value={toDoInput} onChange={inputChangeHandler}/>
                <button>Add To Do</button>
            </form>
            {
                isInputEmpty && <h1 style={{color: "red"}}>Todo Is Empty</h1>      
            }
          
        </>
        )
};

export default ToDoForm;