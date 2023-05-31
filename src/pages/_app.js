import '@/styles/globals.css'
import Header from '@/components/header'
import useFetchAllPlayers from "./api/useFetchAllPlayers";
import { AddNewPlayer } from './api/useFetchAllPlayers';


export default function App({ Component, pageProps }) {
  
  const players = [
    ['account.bf0458c4350a4f58acfac101b3bd1df2', 'TIMMAHHH'],
    ['account.56162efa45c846cd98eae1a741b338b7', 'JustDaanGames'],
    ['account.aded6e78e0234600b8d1bccfc87865f9', 'SalamanderKip'],
    ['account.d2cc2fce7b0e4537b5bc2d9ca80f1384', 'QboyXL'],
    ['account.c661dbc0aee847809c57fef1d1c04736', 'Ghost']];
  // return AddNewPlayer();

  return (
    <>
      <div className='flex flex-col p-10 gap-2 '>
      {/* <Header/> */}
      <Component players={players} {...pageProps} />
    </div>
    </>

  )
}
