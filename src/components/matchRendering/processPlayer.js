import React, { useState } from 'react';
import RenderPlayer from './renderPlayer';
import RenderPath from './renderPath';
const processPlayer = ({ ctx, player, RawX, RawY, rawPrevX, rawPrevY, setPlayerArray }) => {

  // Karakin cords calculations
  // Canvas Width && Height: 500 x 500
  // Karakin Width && Height: 2000 x 2000
  // Formula: 500 : 2000 = 0.25

  // Erangel cords calculations
  // Canvas Width && Height: 1200 x 1200
  // Karakin Width && Height: 8000 x 8000
  // Formula: 1200 : 8000 = 0.0652

  const x = RawX * 0.6/ 100;
  const y = RawY * 0.6/ 100;
  const prevX = rawPrevX * 0.6 / 100;
  const prevY = rawPrevY * 0.6 / 100;
  let color = 'white';


  const playerCircle = {
    name: player.name,
    id: player.accountId,
    xCord: x,
    xPrev: prevX,
    yCord: y,
    yPrev: prevY,
    radius: 10,
    playerColor: color,
  };

  setPlayerArray((prevArray) => {
    if (!prevArray.some((p) => p.id === player.accountId)) {
      return [...prevArray, playerCircle];
    }
    return prevArray;
  });

  return RenderPlayer({ ctx, player, x, y, color, prevX, prevY });
  // return RenderPath({ ctx, player, x, y, color, prevX, prevY });
};

export default processPlayer;
