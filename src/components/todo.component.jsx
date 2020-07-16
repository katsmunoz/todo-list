import React from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id);
    const todoStyle = isCompleted // changing the style when the task is checked
    ? { textDecoration: "line-through", color: 'grey', fontWeight: 400 } 
    : { textDecoration: "none" }

    return(
        <div>
            <Container maxWidth="sm">
            <Card variant="outlined" style={{
                // height: '40%',
                marginTop: 30,
                background: '#81c784',
                fontWeight: 400
            }}>
                <CardContent style={{ padding: 5 }} >
                <Typography variant="h6" component="h5" style={todoStyle}>
                <IconButton onClick={markComplete}>
                <Check style={{ color: 'green' }} />
                </IconButton>
                {title}
                <IconButton style={{ float: 'right' }} onClick={delTodo}>
                <Delete style={{ color: '#ffff' }} />
                </IconButton>
                </Typography>
                </CardContent>
            </Card>
            </Container>
        </div>
    )
}

Todo.displayName = 'Todo';

export default Todo;