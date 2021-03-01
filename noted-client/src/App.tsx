import React, { useCallback, useEffect, useState } from 'react';
import {AddTodo , TodoItem }from './features/todo';
import { getTodos, addTodo, updateTodo, deleteTodo } from './services/api/todo';
import { AddTodoDto, ApiError, EditTodoDto, TodoDto } from './services/openapi';


import './App.css'

const App = () => {
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const [error, setError] = useState<ApiError|null>();

const  handleSaveTodo=useCallback((e: React.FormEvent, formData: AddTodoDto) =>{
    e.preventDefault();
    addTodo(formData)
      .then((todo) => todo)
      .catch((err) => setError(err));
  },[])

  const handleUpdateTodo = useCallback((id: number, todo: EditTodoDto) => {
    updateTodo(id, todo)
      .then((updatedTodo) => updatedTodo)
      .catch((err) => setError(err));
  },[]);

  const handleDeleteTodo = useCallback((id: number) => {
    deleteTodo(id).catch((err) => setError(err));
  },[]);


  useEffect(() => {
    getTodos()
      .then((allTodos) => setTodos(allTodos))
      .catch((error) => setError(error));
  }, []);


  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: TodoDto) => (
        <TodoItem
          key={todo.id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
          error={error}
        />
      ))}
    </main>
  );
};

export default App;
