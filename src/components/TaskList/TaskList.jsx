/* eslint-disable react/prop-types */
import { Trash, Pen, Lock, LockOpen, ListPlus } from "@phosphor-icons/react";
import { useState } from 'react';
import styles from './TaskList.module.css';

export default function TaskList({ onDeleteTodo, onEditTodo, onStatusTodo, onSaveTodo, filtered }) {
  const [edit, setEdit] = useState(null);
  const [title, setTitle] = useState(' ');

  return (
    <ul className={styles.taskList}>
      {
        filtered.map(todo => (
          <li key={todo.id} className={ edit === todo.id ? styles.listItemChange : styles.listItem}>
            {
              edit === todo.id ?
                <input className={styles.changeInput} value={title} onChange={e => setTitle(e.target.value)} />
                :
                <p className={todo.done ? styles.listItemTextSelected : styles.listItemText}>{todo.title}</p>
            }

            {
              edit === todo.id ?
                <div className={styles.containerButtons}>
                  <button className={styles.button} onClick={() => onSaveTodo(todo.id, title, setEdit)}>
                    <ListPlus size={28} />
                  </button>
                </div> :
                <div className={styles.containerButtons}>
                  <button className={styles.button} onClick={() => onDeleteTodo(todo.id)}>
                    <Trash size={28} />
                  </button>
                  <button className={styles.button} onClick={() => onEditTodo(todo.id, todo.title, setEdit, setTitle)}>
                    <Pen size={28} />
                  </button>
                  <button className={styles.button} onClick={() => onStatusTodo(todo.id)}>
                    {
                      todo.done ? <Lock size={28} /> : <LockOpen size={28} />
                    }
                  </button>
                </div>
            }
          </li>
        ))
      }
    </ul>
  )
}