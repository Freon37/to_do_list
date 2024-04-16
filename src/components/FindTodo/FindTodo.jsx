import styles from './FindTodo.module.css';

/* eslint-disable react/prop-types */
export default function FindTodo({ onFindTodo }) {
  return (
    <input
      className={styles.find}
      placeholder="Find todo..."
      type='text'
      onChange={({ target: { value } }) => onFindTodo(value)}
    />
  )
}