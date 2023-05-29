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

  if (currentPlayer != undefined) {
  console.log(currentPlayer[0].data.attributes.gameModeStats['squad-fpp'])
  const tempStats = currentPlayer[0].data.attributes.gameModeStats['squad-fpp']
  const WantedPVPStats = [['Wins', tempStats.wins], ['Kills', tempStats.kills], ['Assists', tempStats.assists], ['Longest Kill', tempStats.longestKill], ['Headshot Kills', tempStats.headshotKills], ['Total Damage', tempStats.damageDealt]]
  console.log(WantedPVPStats)
    return (
      <div className='w-full h-[525px] min-h-[500px]  flex gap-12 flex-row'>
          <img src='/playerFull.png' className='w-[300px] min-h-full bg-gradient-to-t from-gray-100 to-transparent h-full object-cover'></img>
          <div className='flex w-fit flex-col gap-6  '>
              <div className='flex flex-col'>
                <h1 className='text-[64px] font-primary uppercase -mt-6 '>{currentPlayer[1][1]}</h1>
                <div className='text-[10px] font-primary -mt-4 text-[#9D9D9D] uppercase'>{currentPlayer[1][0]}</div>
              </div>
              <div className='flex flex-col -mb-4'>
                <h1 className='text-[24px] font-primary'>BATTLE METRICS</h1>
              </div>
              <div className=' grid grid-cols-1 gap-4  w-full  h-[25px]'>
                {
                  WantedPVPStats.map((e)=>{
                    return (
                      <div className=' font-primary flex  w-full flex-row gap-2 bg-[#9D9D9D20] p-3 uppercase h-full'><div className='font-bold '>{e[0]}</div> : <div>{e[1]}</div></div>
                    )
                  }) 
                }
              </div>
          </div>
          {/* <Link href={'/'}>GO BACK</Link> */}
      </div>
    );
  }

};


