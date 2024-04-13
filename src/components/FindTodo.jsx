import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function FindTodo({ onFindTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Find todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onFindTodo(title);
      }}>Find</button>
    </>
  )
}