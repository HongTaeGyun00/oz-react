import { useState } from 'react'
import './Counter.css'
import TaskInput from '../components/counter/TaskInput'
import TaskList from '../components/counter/TaskList'
import TaskCounter from '../components/counter/TaskCounter'
import { useNavigate } from 'react-router'

function Counter() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [priority, setPriority] = useState('low')

  const addTask = () => {
    const taskText = inputValue.trim()
    if (taskText === '') {
      alert('할일을 입력해주세요')
      return
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: taskText,
        completed: false,
        priority: priority
      }
    ])
    setInputValue('')
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const clearAllTasks = () => {
    if (tasks.length === 0) {
      alert('삭제할 할 일이 없습니다.')
      return
    }
    setTasks([])
  }

  const moveToPosts = () => {
    alert('게시판으로 이동합니다.');
    navigate('/posts');
  }

  return (
    <div className="container">
      <h1>할 일 목록</h1>
      <button onClick={moveToPosts}>게시판으로 이동</button>
      
      <TaskInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        priority={priority}
        setPriority={setPriority}
        onAddTask={addTask}
        onClearAllTasks={clearAllTasks}
      />
      
      <TaskCounter count={tasks.length} />
      
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default Counter
