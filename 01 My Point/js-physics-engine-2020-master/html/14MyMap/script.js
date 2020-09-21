const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Highres, Lowres, scale, circel, cordinate;

Highres = new Image();
Highres.src = "images/map_highres.jpg";

Lowres = new Image();
Lowres.src = "images/map_lowres.jpg";

// scale.pos.dx = Highres.width / Lowres.width;
// scale.pos.dy = Highres.height / Lowres.height;

circel = new Point(new Vector2d(400, 200), 100, "white", true);

setInterval(animate,10);

function animate()
{
    cordinate = circel.dx - circel.radius;
    cordinate.pos.dy = circel.pos.dy - circel.radius;

    context.clearRect(0,0,width,height);

    // context.drawImage(Highres, 0, 0, 200, 200, 500, 300, 200, 200);
    context.drawImage(Lowres, 0, 0);

    Point.draw(context);

}

