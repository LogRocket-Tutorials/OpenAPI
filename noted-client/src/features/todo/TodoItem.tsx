import React from 'react';
import { EditTodoDto, TodoDto } from  '../../services/openapi'
import { ApiError } from '../../services/openapi';


type TodoItemProps = {
  deleteTodo: (id: number) => void;
  error?: ApiError;
  todo: TodoDto;
  updateTodo: (id:number,todo: EditTodoDto) => void;
 
};

const TodoItem = ({ todo, updateTodo, deleteTodo }: TodoItemProps) => {
  const checkTodo: string = todo.completed ? `line-through` : '';
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className={checkTodo}>{todo.text}</h1>
        <span className={checkTodo}>{todo.title}</span>
      </div>
      <div className='Card--button'>
        <button
          onClick={() => updateTodo(todo.id,todo)}
          className={todo.completed ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
