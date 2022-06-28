
import ToDo from './ToDo';


const TodoList = ({data, completeTodo, deleteToDo, editToDo, submitEdit}) => {
    

    return (
        <>
        {
            data.length > 0 ?
        
            <ToDo data={data} completeTodoProp={completeTodo} deleteTodoProp={deleteToDo} editToDo={editToDo} submitEdit={submitEdit}/>
            :
            <h3 className='empty-list__header'>To Do List Empty</h3>
        }
        </>
    )
};

export default TodoList;