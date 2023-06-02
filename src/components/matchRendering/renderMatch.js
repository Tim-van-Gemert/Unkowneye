import { useEffect, useRef, useState } from 'react';
import processPlayer from './processPlayer';

export default function drawMatch({ telemetryData }) {
  const [showMap, setShowMap] = useState(false);
  const [playerArray, setPlayerArray] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (telemetryData !== undefined) {
      Initiate(canvasRef, telemetryData, setPlayerArray);
      setShowMap(true);
    }
  }, [telemetryData]);

  useEffect(()=>{
    console.log(playerArray)
  },[playerArray])

  return (
    <div className={`w-full h-full ${showMap ? 'flex' : 'hidden'} justify-start align-items p-5`}>
      <canvas className={`object-cover w-[500px] bg-cover bg-[url('/karakin.jpg')] ${showMap ? 'flex' : 'hidden'} rounded-2xl h-[500px] `} ref={canvasRef} width={1200} height={1200} />
    </div>
  );
}

async function Initiate(canvasRef, telemetryData, setPlayerArray) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  let rawPrevX = null;
  let rawPrevY = null;
  const playerIds = new Set();

  for (let i = 2500; i < telemetryData.length; i++) {
    if (telemetryData[i]?.character) {
        if (telemetryData[i]?.character?.location) {
          const player = telemetryData[i]?.character;
          const RawX = player.location.x;
          const RawY = player.location.y;
          const id = player.accountId;

          if (!playerIds.has(id)) {
            playerIds.add(id);
            processPlayer({ ctx, player, RawX, RawY, rawPrevX, rawPrevY, setPlayerArray });
          } else if (playerIds.size == 64 ){
            console.log( playerIds.size)
            playerIds.clear()
          }
          rawPrevX = RawX;
          rawPrevY = RawY;
        }
      }

      await timer(100);
    }


}


function timer(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
