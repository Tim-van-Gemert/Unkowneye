import '@/styles/globals.css'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
