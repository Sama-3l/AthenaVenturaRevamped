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
    <div className={`flex items-center justify-between px-4 md:px-8 pb-4 md:pb-8 md:pt-12 pt-8 border-b ${className}`}>
        <h1 className="page-title">
        {title}
        </h1>
        {
            subtitle && (
                <p className="page-subtitle">
                {subtitle}
                </p>
            )
        }
    </div>
  )
}
