import React from 'react'

export default function BookACall({ bgColor = 'var(--color-background)', textColor = 'var(--color-foreground)' }: { bgColor?: string, textColor?: string }) {
  return (
    <div
      className='flex flex-col font-(family-name:--font-fustat) tracking-[-5%] text-[16px] w-full py-3 items-center rounded-full font-bold cursor-pointer'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      Book a call
    </div>
  )
}