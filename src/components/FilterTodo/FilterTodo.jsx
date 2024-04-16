import styles from './FilterTodo.module.css';

/* eslint-disable react/prop-types */
export default function FilterTodo({ onTodoFilter }) {
  return (
    <>
      <button className={styles.button} onClick={() => onTodoFilter('all')}>All</button>
      <button className={styles.button} onClick={() => onTodoFilter(true)}>Completed</button>
      <button className={styles.button} onClick={() => onTodoFilter(false)}>Uncompleted</button>
    </>
  )
}