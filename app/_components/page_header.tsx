import React from 'react'

export default function PageHeader({
  title,
  subtitle,
  className = "text-(--color-background) border-(--color-background)"
} : {
  title: string,
  subtitle?: string,
  className?: string
}) {
  return (
    <div className={`flex items-center justify-between px-8 pb-8 pt-12 border-b ${className}`}>
        <h1 className="page-title">
        {title}
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
