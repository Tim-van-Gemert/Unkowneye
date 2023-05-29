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

  const WantedUtility = [['Boosts', tempStats.boosts], ['Heals', tempStats.heals], ['Revives', tempStats.revives], ['DBNOs', tempStats.dBNOs]]

  const WantedMisc = [['Team Kills', tempStats.teamKills], ['Most Survival Time', tempStats.mostSurvivalTime], ['Rounds Played', tempStats.roundsPlayed], ['suicides', tempStats.suicides], ['Walk Distance', tempStats.walkDistance], ['Weapons Acquired', tempStats.weaponsAcquired]]

  console.log(WantedPVPStats)
    return (
      <>
      <div className='w-full  p-5 flex gap-12 flex-row'>

          <div className='flex w-fit flex-col gap-6  '>
              <div className='flex flex-col'>
                <h1 className='text-[50px] font-primary uppercase -mt-6 '>{currentPlayer[1][1]}</h1>
                <div className='text-[10px] font-primary -mt-2 text-[#9D9D9D] uppercase'>{currentPlayer[1][0]}</div>
              </div>
              <div className='flex grid grid-cols-4 w-full h-full gap-6'>
              <img src='/playerFull.png' className=' min-h-full rounded-xl bg-[#9D9D9D10] h-full object-cover'></img>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[24px] font-primary'>BATTLE METRICS</h1>

                  <div className=' flex flex-col justify-between  h-full gap-4 w-full '>
                    {
                      WantedPVPStats.map((e)=>{
                        return (
                          <div className=' font-primary flex  rounded-xl w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '><div className='font-bold '>{e[0]}</div> : <div>{e[1]}</div></div>
                        )
                      }) 
                    }
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[24px] font-primary uppercase'>miscellaneous</h1>

                  <div className=' flex flex-col justify-between h-full gap-4 w-full '>
                    {
                      WantedMisc.map((e)=>{
                        return (
                          <div className=' font-primary flex rounded-xl w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '><div className='font-bold '>{e[0]}</div> : <div>{e[1]}</div></div>
                        )
                      }) 
                    }
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[24px] font-primary'>UTILITY</h1>

                  <div className=' flex flex-col h-full gap-4 w-full '>
                    {
                      WantedUtility.map((e)=>{
                        return (
                          <div className=' font-primary flex rounded-xl  w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '><div className='font-bold '>{e[0]}</div> : <div>{e[1]}</div></div>
                        )
                      }) 
                    }
                  </div>
                </div>
              </div>
              
          </div>
      </div>
      <Link href={'/'}>GO BACK</Link>
      </>
    );
  }

};

