import './styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      some sort of nav here...
      <main className="mx-auto max-w-3xl md:py-24">
        <Component {...pageProps} />
      </main>
    </StrictMode>
  )
}
