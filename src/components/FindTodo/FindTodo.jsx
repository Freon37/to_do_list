/* eslint-disable react/prop-types */
export default function FindTodo({ onFindTodo }) {
  return (
    <input
      placeholder="Find todo..."
      type='text'
      onChange={({ target: { value } }) => onFindTodo(value)}
    />
  )
}