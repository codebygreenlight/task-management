import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import QuoteSection from './components/QuoteSection'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smooth animation
    setTimeout(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      setTasks(savedTasks)
      setIsLoading(false)
    }, 500)
  }, [])

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, {
      id: Date.now(), // Use timestamp as ID
      ...newTask,
      completed: false
    }]
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const handleUpdateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    )
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-12 px-4 transition-all duration-500">
      <div className="max-w-5xl mx-auto animate-fadeIn">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4 animate-slideDown hover:scale-105 transition-transform duration-300">
            Taskify
          </h1>
          <p className="text-gray-300 text-lg mb-8 animate-slideDown animation-delay-200">
            Organize your tasks efficiently
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 animate-slideUp animation-delay-300">
          <div className="lg:col-span-2">
            <TaskForm onTaskAdded={handleAddTask} />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <TaskList 
              tasks={tasks}
              isLoading={isLoading}
              onTaskUpdated={handleUpdateTask}
              onTaskDeleted={handleDeleteTask}
            />
            <QuoteSection />
          </div>
        </div>

        <footer className="text-center mt-16 animate-fadeIn animation-delay-500">
          <p className="text-gray-400 text-sm">
            Crafted with 
            <span className="mx-1 text-red-400 animate-pulse">❤</span> 
            by 
            <a 
              href="https://github.com/DevOlawale" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              DevOlawale
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}