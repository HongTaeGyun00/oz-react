import { useRef } from 'react'

function TaskInput({ 
  inputValue, 
  setInputValue, 
  priority, 
  setPriority, 
  onAddTask, 
  onClearAllTasks 
}) {
  const lastEventTime = useRef(0)

  const handleKeyPress = (event) => {
    // 짧은 시간 내 중복 이벤트 방지 (디바운싱)
    const currentTime = Date.now()
    if (currentTime - lastEventTime.current < 100) {
      return
    }
    lastEventTime.current = currentTime

    if (event.key === 'Enter') {
      event.preventDefault()
      onAddTask()
    }
  }

  return (
    <div className="space-y-3 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="low">낮음</option>
          <option value="high">높음</option>
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          onKeyUp={handleKeyPress}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button 
          onClick={onAddTask}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          추가
        </button>
        <button 
          onClick={onClearAllTasks}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
        >
          전체 삭제
        </button>
      </div>
    </div>
  )
}

export default TaskInput 