import { useEffect, useRef, useState } from 'react';

export default function drawMatch({ telemetryData }) {
    const canvasRef = useRef(null);
    const [showMap, setShowMap] = useState(false)            
    //CHANGE THIS TO CURRENT MAP
    const background = new Image();
    background.src = "/erangel.png";


    const processPlayer = (ctx, RawX, RawY, rawPrevX, rawPrevY) => {
        // 8X8
        // 10X100

        // 500 h
        // 500 w

        //8000 : 8000 = 1
        //500 : 8000 = 0.0625

        // Tranformer Cords = {RawX * 0.0652, RawY * 0.0652}

        const x = RawX * 0.0652 / 10;
        const y = RawY * 0.0652 / 10;
        const prevX = rawPrevX * 0.0652 / 10;
        const prevY = rawPrevY * 0.0652 / 10;
        const color = 'yellow';
        console.log(x)

        renderPlayer(ctx, x, y, color, prevX, prevY);
    };

    const renderPlayer = (ctx, x, y, color, prevX, prevY) => {

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
        
        // ctx.drawImage(background, 0, 0);
        // if (prevX != null || prevY != null) {
        //     ctx.clearRect(prevX - 10, prevY - 10, 20, 20);
        // }

    };

    useEffect(() => {
        if (telemetryData != undefined) {
            console.log(telemetryData)

            // Make sure the image is loaded first otherwise nothing will draw.
            background.onload = function () {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                let rawPrevX = null;
                let rawPrevY = null;

                for (let i = 0; i < telemetryData.length; i++) {
                    if (telemetryData[i]?.common?.isGame == 1 && telemetryData[i]?.character) {
                        if (telemetryData[i]?.character?.location) {
                            setTimeout(function () {
                                const RawX = telemetryData[i].character.location.x;
                                const RawY = telemetryData[i].character.location.y;
                                processPlayer(ctx, RawX, RawY, rawPrevX, rawPrevY)
                                rawPrevX = RawX;
                                rawPrevY = RawY;
                            }, 100);

                        }
                    }

                    setShowMap(true)

                }
            }
        }

        // Use the telemetryData to draw the canvas content
        // Implement your drawing logic here using the telemetryData

    }, [telemetryData]);

    return (
        <div className={`w-full  h-full  ${showMap ? 'flex' : 'hidden'} justify-start align-items p-5`}>
            <canvas className={`object-cover w-[500px] ${showMap ? 'flex' : 'hidden'} rounded-2xl h-[500px]  `} ref={canvasRef} width={1400} height={1400} />
        </div>
    );

}

