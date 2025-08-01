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
    <div className="input-group">
      <select 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
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
      />
      <button onClick={onAddTask}>추가</button>
      <button onClick={onClearAllTasks}>전체 삭제</button>
    </div>
  )
}

export default TaskInput 