function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <span
        onClick={() => onToggleTask(task.id)}
        className={`cursor-pointer flex-1 text-sm ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
        } ${task.priority === 'high' ? 'text-red-600 font-medium' : ''}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="ml-3 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
      >
        삭제
      </button>
    </li>
  )
}

export default TaskItem 