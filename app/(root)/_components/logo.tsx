import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});


const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <span>🌀</span>
      <p className={cn('text-xl font-semibold tracking-tight bg--red-20', font.className)}>
        Laydock 
      </p>
    </div>
  )
}

export default Logo