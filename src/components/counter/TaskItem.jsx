function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="task-item">
      <span
        onClick={() => onToggleTask(task.id)}
        className={`${task.completed ? 'completed' : ''} ${task.priority === 'high' ? 'f-red' : ''}`}
      >
        {task.text}
      </span>
      <button
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
      >
        삭제
      </button>
    </li>
  )
}

export default TaskItem 