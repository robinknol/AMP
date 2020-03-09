const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let points = [];

for (let i = 0; i < 3; i++)
{
    let x = getRandomInt(0, width);
    let y = getRandomInt(0, height);
    let myPoint = new Point(x, y, 5, "black", i);
    points.push(myPoint);
}

let myPolygon = new Polygon(points);
myPolygon.draw(context);