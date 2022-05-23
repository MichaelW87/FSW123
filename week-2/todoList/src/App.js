import List from './TodoList';
import './App.css';
import {todos} from './Store';

function App() {
  return (
    <div>
    <h1>To do List</h1>
   
    <h3>
    <ul>
     <List tasks = {todos} />
     </ul></h3>
     </div>
  );
}

export default App;
