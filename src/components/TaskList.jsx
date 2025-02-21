export default function TaskList({ tasks, isLoading, onTaskUpdated, onTaskDeleted }) {
  const toggleComplete = (taskId, completed) => {
    onTaskUpdated(taskId, { completed: !completed })
  }

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return null
    const date = new Date(dateTimeStr)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)
  }

  if (isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[400px] animate-pulse">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full mb-4"></div>
        <div className="h-4 w-32 bg-purple-500/20 rounded-full mb-2"></div>
        <div className="h-4 w-48 bg-purple-500/20 rounded-full"></div>
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center animate-fadeIn">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h3 className="text-xl font-medium text-white">No tasks yet</h3>
        <p className="text-gray-400 mt-2">Add your first task to get started</p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-purple-500/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Your Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] animate-slideIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleComplete(task.id, task.completed)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition duration-200
                  ${task.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'border-gray-500 hover:border-green-500'
                  }`}
              >
                {task.completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {task.title}
                  </h3>
                  {task.scheduledFor && (
                    <span className="text-sm text-purple-400 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatDateTime(task.scheduledFor)}
                    </span>
                  )}
                </div>
                {task.description && (
                  <p className={`text-sm mt-1 ${task.completed ? 'text-gray-500' : 'text-gray-300'}`}>
                    {task.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => onTaskDeleted(task.id)}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 