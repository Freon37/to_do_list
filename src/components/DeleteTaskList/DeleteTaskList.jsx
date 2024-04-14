/* eslint-disable react/prop-types */
export default function DeleteTaskList({ onDeleteTaskList }) {
  return (
    <button onClick={onDeleteTaskList}>
      Delete All
    </button>
  )
}