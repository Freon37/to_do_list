import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from '../Header/Header.jsx';
import AddTodo from '../AddTodo/AddTodo.jsx';
import FindTodo from '../FindTodo/FindTodo.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import FilterTodo from '../FilterTodo/FilterTodo.jsx';
import DeleteTaskList from '../DeleteTaskList/DeleteTaskList.jsx';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || initialTodos;
  });

  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title, setTitle) {
    if (title) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: title,
          done: false
        }
      ]);
      setTitle('');
    }
  }

  function findTodo(value) {
    //текущие задачи и новые отфильтрованные задачи
    let currentTodos = [];
    let newList = [];
    if (value !== "") {
      currentTodos = todos;
      newList = currentTodos.filter(todo => {
        const lc = todo.title.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = todos;
    }
    setFiltered(newList);
  }

  function todoFilter(status) {
    if (status === 'all') {
      setFiltered(todos);
    } else {
      let newTodos = todos.filter(todo => todo.done === status);
      setFiltered(newTodos);
    }
  }

  function deleteTaskList() {
    setTodos([]);
  }

  function deleteTodo(id) {
    let newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  function editTodo(id, title, setEdit, setTitle) {
    setEdit(id);
    setTitle(title);
  }

  function statusTodo(id) {
    let newTodo = todos.filter(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodo);
  }

  function saveTodo(id, title, setEdit) {
    let newTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
    setTodos(newTodo);
    setEdit(null);
  }

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.content}>
        <div className={styles.list}>
          <div className={styles.special}>
            <AddTodo
              onAddTodo={addTodo}
            />
          </div>
          <div className={styles.find}>
            <FindTodo
              onFindTodo={findTodo}
            />
            <DeleteTaskList
              onDeleteTaskList={deleteTaskList}
            />
          </div>
          <div className={styles.filter}>
            <FilterTodo
              onTodoFilter={todoFilter}
            />
          </div>
          <TaskList
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            onStatusTodo={statusTodo}
            onSaveTodo={saveTodo}
            filtered={filtered}
          />
        </div>
      </main>
    </div>
  );
}