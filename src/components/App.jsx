import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import FindTodo from './FindTodo.jsx';
import TaskList from './TaskList.jsx';
import FilterTodo from './FilterTodo.jsx';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleFindTodo(title) {
    setTodos(todos.filter(todo => todo.title === title));
  }

  function handleDeleteTodos() {
    setTodos([]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  function handleFilterCompletedTodo(todos) {
    setTodos(
      todos.filter(todo => todo.done === true)
    );
  }

  function handleFilterUncompletedTodo(todos) {
    setTodos(
      todos.filter(todo => todo.done !== true)
    );
  }

  function handleShowAllTodo() {
    setTodos(initialTodos);
  }

  return (
    <>      
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <FindTodo
        onFindTodo={handleFindTodo}
      />
      <button onClick={handleDeleteTodos}>
        Delete All
      </button>
      <FilterTodo
        todos={todos}
        onFilterCompletedTodo={handleFilterCompletedTodo}
        onFilterUncompletedTodo={handleFilterUncompletedTodo}
        onShowAllTodo={handleShowAllTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}