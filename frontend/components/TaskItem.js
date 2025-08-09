export default function TaskItem({ task, toggleTask }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-3 mb-2 rounded">
      <span
        className={`flex-1 ${
          task.completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {task.content}
      </span>
      <button onClick={toggleTask} className="bg-yellow-500 px-3 py-1 rounded">
        Toggle
      </button>
    </div>
  )
}
