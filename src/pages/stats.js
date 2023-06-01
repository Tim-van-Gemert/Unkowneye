import Player from '../components/player';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FetchMatchData from './api/MachData';

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
        <>
          <Player
            playerId={currentPlayer[0]}
            pubgApiToken={process.env.NEXT_PUBLIC_PUBGAPI}
            players={props.players}
            currentPlayer={currentPlayer}
          />
          <FetchMatchData
           pubgApiToken={process.env.NEXT_PUBLIC_PUBGAPI}
           />
        </>
      )}
    </>
  );
}