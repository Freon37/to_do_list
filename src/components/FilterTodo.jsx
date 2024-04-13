// import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function FilterTodo({ onShowAllTodo, onFilterCompletedTodo, onFilterUncompletedTodo, todos }) {
//   const [title, setTitle] = useState('');
  return (
    <div>
      <button onClick={() => {
        onShowAllTodo();
      }}>All</button>
      <button onClick={() => {
        onFilterCompletedTodo(todos);
      }}>Completed</button>
      <button onClick={() => {
        onFilterUncompletedTodo(todos);
      }}>Uncompleted</button>
    </div>
  )
}