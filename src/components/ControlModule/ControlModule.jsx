import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodoList, filterTodoList, setSearchQuery } from '../../store/todoSlice';
import styles from './ControlModule.module.css';

/* eslint-disable react/prop-types */
export default function ControlModule() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const filterButtons = useSelector(state => state.todos.filterButtons);
    const searchQuery = useSelector(state => state.todos.searchQuery);

    function onAddTodo() {
        if (title) {
            dispatch(addTodo({ title }));
            setTitle('');
        }
    }

    function onDeleteTodoList() {
        dispatch(deleteTodoList());
    }

    function onTodoFilter(filter) {
        dispatch(filterTodoList({ filter }));
    }

    function onFindTodo(e) {
        const searchQuery = e.target.value;
        dispatch(setSearchQuery({ searchQuery }));
    }

    return (
        <div className={styles.controlModule}>
            <div className={styles.row}>
                <input className={styles.add} type='text' placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
                <button className={styles.button} onClick={onAddTodo}>Add</button>
            </div>
            <div className={styles.rowFind}>
                <input className={styles.find} type='text' placeholder="Find todo..." value={searchQuery} onChange={onFindTodo} />
                <button className={styles.button} onClick={onDeleteTodoList}>Delete All</button>
            </div>
            <div className={styles.rowFilter}>
                <button className={filterButtons.all ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('all')}>All</button>
                <button className={filterButtons.completed ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('completed')}>Completed</button>
                <button className={filterButtons.uncompleted ? styles.buttonActive : styles.button} onClick={() => onTodoFilter('uncompleted')}>Uncompleted</button>
            </div>
        </div>
    )
}