import React from 'react';
import { FormControl, Container, TextField, Button } from '@material-ui/core';

const TodoForm = () => {
    return (
        <Container>
            <form>
            <FormControl>
                <TextField label="What will you do today?" required={true} />
                <Button variant="standard" color="primary" type="submit"></Button>
            </FormControl>
            </form>
        </Container>
    )
}

TodoForm.displayName = 'TodoForm';

export default TodoForm;