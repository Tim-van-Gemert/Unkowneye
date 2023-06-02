const RenderPlayer = ({ctx, player, x, y, color, prevX, prevY }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();



    // Clear the previous circle by drawing a rectangle with the same dimensions
    // if (prevX != null && prevY != null) {
    //   ctx.clearRect(prevX - 10, prevY - 10, 20, 20);
    // }
  };
  
  export default RenderPlayer;
  