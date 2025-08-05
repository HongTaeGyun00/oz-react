function TaskCounter({ count }) {
  return (
    <div className="my-4 text-slate-500 text-sm text-center">
      현재 할 일: <span>{count}</span>개
    </div>
  )
}

export default TaskCounter 