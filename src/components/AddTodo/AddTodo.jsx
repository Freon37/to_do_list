import { useState } from 'react';
import styles from './AddTodo.module.css'; 

/* eslint-disable react/prop-types */
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <input className={styles.add} placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
      <button className={styles.addButton} onClick={() => onAddTodo(title, setTitle)}>Add</button>
    </>
  )
}