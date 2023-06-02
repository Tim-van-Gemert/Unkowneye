const RenderPlayer = ({ ctx, player, x, y, color, prevX, prevY }) => {

    const playerCircle = {
        id: player.accountId,
        xCord: x,
        yCord: y,
        radius: 10,
        playerColor: color,
    };

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(playerCircle.xCord, playerCircle.yCord, playerCircle.radius, 0, 2 * Math.PI);
    ctx.fill();


    // if (prevX != null || prevY != null) {
    //     ctx.clearRect(prevX - 10, prevY - 10, 20, 20);
    // }
};



export default RenderPlayer;
