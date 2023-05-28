import '@/styles/globals.css'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col p-5 '>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
