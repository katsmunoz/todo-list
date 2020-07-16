import React, { useState } from 'react';
import { FormControl, Container, TextField, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const TodoForm = ({ addTodo }) => {
    const [ text, setText ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); // e represents event; this prevent refreshing the page
        addTodo(text);
        setText(''); //returns the value to empty
    }
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true}>
                <TextField label="What will you do today?" required={true} value={text} 
                onChange={(e) => setText(e.target.value)} />
                <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                style={{ marginTop: 10 }} >
                    <Add />
                    Add 
                </Button>
            </FormControl>
            </form>
        </Container>
    )
}

TodoForm.displayName = 'TodoForm';

export default TodoForm;