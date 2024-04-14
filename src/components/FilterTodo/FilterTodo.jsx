/* eslint-disable react/prop-types */
export default function FilterTodo({ onTodoFilter }) {
  return (
    <div>
      <button onClick={() => onTodoFilter('all')}>All</button>
      <button onClick={() => onTodoFilter(true)}>Completed</button>
      <button onClick={() => onTodoFilter(false)}>Uncompleted</button>
    </div>
  )
}