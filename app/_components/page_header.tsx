import React from 'react'

export default function PageHeader({title, subtitle} : {title : string, subtitle? : string}) {
  return (
    <div className="flex items-center justify-between px-8 pb-8 pt-12 text-(--color-background) border-b border-(--color-background)">
        <h1 className="page-title">
        What we do
        </h1>
        {
            subtitle && (
                <p className="w-62.5 page-subtitle">
                {subtitle}
                </p>
            )
        }
        
    </div>
  )
}
