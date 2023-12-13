import { Alert, Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Popper from '@mui/material/Popper';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [empName, setEmpName] = useState('');
    const [department, setDepartment] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [openUpdate, setopenUpdate] = useState(false);
    const [rowIndex, setRowIndex] = useState();


    const addTodo = () => {
        if (empName.trim() !== '' && department.trim() !== '') {
            let empNames = { Employeename: empName, epDepartment: department };
            setTodos([...todos, empNames]);
            setDepartment('');
            setEmpName('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setShowAlert(true);
    };

    const updateTodo = (index) => {

        // setPostData({
        //     ...postdata,
        //     LEVEL: {
        //       ...postdata.LEVEL.options,
        //       [event.target.name]: event.target.value
        //     }
        //   });
        const newTodos = [...todos];
        console.log(newTodos)
    }

    useEffect(() => {
        if(showAlert){
            const timer = setTimeout(() => {
                setShowAlert(false);
              }, 500);
          
              return () => {
                clearTimeout(timer);
              };
        }
    }, [showAlert])

    return (
        <div>
            <Stack spacing={2} direction="row">
                <TextField
                    type="text"
                    value={empName}
                    onChange={(e) => setEmpName(e.target.value)}
                    placeholder='Enter Name'
                />
                <TextField
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder='Enter Department'
                />
                <Button variant='contained' onClick={addTodo}>Add Todo</Button>
            </Stack>
            <TableContainer component={Paper} sx={{ width: '50%', maxHeight: '100%' }}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Sr. No.</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align='center'>{index + 1}</TableCell>
                                <TableCell align="center">{row.Employeename}</TableCell>
                                <TableCell align="center">{row.epDepartment}</TableCell>
                                <TableCell align="center">
                                    <Stack spacing={1} direction="row" align="center">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => removeTodo(index)}
                                        >
                                            Delete
                                        </Button>
                                        {/* <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => {
                                                setopenUpdate(true)
                                                setRowIndex(index)
                                            }}
                                        >
                                            Update
                                        </Button> */}
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {openUpdate ? <div className="App">
                <TextField type='text' value={"value"} onChange={() => {}} />
                <Button type="button" onClick={() => {}}>Click Me</Button>
            </div> : ""} */}
            {showAlert && (
                <Alert severity="success">{`Data deleted successfully`}</Alert>
            )}
        </div>
    );
};

export default TodoApp;
