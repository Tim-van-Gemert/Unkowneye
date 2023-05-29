import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Player (props) {
  const [currentPlayer, setCurrentPlayer] = useState()
  const router = useRouter();
  const { name } = router.query;

  if (currentPlayer == undefined) {
  props.playersStats.map((player)=>{
    console.log(player)
    if (player[1][1].toLowerCase() == name) {
      setCurrentPlayer(player)
    }   
  })
  }

  console.log(currentPlayer)
  if (currentPlayer != undefined) {
    return (
      <div className='w-full h-full flex gap-12 flex-row'>
          <img src='/player.png' className='w-[300px] bg-[#DADADA] h-[300px] object-cover'></img>
          <div className='flex flex-col'>
              <h1 className='text-[64px] -mt-6  uppercase'>{currentPlayer[1][1]}</h1>
              <div className='text-[12px] -mt-4 text-[#9D9D9D] uppercase'>{currentPlayer[1][0]}</div>
          </div>
          {/* <Link href={'/'}>GO BACK</Link> */}
      </div>
    );
  }

};


