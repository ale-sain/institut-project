import React from 'react'
import './test.css'; 

export default function TestLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <>
            {children}
          </>
  )
}
