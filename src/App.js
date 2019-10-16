import React, { useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;