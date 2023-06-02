import { useEffect, useRef, useState } from 'react';
import processPlayer from './processPlayer';

export default function drawMatch({ telemetryData }) {
  const [showMap, setShowMap] = useState(false);
  const [playerArray, setPlayerArray] = useState([]);
  
  const canvasRef = useRef(null); // Declare canvasRef outside of the Initiate function

  useEffect(() => {
    if (telemetryData !== undefined) {
      Initiate(canvasRef, telemetryData)
      setShowMap(true);
    }
  }, [telemetryData]);

  useEffect(() => {
    console.log(playerArray);
  }, [playerArray]);

  return (
    <div className={`w-full h-full ${showMap ? 'flex' : 'hidden'} justify-start align-items p-5`}>
      <canvas className={`object-cover w-[500px] bg-cover bg-[url('/erangel.png')] ${showMap ? 'flex' : 'hidden'} rounded-2xl h-[500px] `} ref={canvasRef} width={1400} height={1400} />
    </div>
  );
}

async function Initiate(canvasRef, telemetryData) { // We need to wrap the loop into an async function for this to work
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  let rawPrevX = null;
  let rawPrevY = null;
  for (let i = 0; i < telemetryData.length; i++) {
    if (telemetryData[i]?.character) {
      if (telemetryData[i]?.character?.location) {
        const player = telemetryData[i]?.character;
        const RawX = player.location.x;
        const RawY = player.location.y;
        const id = player.accountId;
        processPlayer({ ctx, player, RawX, RawY, rawPrevX, rawPrevY });
        rawPrevX = RawX;
        rawPrevY = RawY;
      }
    }
    await timer(10); // then the created Promise can be awaited
  }
}

function timer(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}