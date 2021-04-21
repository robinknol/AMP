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
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 15, getRandomColor(), false, "C", dif);
S = new Point(new Vector2d(0,0), 15, C.color, false, "S");

L = new LinearFunction(1,1);
M = new LinearFunction (1,1)


position = C.pos;
velocityX = 1;
velocityY = 1;

animate();

//animation loop
function animate() {
    context.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    // L.throughTwoPoints(A.pos,B.pos);
    L.throughTwoPoints(A.pos,B.pos);

    M.slope = -1/L.slope;
    M.intercept = C.pos.dy - C.pos.dx * M.slope;

    S.pos.dx = L.intersection(M).x;
    S.pos.dy = L.intersection(M).y;

    position.dx += velocityX;
    position.dy += velocityY;

    /*
    switch (true)
    {
        case (position.dx > width):
            velocityX = -1;
            break;
        case (position.dx < 0):
            velocityX = 1;
            break;
        case (position.dy > height):
            velocityY = -1;
            break;
        case (position.dy < 0):
            velocityY = 1;
            break;
    }
    */

    switch (true)
    {
        case (position.dx > width):
            velocityX = -1;
            break;
        case (position.dx < 0):
            velocityX = 1;
            break;
        case (position.dy > height):
            velocityY = -1;
            break;
        case (position.dy < 0):
            velocityY = 1;
            break;
    }

    dif.magnitude = 1;
    // dif.sumVector(S.pos, position);

    L.draw(context);
    M.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    C.vel.draw(position.dx, position.dy,"red",60);
    S.draw(context);
}