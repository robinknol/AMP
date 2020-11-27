const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let PointA, PointB, Arrow;

PointA = new Point(new Vector2d(100, 100), 30, getRandomColor(), true, "A");
PointB = new Point(new Vector2d(400, 300), 30, getRandomColor(), true, "B");

Arrow = {};
Arrow.sw = 150;
Arrow.sh = 10;
Arrow.hh = 20;
Arrow.hw = 60;
Arrow.color = getRandomColor();

Arrow.draw = function()
{
    context.beginPath();
    context.fillStyle = Arrow.color;
    context.moveTo(0, 0);
    context.lineTo(0, Arrow.sh);
    context.lineTo(Arrow.sw, Arrow.sh);
    context.lineTo(Arrow.sw, Arrow.hh);
    context.lineTo(Arrow.sw + Arrow.hw, -Arrow.hh);
    context.lineTo(Arrow.sw, -Arrow.hh);
    context.lineTo(Arrow.sw, -Arrow.sh);
    context.lineTo(0, -Arrow.sh);
    context.closePath();
    context.stroke();
    context.fill();
}

animate();

function animate()
{
    context.clearRect(0, 0, width, height);
    window.requestAnimationFrame(animate);
    PointA.draw();
    PointB.draw();
    Arrow.draw();
}