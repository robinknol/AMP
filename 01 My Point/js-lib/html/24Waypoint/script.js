const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dif;
let point = [];
let circle = [];
let length = 10;
// let num = length;
let num2 = 3;

for (let i = 0; i <= length; i++)
{
    circle[i] = new GameObject(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), new Vector2d(0,0), new Vector2d(0,0));
    point[i] = new GameObject(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)),  new Vector2d(0,0), new Vector2d(0,0), getRandomInt(0, length));
}

dif = new Vector2d(0,0);

animate();

//animation loop
function animate() {
    context.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    for (let i = 0; i <= length; i++)
    {
        circle[i].draw(context);
        point[i].draw(context);
        if (point[i].pos.dx < circle[point[i].test].pos.dx + num2 && point[i].pos.dx > circle[point[i].test].pos.dx - num2 && point[i].pos.dy > circle[point[i].test].pos.dy - num2 && point[i].pos.dy < circle[point[i].test].pos.dy + num2)
        {
            point[i].test += 1;
            if (point[i].test > length)
            {
                point[i].test = 0;
            }
        }

        dif.difVector(circle[point[i].test].pos, point[i].pos);

        dif.magnitude = 2;

        dif.draw(point[i].pos.dx, point[i].pos.dy, getRandomColor(), 50);

        point[i].pos.sumVector(point[i].pos, dif);

    }
}