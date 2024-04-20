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

const initialFilterButtons = {
  all: true,
  completed: false,
  uncompleted: false
};

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || initialTodos;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterButtons, setFilterButtons] = useState(initialFilterButtons);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
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

  function findTodo(event) {
    setSearchTerm(event.target.value);
  }

  function deleteTaskList() {
    setTodos([]);
  }

  function todoFilter(filterType) {
    setFilter(filterType);
    setFilterButtons({
      ...filterButtons,
      all: filterType === 'all',
      completed: filterType === 'completed',
      uncompleted: filterType === 'uncompleted'
    });
  }

  function statusTodo(id) {
    const updatedTasks = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTasks);
  }

  function editTodo(id, title, setEdit, setTitle) {
    setEdit(id);
    setTitle(title);
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

  function deleteTodo(id) {
    let newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  const filteredTasks = todos.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.done;
    } else if (filter === 'uncompleted') {
      return !todo.done;
    }
  }).filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
            searchTerm={searchTerm}
            onFindTodo={findTodo}
            onDeleteTaskList={deleteTaskList}
            onTodoFilter={todoFilter}
            filterButtons={filterButtons}
          />
          <TaskList
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            onStatusTodo={statusTodo}
            onSaveTodo={saveTodo}
            filteredTasks={filteredTasks}
          />
        </section>
      </main>
    </div>
  );
}
