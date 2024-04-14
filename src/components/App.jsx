import { useState, useEffect } from 'react';
import AddTodo from './AddTodo/AddTodo.jsx';
import FindTodo from './FindTodo/FindTodo.jsx';
import TaskList from './TaskList/TaskList.jsx';
import FilterTodo from './FilterTodo/FilterTodo.jsx';
import DeleteTaskList from './DeleteTaskList/DeleteTaskList.jsx';

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

  function todoFilter(status) {
    if (status === 'all') {
      setFiltered(todos);
    } else {
      let newTodos = todos.filter(todo => todo.done === status);
      setFiltered(newTodos);
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

  function deleteTaskList() {
    setTodos([]);
  }

  return (
    <>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
      />
      <FindTodo
        onFindTodo={findTodo}
      />
      <DeleteTaskList
        onDeleteTaskList={deleteTaskList}
      />
      <FilterTodo
        onTodoFilter={todoFilter}
      />
      <TaskList
        todos={todos}
        setTodos={setTodos}
        filtered={filtered}
      />
    </>
  );
}