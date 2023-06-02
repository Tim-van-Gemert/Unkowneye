import { useEffect, useRef, useState } from 'react';
import processPlayer from './processPlayer';

export default function drawMatch({ telemetryData }) {
  const canvasRef = useRef(null);
  const [showMap, setShowMap] = useState(false);
  const [playerArray, setPlayerArray] = useState([]);

  useEffect(() => {
    if (telemetryData !== undefined) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let rawPrevX = null;
      let rawPrevY = null;

      for (let i = 0; i < telemetryData.length; i++) {
        if (telemetryData[i]?.character) {
            // if (telemetryData[i]?.character.name == 'TIMMAHHH') {
                if (telemetryData[i]?.character?.location) {
                    const player = telemetryData[i]?.character;
                    const RawX = player.location.x;
                    const RawY = player.location.y;
                    const id = player.accountId;
    
                    processPlayer({ ctx, player, RawX, RawY, rawPrevX, rawPrevY });
                    rawPrevX = RawX;
                    rawPrevY = RawY;
                }
            // }
        }
      }

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
