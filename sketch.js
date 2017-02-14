var col = prompt("Please enter a hex color value \n\nClick and drag to draw", "#222222");
if(col == null){col="#222222";}
var dots =[];
var count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('pink');
	//print(col);

}

function draw() {
	for (var i = 0; i < dots.length; i++) {
	 dots[i].display();
	}
	//print(count);
	if (count==900) {
		count=0;
		dots = [];
		createCanvas(windowWidth, windowHeight);
		background('pink');
	}else {
		count++;
	}

}

function mouseDragged() {
	dots.push(new dot());
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function dot() {
	this.x = mouseX;
	this.y = mouseY;
	this.col = col;
	//this.size = random(15, 50);

	this.display = function() {
		//ellipse(this.x, this.y, this.size, this.size);
		stroke(this.col);
		point(this.x, this.y);
	}
}
