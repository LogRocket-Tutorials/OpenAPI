import React, { useState } from 'react'
import { AddTodoDto } from '../../services/openapi'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: AddTodoDto) => void 
}

const defaultTodo: AddTodoDto = {
  title: 'Learn JS',
  text: 'Rule the world'
}
const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<AddTodoDto>(defaultTodo)

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo
