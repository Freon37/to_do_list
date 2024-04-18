import { useState } from 'react';
import styles from './ControlModule.module.css';

const initialFilterButtons = [
    { id: 0, text: 'All', status: 'all', active: true },
    { id: 1, text: 'Completed', status: true, active: false },
    { id: 2, text: 'Uncompleted', status: false, active: false }
];

/* eslint-disable react/prop-types */
export default function ControlModule({ onAddTodo, onFindTodo, onDeleteTaskList, onTodoFilter, onChangeStyle }) {
    const [title, setTitle] = useState('');
    const [filterButtons, setfilterButton] = useState(initialFilterButtons);

    return (
        <div className={styles.controlModule}>
            <div className={styles.row}>
                <input className={styles.add} placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
                <button className={styles.button} onClick={() => onAddTodo(title, setTitle)}>Add</button>
            </div>
            <div className={styles.rowFind}>
                <input className={styles.find} placeholder="Find todo..." onChange={({ target: { value } }) => onFindTodo(value)} />
                <button className={styles.button} onClick={onDeleteTaskList}>Delete All</button>
            </div>
            <div className={styles.rowFilter}>
                {
                    filterButtons.map(fb => (
                        <button
                            key={fb.id}
                            className={fb.active ? styles.buttonActive : styles.button}
                            onClick={() => {
                                onChangeStyle(filterButtons, fb.id, setfilterButton);
                                onTodoFilter(fb.status);
                            }}>
                            {fb.text}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}