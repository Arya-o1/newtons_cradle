// class Ball{
// 	constructor(x,y)
// 	{
// 		var options={
// 		isStatic:false,
// 		restitution:0.3,
// 		friction:0.5,
// 		density:1.2
// 		}
		
// 		this.body=Bodies.circle(x, y, (50)/2, options);
// 		this.r=r;
//         this.image = loadImage("paper.png")
// 		World.add(world, this.body);

// 	}
// 	display()
// 	{
			
// 			var paperpos=this.body.position;		

// 			push()
// 			translate(paperpos.x, paperpos.y);
// 			// rectMode(CENTER)
// 			// //strokeWeight(4);
// 			// fill(255)
// 			// ellipse(0,0,this.r,this.r);
// 			image(this.image,0,0,40,40)
// 			pop()
			
// 	}

// }


class Ball{
	constructor(x,y){
		var options = {
			isStatic:false,
			restitution:1.2,
			friction:0.4,
			density:1.5
		}
	this.body = Bodies.circle(x,y,18,options);
	
    World.add(world,this.body);
	}
	display(){
		var pos = this.body.position
		ellipseMode(RADIUS);
		fill("red");
		ellipse(pos.x,pos.y,18,18);
	}
}