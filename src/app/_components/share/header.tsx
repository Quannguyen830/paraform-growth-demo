import React from 'react'

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full py-2 border-b bg-background">
      <div className="flex h-14 items-center px-4">
        <span className="font-bold text-xl">{title}</span>
      </div>
    </header>
  )
}
