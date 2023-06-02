import { useEffect, useRef, useState } from 'react';

export default function drawMatch({ telemetryData }) {
  const canvasRef = useRef(null);
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    if (telemetryData != undefined) {
    const testX = telemetryData[99].character.location.x;
    const testY = telemetryData[99].character.location.y;
    
    //CHANGE THIS TO CURRENT MAP
    const background = new Image();
    background.src = "/erangel.png";

    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        ctx.scale(1, 1)
        ctx.drawImage(background,0,0);   
        setShowMap(true)
    }
    }

    // Use the telemetryData to draw the canvas content
    // Implement your drawing logic here using the telemetryData

  }, [telemetryData]);

    return (
        <div className={`w-full  h-full  ${showMap ? 'flex' : 'hidden'} justify-start align-items`}>
            <canvas className={`object-cover w-[500px] ${showMap ? 'flex' : 'hidden'} rounded-2xl h-[500px] `} ref={canvasRef}  width={1400} height={1400} />
        </div>
    );

}

