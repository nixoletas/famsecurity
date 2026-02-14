'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number]
  className?: string
  squaresClassName?: string
  /** Classes aplicadas ao quadrado em hover (ex: fill-primary/15 stroke-primary/20) */
  squaresHoverClassName?: string
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [32, 32],
  className,
  squaresClassName,
  squaresHoverClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)

  const totalWidth = horizontal * width
  const totalHeight = vertical * height

  return (
    <svg
      className={cn('absolute inset-0 h-full w-full', className)}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              'fill-foreground/[0.03] stroke-foreground/[0.06] transition-all duration-300 [vector-effect:non-scaling-stroke]',
              hoveredSquare === index && (squaresHoverClassName ?? 'fill-foreground/[0.06] stroke-foreground/[0.12]'),
              squaresClassName
            )}
            strokeWidth={1}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        )
      })}
    </svg>
  )
}
