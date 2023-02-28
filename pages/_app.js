import '@/styles/globals.css'
import { NextProjectProvider } from '@/context/NextProjectContext'

function App({ Component, pageProps }) {
  return (
    //whole app are able to access to provider
  <NextProjectProvider>
  <Component {...pageProps} />
  </NextProjectProvider>
  )
}

export default App