import { useState, useEffect } from 'react'

const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    text: "Small progress is still progress.",
    author: "Anonymous"
  },
  {
    text: "Your future is created by what you do today.",
    author: "Anonymous"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss"
  },
  {
    text: "Done is better than perfect.",
    author: "Sheryl Sandberg"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  }
]

export default function QuoteSection() {
  const [quote, setQuote] = useState(quotes[0])
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      setTimeout(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        setFadeIn(true)
      }, 500)
    }, 10000) // Change quote every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 transform transition-all duration-300 hover:bg-white/10">
      <div className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mint-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <blockquote className="text-lg text-emerald-100 font-medium mb-2">
          "{quote.text}"
        </blockquote>
        <cite className="text-sm text-mint-400 block">
          — {quote.author}
        </cite>
      </div>
    </div>
  )
} 