import React from 'react'
import styles from './styles.module.css'

export default function ThalionLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <nav>THALION NAVBAR</nav>
        <main className={styles.main}>
            {children}
        </main>
    </>
  )
}
