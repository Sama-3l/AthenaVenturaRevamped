import React from 'react'

export default function SolutionTag({tag} : {tag : string}) {
  return (
    <div className='py-2 px-4 bg-(--color-background) rounded-lg'>
      <h2 className="font-(family-name:--font-fustat) tracking-[-5%] text-[12px]">
        {tag}
      </h2>
    </div>
  )
}
