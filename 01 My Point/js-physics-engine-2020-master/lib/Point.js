/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point
{

	constructor(pos,radius,color)
	{
		this.pos = pos;
		this.radius = radius;
		this.color = color;
	}

	draw(context)
	{
		console.log(this.pos.dx, this.pos.dy, this.radius, 0, 2 * Math.PI);
		context.beginPath();
		context.lineWidth = "5";
		context.fillStyle = this.color;
		context.arc(this.pos.dx, this.pos.dy, this.radius, 0, 2 * Math.PI);
		context.closePath();
		context.stroke();
		context.fill();
	}

	Update(pos, radius, color)
	{
		this.pos = pos
		this.radius = radius;
		this.color = color;
	}
}
