const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let car, wheel, background, angle, LR;

car ={};
car.image = new Image();
car.image.src = "images/car.png"
car.pos = 0;
car.speed = 2;

wheel = {};
wheel.image = new Image()
wheel.image.src = "images/wheel.png";
wheel.backAngle = 0;

addEventListener('keydown',(e)=>
{
    switch(e.key)
    {
        case "ArrowRight":
            car.speed += 0.5
            LR = true;
            break;
        
        case "ArrowLeft":
            car.speed -= 0.5
            LR = false;
            break;
    }
})

car.image.addEventListener('load',()=>
{
    setInterval(animate,10)
})

function animate()
{
    context.clearRect(0,0,width,height);

    context.drawImage(car.image,car.pos,0);

    context.save()
    context.translate(car.pos + 213,200)
    context.rotate(wheel.backAngle);
    context.drawImage(wheel.image, -wheel.image.width/2, -wheel.image.height/2)
    context.restore()  

    car.pos += car.speed;
    if(car.pos > width)
    {
      car.pos = -car.image.width
    }
    if(car.pos < -car.image.width)
    {
      car.pos = width;
    }

    if (LR = true)
    {
        wheel.backAngle += 0.2;        
    }
    if (LR = false)
    {
        wheel.backAngle -= 0.2;
    }
    console.debug(wheel.backAngle);
}