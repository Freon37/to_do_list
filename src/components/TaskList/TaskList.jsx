/* eslint-disable react/prop-types */
import { Trash, Pen, ListPlus, CheckFat } from "@phosphor-icons/react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, changeStatusTodo, saveTodo } from "../../store/todoSlice";
import styles from './TaskList.module.css';

export default function TaskList() {
  const [edit, setEdit] = useState(null);
  const [title, setTitle] = useState('');

  const { todos, filter, searchQuery } = useSelector(state => state.todos);

  const dispatch = useDispatch();

  function onEditTodo(id, title) {
    setEdit(id);
    setTitle(title);
  }

  function onSaveTodo(id, title) {
    dispatch(saveTodo({ id, title }));
    setEdit(null);
  }

  function onDeleteTodo(id) {
    dispatch(deleteTodo({ id }))
  }

  function onChangeStatusTodo(id) {
    dispatch(changeStatusTodo({ id }));
  }

  const filteredTasks = todos
    .filter(todo => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'completed') {
        return todo.done;
      } else if (filter === 'uncompleted') {
        return !todo.done;
      }
    }).filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={styles.content}>
      {filteredTasks.length > 0 ?
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
                      <button className={styles.button} onClick={() => onSaveTodo(todo.id, title)}>
                        <ListPlus size={28} />
                      </button>
                    </div> :
                    <div className={styles.containerButtons}>
                      <button className={styles.button} onClick={() => onChangeStatusTodo(todo.id)}>
                        <CheckFat size={28} color={todo.done ? "#80ff00" : "currentColor"} />
                      </button>
                      <button className={styles.button} onClick={() => onEditTodo(todo.id, todo.title)}>
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
        :
        <p className={styles.altText}>So far, there are no tasks to complete. You can add new tasks to your to-do list to get started.</p>
      }
    </div>)
}