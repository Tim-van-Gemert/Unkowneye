import Player from '../components/player';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FetchMatchData from './api/MachData';
import DrawMatch from '@/components/matchRendering/renderMatch';
import Link from 'next/link';

export default function Stats(props) {
  // Assuming you have the playerId and pubgApiToken available
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const router = useRouter();
  const { playername } = router.query;

  useEffect(() => {
    if (!currentPlayer) {
      const foundPlayer = props.players.find(
        (player) => player[1].toLowerCase() === playername
      );

      if (foundPlayer) {
        setCurrentPlayer(foundPlayer);
      }
    }
  }, [currentPlayer, playername, props.players]);


  return (
    <>
      {currentPlayer && (
        <div className='flex flex-col  gap-12 '>
          <Player
            playerId={currentPlayer[0]}
            pubgApiToken={process.env.NEXT_PUBLIC_PUBGAPI}
            players={props.players}
            currentPlayer={currentPlayer}
          />
          {/* <FetchMatchData
           pubgApiToken={process.env.NEXT_PUBLIC_PUBGAPI}
           />
           <DrawMatch/> */}
        </div>
      )}
    </>
  );
}