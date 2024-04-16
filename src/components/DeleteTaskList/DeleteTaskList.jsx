import styles from './DeleteTaskList.module.css';

/* eslint-disable react/prop-types */
export default function DeleteTaskList({ onDeleteTaskList }) {
  return (
    <button
      className={styles.button}
      onClick={onDeleteTaskList}>
      Delete All
    </button>
  )
}