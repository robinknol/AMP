const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A, B, C, S, L, M, dif, position, velocityX, velocityY;

dif = new Vector2d(0,0);

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 45, getRandomColor(), true, "A");
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 45, getRandomColor(), true, "B");
C = new GameObject(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), new Vector2d(0,0), new Vector2d(0,0), getRandomInt(0, length));
S = new Point(new Vector2d(0,0), 15, C.color, false, "S");

X = new GameObject(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), new Vector2d(0,0), new Vector2d(0,0), getRandomInt(0, length));
L = new LinearFunction(1,1);
M = new LinearFunction (1,1)

velocityX = 1;
velocityY = 1;

animate();

//animation loop
function animate() {
    context.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    L.throughTwoPoints(A.pos,B.pos);

    M.slope = -1/L.slope;
    M.intercept = C.pos.dy - C.pos.dx * M.slope;

    S.pos.dx = L.intersection(M).x;
    S.pos.dy = L.intersection(M).y;

    dif.difVector(X.pos, C.pos)

    C.pos.sumVector(C.pos, dif);

    L.draw(context);
    M.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    C.vel.draw(C.pos.dx, C.pos.dy,"red",60);
    S.draw(context);
}