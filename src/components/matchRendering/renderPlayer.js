const RenderPlayer = ({ctx, player, x, y, color, prevX, prevY }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
  };
  
  export default RenderPlayer;
  