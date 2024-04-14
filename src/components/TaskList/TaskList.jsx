/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function TaskList({ todos, setTodos, filtered }) {
  const [edit, setEdit] = useState(null);
  const [title, setTitle] = useState(' ');

  function deleteTodo(id) {
    let newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  function editTodo(id, title) {
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

  function saveTodo(id) {
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
    <ul>
      {
        filtered.map(todo => (
          <li key={todo.id}>
            {
              edit === todo.id ?
                <div>
                  <input value={title} onChange={e => setTitle(e.target.value)} />
                </div> :
                <div>{todo.title}</div>
            }

            {
              edit === todo.id ?
                <div>
                  <button onClick={() => saveTodo(todo.id)}>Save</button>
                </div> :
                <div>
                  <button onClick={() => deleteTodo(todo.id)}>Remove</button>
                  <button onClick={() => editTodo(todo.id, todo.title)}>Edit</button>
                  <button onClick={() => statusTodo(todo.id)}>Close / Open</button>
                </div>
            }
          </li>
        ))
      }

    </ul>
  )
}