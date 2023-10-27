import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='bg-white dark:bg-accent-9 dark:transition-colors 
    duration-200 
    ease-in-out 
    dark:bg-gradient' lang="en">
      <Head />
      <body className='max-w-1220px m-0 mx-auto '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
