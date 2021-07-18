const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A, B, C, vel, S, L, M, difA, difB, difC, difBC;

difA = new Vector2d(0,0);
difB = new Vector2d(0,0);
difC = new Vector2d(0,0);
difBC = new Vector2d(0,0);

vel = 2.5;
A = new Point(new Vector2d(215, 166), 45, getRandomColor(), true, "A");
B = new Point(new Vector2d(862, 565), 45, getRandomColor(), true, "B");

C = new GameObject(new Vector2d(300, 900), new Vector2d(vel,vel ), new Vector2d(0,0));//, getRandomInt(0, 10));

S = new Point(new Vector2d(0,0), 15, C.color, false, "S");

L = new LinearFunction(1,1);
M = new LinearFunction (1,1);

animate();

//animation loop
function animate()
{
    context.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    L.throughTwoPoints(A.pos,B.pos);

    M.slope = -1/L.slope;
    M.intercept = C.pos.dy - C.pos.dx * M.slope;

    S.pos.dx = L.intersection(M).x;
    S.pos.dy = L.intersection(M).y;

    difA.difVector(new Vector2d(C.vel.dx, C.vel.dy), new Vector2d(0,0));
    difB.difVector(new Vector2d(S.pos.dx, S.pos.dy), new Vector2d(C.pos.dx,C.pos.dy));
    difC.difVector(new Vector2d(A.pos.dx - B.pos.dx, A.pos.dy - B.pos.dy), new Vector2d(0,0));

    difA.magnitude = C.vel.magnitude;
    difB.magnitude = 1;
    difB.magnitude = difA.dotProduct(difB);
    difC.magnitude = 1;
    difC.magnitude = difA.dotProduct(difC);

    if(C.pos.dx < S.pos.dx + S.radius/2 && C.pos.dx > S.pos.dx - S.radius/2 && C.pos.dy < S.pos.dy + S.radius/2 && C.pos.dy > S.pos.dy - S.radius/2)
    {
        difB.magnitude *= -1;

        difBC.sumVector(difB,difC)
        C.vel.dx = difBC.dx;
        C.vel.dy = difBC.dy;
        // difBC.magnitude = difB.magnitude + difA.magnitude;
        // C.vel.magnitude = difBC.magnitude;
        // console.log(C.vel.magnitude);
        // console.log(difB.magnitude + difC.magnitude);
        // C.vel.dx *= -1;
        // C.vel.dy *= -1;
    }
    C.update(context);

    // console.log(C.vel.magnitude);
    L.draw(context);
    M.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    difA.draw(C.pos.dx, C.pos.dy, "red", 50);
    difB.draw(S.pos.dx, S.pos.dy, "blue", 50);
    difC.draw(S.pos.dx, S.pos.dy, "green", 50);
    S.draw(context);
}