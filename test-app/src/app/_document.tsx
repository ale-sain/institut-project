import { Html, Head, Main, NextScript } from 'next/document'
import '../styles/globals.css'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}