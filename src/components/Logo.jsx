import React from 'react'

export default function Logo() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="url(#gradient)" />
      <path 
        d="M22 12L13 21L10 18" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient 
          id="gradient" 
          x1="0" 
          y1="0" 
          x2="32" 
          y2="32" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#33D3A8" />
        </linearGradient>
      </defs>
    </svg>
  )
} 