import React from 'react'

export default function ThalionLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}
