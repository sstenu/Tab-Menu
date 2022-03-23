import React, { useState }  from 'react'
import { AgGridReact } from 'ag-grid-react';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

function App() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({desc: '', date: '', priority: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const columns = [
    { field: 'desc', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
  ]

  return (
    <div className="App">
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker label="Date" name="date" value={todo.date} onChange={pv => setTodo({...todo, date: pv})} animateYearScrolling/>
      </MuiPickersUtilsProvider>
        <TextField label="Description" variant="standard" name="desc" value={todo.desc} onChange={inputChanged}/>
        <TextField label="Priority" variant='standard' name="priority" value={todo.priority} onChange={inputChanged}/>
        <Button onClick={addTodo} variant="contained">Add</Button>
      </Stack>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
