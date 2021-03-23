const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
/*
let A, B, PosA, PosB, DifAB, DifX, DifY;

A = new Point(new Vector2d(0.2 * width, 0.2 * height), 15, getRandomColor(), true, "A");
B = new Point(new Vector2d(0.8 * width, 0.3 * height), 15, getRandomColor(), true, "B");

PosA = new Vector2d(A.pos.dx, A.pos.dy);
PosB = new Vector2d(B.pos.dx, B.pos.dy);

DifX = new Vector2d(B.pos.dx - A.pos.dx, 0);
DifY = new Vector2d(0, B.pos.dy - A.pos.dy);
DifAB = new Vector2d(B.pos.dx - A.pos.dx, B.pos.dy - A.pos.dy);

animate();

//animation loop
function animate()
{
    context.clearRect(0, 0, width,height);
    requestAnimationFrame(animate);

    PosA.dx = A.pos.dx;
    PosA.dy = A.pos.dy;
    PosB.dx = B.pos.dx;
    PosB.dy = B.pos.dy;

    DifAB.difVector(PosA, PosB);
    DifX.dx = B.pos.dx - A.pos.dx;
    DifY.dy = B.pos.dy - A.pos.dy;

    A.draw(context);
    B.draw(context);

    DifAB.draw(A.pos.dx, A.pos.dx, "yellow", 1);
    DifX.draw(A.pos.dx, A.pos.dx, "red", 1);
    DifY.draw(A.pos.dx, A.pos.dx, "red", 1);

    // PosA.draw(0,0, "White", 1);
    // PosB.draw(0,0, "White", 1);
}
 */

let A, B, posA,posB,difAB,difX,difY;

A = new Point(new Vector2d(0.2*width,0.2*height),20,"red",true,"A");
B = new Point(new Vector2d(0.8*width,0.3*height),20,"blue",true,"B")

posA = new Vector2d(A.pos.dx,A.pos.dy);
posB = new Vector2d(B.pos.dx,B.pos.dy);

difAB = new Vector2d(B.pos.dx-A.pos.dx,B.pos.dy-A.pos.dy);
difX = new Vector2d(B.pos.dx-A.pos.dx,0);
difY = new Vector2d(0,B.pos.dy-A.pos.dy);


animate();


function animate() {
    context.clearRect(0, 0, width, height)
    requestAnimationFrame(animate);
    posA.dx = A.pos.dx;
    posA.dy = A.pos.dy;
    posB.dx = B.pos.dx;
    posB.dy = B.pos.dy;
    difAB.difVector(posB, posA);
    difX.dx = B.pos.dx - A.pos.dx;
    difY.dy = B.pos.dy - A.pos.dy;


    B.draw();

    //posA.draw(0,0,"white",1);
    //posB.draw(0,0,"white",1);
    difAB.draw(A.pos.dx, A.pos.dy, "yellow", 1);
    difX.draw(A.pos.dx, A.pos.dy, "red", 1);
    difY.draw(A.pos.dx, A.pos.dy, "red", 1);

    A.draw();
}