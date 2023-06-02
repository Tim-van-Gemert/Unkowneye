import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useFetchPlayerData from '../pages/api/PlayerData';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Player({ playerId, pubgApiToken, players }) {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const router = useRouter();
  const { playername } = router.query;

  const playerVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    if (!currentPlayer) {
      const foundPlayer = players.find(
        (player) => player[1].toLowerCase() === playername
      );

      if (foundPlayer) {

        setCurrentPlayer(foundPlayer);
      }
    }
  }, [currentPlayer, playername, players]);

  const { playerStats } = useFetchPlayerData(playerId, pubgApiToken);

  if (playerStats) {

    const tempStats = playerStats.data.attributes.gameModeStats['squad-fpp'];
    const WantedPVPStats = [
      ['Wins', tempStats.wins],
      ['Kills', tempStats.kills],
      ['Assists', tempStats.assists],
      ['Longest Kill', tempStats.longestKill],
      ['Headshot Kills', tempStats.headshotKills],
      ['Total Damage', tempStats.damageDealt]
    ];

    const WantedUtility = [
      ['Boosts', tempStats.boosts],
      ['Heals', tempStats.heals],
      ['Revives', tempStats.revives],
      ['DBNOs', tempStats.dBNOs]
    ];

    const WantedMisc = [
      ['Team Kills', tempStats.teamKills],
      ['Most Survival Time', tempStats.mostSurvivalTime],
      ['Rounds Played', tempStats.roundsPlayed],
      ['Suicides', tempStats.suicides],
      ['Walk Distance', tempStats.walkDistance],
      ['Weapons Acquired', tempStats.weaponsAcquired]
    ];
    

    return (
      <>
      <Head>
        <title>Stats | {currentPlayer[1]}</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={playerVariants}
        className='w-full  p-5 flex gap-12 flex-row'>
          <div className='flex w-fit flex-col gap-6'>
            <div className='flex flex-col'>
              <h1 className='text-[50px] font-primary uppercase -mt-6 '>
                {currentPlayer[1]}
              </h1>
              <div className='text-[10px] font-primary -mt-2 text-[#9D9D9D] uppercase'>
                {currentPlayer[0]}
              </div>
            </div>
            <div className='flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full  gap-12 lg:gap-6'>
              <img
                src='/playerFull.png'
                className='sm:min-h-full hidden sm:block rounded-xl bg-[#9D9D9D10] sm:h-full object-cover'
              ></img>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[24px] font-primary'>BATTLE METRICS</h1>
                <div className='flex flex-col justify-between  h-full gap-4 w-full '>
                  {WantedPVPStats.map((e) => {
                    return (
                      <div
                        key={e[0]}
                        className='font-primary flex  rounded-xl w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '
                      >
                        <div className='font-bold '>{e[0]}</div> :{' '}
                        <div>{e[1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[24px] font-primary uppercase'>miscellaneous</h1>
                <div className='flex flex-col justify-between h-full gap-4 w-full '>
                  {WantedMisc.map((e) => {
                    return (
                      <div
                        key={e[0]}
                        className='font-primary flex rounded-xl w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '
                      >
                        <div className='font-bold '>{e[0]}</div> :{' '}
                        <div>{e[1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[24px] font-primary'>UTILITY</h1>
                <div className='flex flex-col h-full gap-4 w-full '>
                  {WantedUtility.map((e) => {
                    return (
                      <div
                        key={e[0]}
                        className='font-primary flex rounded-xl  w-full flex-row gap-2 bg-[#9D9D9D10] p-3 uppercase '
                      >
                        <div className='font-bold '>{e[0]}</div> :{' '}
                        <div>{e[1]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </>
    );
  } else {
    // return <div>Loading...</div>;
  }
}
