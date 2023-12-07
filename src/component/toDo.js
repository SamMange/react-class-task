import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';

const TodoApp = () => {
    
  const [todos, setTodos] = useState([]);
  const [empName, setEmpName] = useState('');
  const [department, setDepartment] = useState('');

    const addTodo = () => {
        if (empName.trim() !== '' && department.trim() !== '') {
            let empNames = { Employeename: empName, epDepartment : department };
            setTodos([...todos, empNames]);
            setDepartment('');
            setEmpName('');
        }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    console.log("newTodos", newTodos)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
          <Stack spacing={2} direction="row">
              <TextField
                  type="text"
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
              />
              <TextField
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
              />
              <Button variant='contained' onClick={addTodo}>Add Todo</Button>
          </Stack>
          <TableContainer component={Paper}  sx={{ width: '50%', maxHeight: '100%' }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Sr. No.</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Department</TableCell>
                          <TableCell align="right">Action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {todos.map((row, index) => (
                          <TableRow key={index}>
                              <TableCell align='center'>{index + 1}</TableCell>
                              <TableCell align="right">{row.Employeename}</TableCell>
                              <TableCell align="right">{row.epDepartment}</TableCell>
                              <TableCell align="right">          
                              <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={() => removeTodo(index)}
                              >
                                  Delete
                              </Button></TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  );
};

export default TodoApp;
