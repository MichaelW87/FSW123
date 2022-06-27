import { useState } from "react";
import Delete from "../UI/Delete";
import Edit from "../UI/Edit";

const ToDo = ({data, completeToDoProp, deleteToDoProp, editToDo, submitEdit})=>{
    const [inputValue, setInputValue]=useState("");
    const [disable, setDisable]=useState(false);

    const completeElementHandler = (id) => {
        completeToDoProp (id);
    };
    
    const deleteElementHandler = (id)=>{
        deleteToDoProp(id);
    };
    const editToDoHandler=(elementId)=>{
        console.log(elementId);
        editToDo(elementId);
    };
    const submitEditHandler=(text, id)=>{
        if(text.length<=0)
        {
            return;
        }
        submitEdit(text, id);
        setInputValue("");
    };
    const setInputValueHandler = (event) => {
        setInputValue(event.target.value);
    };

    const disableHandler = (event) => {

        if(event.target.id === event.target.nextElementSibling.nextElementSibling.id)
        {
            setDisable(!disable);
            event.target.nextElementSibling.nextElementSibling.disabled = !disable; 
        }
        else
        {
            return
        }
    };
    return(
        <ul>
        {
            data.map( (element, index) => {
                
                return (
                    <>
                    {
                       !element.editState ?
                        <li key={element.id} style={{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""}}>
                            <input key={element.id} type="checkbox"
                                id={element.id}
                                checked =  {element.isCompleted} 
                                onChange={(event) => {completeElementHandler(element.id); 
                                disableHandler(event)}}
                                />
                                {element.text}
                                <Delete props={{onClick: deleteElementHandler, elementId: element.id}}>Delete</Delete>
                                <Edit props={{id:element.id, onClick: editToDoHandler, elementId: element.id}}>Edit</Edit>
                        </li>
                        :
                        <li key={element.id} style={{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""}}>
                            <input type={element.editState ? "text" : "checkbox"} 
                                checked = {element.isCompleted} 
                                value={element.editState ? inputValue : element.text}
                                onChange={(event) => {!element.editState ? completeElementHandler(element.id): setInputValueHandler(event);}}
                                 placeholder={element.text}
                                 />
                                {
                                    element.editState ? "" : element.text
                                }

                            <button id={element.id} disabled={inputValue.length > 0 ? false : true} 
                                     onClick={ () => {element.editState ? submitEditHandler(inputValue, element.id)
                                     :deleteElementHandler(element.id)}}>{element.editState ? "Submit Edit" : "Delete" }
                            </button>
                            <button  onClick={() => {element.editState ?  
                                    editToDoHandler(element.id) : console.log("Test")}}>
                                    {element.editState ? "Cancel" : "Edit"}
                            </button>
                        </li>
                    }
                    </>
                    )
            })
        }
    </ul>
    )

};

export default ToDo;