import React from 'react';
import RenderPlayer from './renderPlayer';

const processPlayer = ({ctx, player, RawX, RawY, rawPrevX, rawPrevY}) => {

    const x = RawX * 0.0652 / 10;
    const y = RawY * 0.0652 / 10;
    const prevX = rawPrevX * 0.0652 / 10;
    const prevY = rawPrevY * 0.0652 / 10;
    let color = 'yellow'

    if (player.name == 'TIMMAHHH') {
        console.log(color)
        color = '#FF0000'
    } 
    // if (prevX != null || prevY != null) {
    //     ctx.clearRect(prevX - 10, prevY - 10, 20, 20);
    // }

    RenderPlayer({ ctx, player, x, y, color, prevX, prevY });

    
};

export default processPlayer;
