const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dPoint, bumper, vel, difBumper, difA, difB;

difBumper = new Vector2d(0,0);
difA = new Vector2d(0,0);
difB = new Vector2d(0,0);

vel = 1;

dPoint = new GameObject(new Vector2d(width/2, height/2), new Vector2d(0,0 ), new Vector2d(0,0), 200);
bumper = new GameObject(new Vector2d(550, 100), new Vector2d(vel,vel ), new Vector2d(0,0), 50)

animate();

function animate()
{
    context.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    difBumper.difVector(new Vector2d(bumper.vel.dx, bumper.vel.dy), new Vector2d(0,0));
    difA.difVector(new Vector2d(dPoint.pos.dx, dPoint.pos.dy), new Vector2d(bumper.pos.dx,bumper.pos.dy));
    difB.difVector(new Vector2d(bumper.vel.dx - dPoint.pos.dx, bumper.vel.dy - dPoint.pos.dy), new Vector2d(0,0))

    difBumper.magnitude = bumper.vel.magnitude;
    difA.magnitude = 1;
    difA.magnitude = difBumper.dotProduct(difA);
    difB.magnitude = 1;
    difB.magnitude = difBumper.dotProduct(difB);

    bumper.update(context);
    difBumper.draw(bumper.pos.dx, bumper.pos.dy, "red", 50);
    difA.draw(bumper.pos.dx, bumper.pos.dy, "blue", 100);
    difB.draw(bumper.pos.dx, bumper.pos.dy, "green", 100);
    dPoint.draw(context);
    bumper.draw(context);
}