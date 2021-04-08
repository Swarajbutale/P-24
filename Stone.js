class Stone {
	constructor(x, y) {
	  var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
	  this.body = Bodies.rectangle(x, y, 70, 30, options);
	  this.width = 150;
	  this.height = 40;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  strokeWeight(3);
	  stroke('black')
	  fill('brown')
	  rectMode(CENTER)
	  rect(0, 0, 70, 30);
	  pop();
	};
  };
  