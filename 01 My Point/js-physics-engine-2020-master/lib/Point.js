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

	constructor(pos,radius,color,draggable)
	{
		this.pos = pos;
		this.radius = radius;
		this.color = color;
		this.draggable = draggable || false;

		if (draggable)
		{
			this.drag();
		}
	}

	drag()
	{
		let mouse = {};
		let distance;
		let dragging = false;

		addEventListener('mousedown',(evt)=>
		{
			mouse.x = evt.clientX;
			mouse.y = evt.clientY;
			console.log(mouse);

			let dx = this.pos.dx - mouse.x;
			let dy = this.pos.dy - mouse.y;
			distance = Math.sqrt(dx*dx + dy*dy);

			if(distance < this.radius)
			{
				dragging = true;
			}
			else
			{
				dragging = false;
			}
			console.log(dragging);
			console.log(distance);
		})


		addEventListener('mousemove', (evt)=>
		{
			if(dragging)
			{
				this.pos.dx = evt.clientX;
				this.pos.dy = evt.clientY;
			}
		})

		addEventListener('mouseup', (evt)=>
		{
			dragging = false;
		})
	}

	draw(context)
	{
		console.log(this.pos.dx, this.pos.dy, this.radius, 0, 2 * Math.PI, this.color);
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
