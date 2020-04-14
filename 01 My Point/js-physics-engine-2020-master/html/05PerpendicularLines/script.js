const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,l,m;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
l = new LinearFunction(1,1);
m = new LinearFunction(1,1);

function anime()
{
    context.clearRect(0,0, width,height);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    l.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);
    l.intercept = B.pos.dy - l.slope * B.pos.dx;
    l.draw(context);

    m.slope = -1/l.slope;
    m.intercept = C.pos.dy - C.pos.dx * m.slope;
    m.draw(context);
}

setInterval(anime, 10);