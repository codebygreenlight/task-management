import React from 'react'

const icons = [
  {
    icon: "✓",
    color: "text-emerald-400",
    size: "text-2xl",
    animation: "animate-float delay-0"
  },
  {
    icon: "📝",
    color: "text-mint-400",
    size: "text-3xl",
    animation: "animate-float delay-200"
  },
  {
    icon: "⭐",
    color: "text-teal-400",
    size: "text-2xl",
    animation: "animate-float delay-400"
  },
  {
    icon: "📌",
    color: "text-emerald-300",
    size: "text-3xl",
    animation: "animate-float delay-300"
  },
  {
    icon: "🎯",
    color: "text-mint-300",
    size: "text-2xl",
    animation: "animate-float delay-100"
  }
]

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.animation} ${icon.color} ${icon.size} opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  )
} 