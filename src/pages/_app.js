import '@/styles/globals.css'
import Header from '@/components/header'
import useFetchAllPlayers from "./api/useFetchAllPlayers";


export default function App({ Component, pageProps }) {
  
  const { playersStats } = useFetchAllPlayers([['account.bf0458c4350a4f58acfac101b3bd1df2', 'TIMMAHHH'], ['account.56162efa45c846cd98eae1a741b338b7', 'JustDaanGames'], ['account.aded6e78e0234600b8d1bccfc87865f9', 'SalamanderKip']]);

  return (
    <>
      <div className='flex flex-col  p-10 gap-2 '>
      {/* <Header/> */}
      <Component playersStats={playersStats} {...pageProps} />
    </div>
    </>

  )
}
