// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// 

window.addEventListener('keydown', KeyHandler)

function KeyHandler(event)
{
    console.log(event);
    if (event.key == "s")
    {
        PlayerOne.y += 5;
    }
    else if (event.key == "w")
    {
        PlayerOne.y -= 5;
    }

    console.log(event);
    if (event.key == "ArrowDown")
    {
        PlayerTwo.y += 5;
    }
    else if (event.key == "ArrowUp")
    {
        PlayerTwo.y -= 5;
    }
}

// 

let PlayerOne = {};

PlayerOne.x = 20;
PlayerOne.y = 350;

PlayerOne.draw = function()
{
    context.fillRect(PlayerOne.x, PlayerOne.y, 20, 100);
}

// 

let PlayerTwo = {};

PlayerTwo.x = 1500;
PlayerTwo.y = 350;

PlayerTwo.draw = function()
{
    context.fillRect(PlayerTwo.x, PlayerTwo.y, 20, 100);
}

// 

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
    PlayerOne.draw();
    PlayerTwo.draw();
    if (ball.x > PlayerTwo.x - ball.width && ball.y > PlayerTwo && ball.y + PlayerTwo.y + )
    {
        ball.speedX = ball.speedX
    }
}

setInterval(loop, 10);