import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import todoLogo from "../../assets/logo.svg";
import TaskList from '../TaskList/TaskList.jsx';
import ControlModule from '../ControlModule/ControlModule.jsx';

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

  function changeStyle(filterButtons, id, setfilterButton) {
    let newFilterButtons = filterButtons.map(button =>
      button.id === id ? { ...button, active: true } : { ...button, active: false }
    )
    setfilterButton(newFilterButtons);
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
      <header className={styles.header}>
        <h1>
          <img src={todoLogo} alt="Logo todo" />
        </h1>
      </header>
      <main className={styles.main}>
        <section className={styles.list}>
          <ControlModule
            onAddTodo={addTodo}
            onFindTodo={findTodo}
            onDeleteTaskList={deleteTaskList}
            onTodoFilter={todoFilter}
            onChangeStyle={changeStyle}
          />
          <TaskList
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            onStatusTodo={statusTodo}
            onSaveTodo={saveTodo}
            filtered={filtered}
          />
        </section>
      </main>
    </div>
  );
}