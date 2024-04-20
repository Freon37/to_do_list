/* eslint-disable react/prop-types */
import { Trash, Pen, ListPlus, CheckFat } from "@phosphor-icons/react";
import { useState } from 'react';
import styles from './TaskList.module.css';

export default function TaskList({ onDeleteTodo, onEditTodo, onStatusTodo, onSaveTodo, filteredTasks }) {
  const [edit, setEdit] = useState(null);
  const [title, setTitle] = useState('');

  return (
    <ul className={styles.taskList}>
      {
        filteredTasks.map(todo => (
          <li key={todo.id} className={edit === todo.id ? styles.listItemChange : styles.listItem}>
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
                  <button className={styles.button} onClick={() => onStatusTodo(todo.id)}>
                    <CheckFat size={28} color={todo.done ? "#80ff00" : "currentColor"} />
                  </button>
                  <button className={styles.button} onClick={() => onEditTodo(todo.id, todo.title, setEdit, setTitle)}>
                    <Pen size={28} />
                  </button>
                  <button className={styles.button} onClick={() => onDeleteTodo(todo.id)}>
                    <Trash size={28} />
                  </button>
                </div>
            }
          </li>
        ))
      }
    </ul>
  )
}