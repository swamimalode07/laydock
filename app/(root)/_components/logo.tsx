import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import { cn } from '@/lib/utils'

const font=Space_Grotesk({
    subsets:["latin"],
    weight:["400","600"]
})

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <span>🌀</span>
      <p className={cn('text-xl font-semibold tracking-tight', font.className)}>
        Laydock
      </p>
    </div>
  )
}

export default Logo