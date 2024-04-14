import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable react/prop-types */
export default function AddTodo({ todos, setTodos }) {
  const [title, setTitle] = useState('');

  function addTodo() {
    if (title) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: title,
          done: false
        }
      ]);
      setTitle('');
    }
  }

  return (
    <>
      <input placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </>
  )
}