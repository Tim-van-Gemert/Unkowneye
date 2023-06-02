const ClearCanvas = ({ ctx, playerIds }) => {
  const dotArray = Array.from(playerIds);
	console.log(dotArray)
  dotArray.forEach((player) => {
    const x = player.xCord;
    const y = player.yCord;
    const radius = 10;

    ctx.save(); // Save the current canvas state
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Create a circular path
    ctx.clip(); // Clip the drawing to the circular area
    ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2); // Clear the circular area
    ctx.restore(); // Restore the previous canvas state
  });
};

export default ClearCanvas;
