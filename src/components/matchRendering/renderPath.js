const RenderPath = ({ctx, player, x, y, color, prevX, prevY }) => {

  // Draw the path
  if (player.name == 'TIMMAHHH') {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY); // Move to the previous coordinates
    ctx.lineTo(x, y); // Draw a line to the current coordinates
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

}
  export default RenderPath;
  