import { useState } from 'react';
import styles from './ControlModule.module.css';

/* eslint-disable react/prop-types */
export default function ControlModule({ onAddTodo, onFindTodo, searchTerm, onDeleteTaskList, onTodoFilter, filterButtons }) {
    const [title, setTitle] = useState('');

    return (
        <div className={styles.controlModule}>
            <div className={styles.row}>
                <input className={styles.add} placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
                <button className={styles.button} onClick={() => onAddTodo(title, setTitle)}>Add</button>
            </div>
            <div className={styles.rowFind}>
                <input className={styles.find} type='text' placeholder="Find todo..." value={searchTerm} onChange={onFindTodo} />
                <button className={styles.button} onClick={onDeleteTaskList}>Delete All</button>
            </div>
            <div className={styles.rowFilter}>
                <button className={filterButtons.all ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('all')}>All</button>
                <button className={filterButtons.completed ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('completed')}>Completed</button>
                <button className={filterButtons.uncompleted ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('uncompleted')}>Uncompleted</button>
            </div>
        </div>
    )
}