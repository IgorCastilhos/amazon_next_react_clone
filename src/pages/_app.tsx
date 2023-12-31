import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`bg-gray-300 font-bodyFont`}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  )
}
