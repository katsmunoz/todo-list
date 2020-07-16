import React, { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import TodoForm from './components/todoForm.component';
import TodoList from './components/todoList.component';
import Footer from './components/footer.component';
import Header from './components/header.component';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Study',
      isCompleted: false,
  }

]);

// enabling check icon
const checkTodo = (id) => {
  console.log(id)
  setTodos(todos.map((todo) => {
    if(todo.id === id) todo.isCompleted = !todo.isCompleted
    console.log(todo.isCompleted)
    return todo;
  })
  );
};

// adding the todo
const addTodo = (text) => {
  console.log(text)
  const newTodo = {
    id: v4(), // this will create differents ids
    title: text,
    isCompleted: false
  };
  console.log(newTodo)
  setTodos([...todos, newTodo])
}

// deleting todo by clicking the trash icon
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id)) //if the ids don't match, the object will be removed from the array
}

  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}

export default App;
