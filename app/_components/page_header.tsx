import React from 'react'

export default function PageHeader({
  title,
  subtitle,
  className = "text-(--color-background) border-(--color-background)",
  noHorizontalPadding = false,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  noHorizontalPadding?: boolean;
}) {
  return (
    <div
      className={`
        flex items-center justify-between
        ${noHorizontalPadding ? "px-0" : "px-4 md:px-8"}
        pb-4 md:pb-8 md:pt-12 pt-8 border-b
        ${className}
      `}
    >
      <h1 className="page-title">{title}</h1>

      {subtitle && (
        <p className="page-subtitle text-end">
          {subtitle}
        </p>
      )}
    </div>
  );
}
