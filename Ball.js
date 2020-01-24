let ball = {};

ball.x = 300;
ball.y = 350;
ball.speedX = 3;
ball.speedY = 4;

ball.update = function()
{
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    ball.width = 20;
    if (ball.y > canvas.height - ball.width)
    {
        ball.speedY = -ball.speedY;
    }
    
    if (ball.y < 0)
    {
        ball.speedY = -ball.speedY;
    }
    
    if (ball.x > canvas.width)
    {
        ball.x = canvas.width/2;
    }
    
    if (ball.x < -ball.width)
    {
        ball.x = canvas.width/2;
    }
}

ball.draw = function()
{
    context.fillRect(ball.x, ball.y, 20, 20);
}

function loop()
{
    context.clearRect(0,0,width,height);
    ball.update();
    ball.draw();
}

setInterval(loop, 10);