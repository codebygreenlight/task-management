import { useState } from 'react'

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [dueTime, setDueTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      onTaskAdded({ 
        title, 
        description,
        dueDate,
        dueTime,
        scheduledFor: dueDate && dueTime ? `${dueDate}T${dueTime}` : null
      })
      setTitle('')
      setDescription('')
      setDueDate('')
      setDueTime('')
      setIsSubmitting(false)
    }, 300)
  }

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 h-fit transform transition-all duration-300 hover:shadow-mint-500/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            placeholder="What needs to be done?"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-2">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              min={today}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="dueTime" className="block text-sm font-medium text-gray-300 mb-2">
              Due Time
            </label>
            <input
              type="time"
              id="dueTime"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            rows="4"
            placeholder="Add more details..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-mint-500 text-white font-medium 
            hover:from-emerald-600 hover:to-mint-600 focus:ring-4 focus:ring-mint-500/20 transition-all duration-300 
            flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 scale-95' : 'hover:scale-[1.02]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform duration-300 ${isSubmitting ? 'animate-spin' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span>{isSubmitting ? 'Adding...' : 'Add Task'}</span>
        </button>
      </form>
    </div>
  )
} 