var x=100;
var y=0;

function setup() {
  createCanvas(500,500);
  background(200,0,0);
  frameRate(50);
}

function draw() {
  fill(random(0,200),random(0,300),random(0,300),90);
  textSize(100)
  
  text("hopes",random(40,125),random(100,450));
    fill(random(0,200),random(0,300),random(0,300),90);

  text("dreams",random(40,125),random(100,450));
  text("h",random(50,400),random(100,450));
  text("o",random(50,400),random(100,450));
  text("p",random(50,400),random(100,450));
  text("e",random(50,400),random(100,450));
  text("d",random(50,400),random(100,450));
  text("r",random(50,400),random(100,450));
  text("e",random(50,400),random(100,450));
  text("a",random(50,400),random(100,450))
  text("m",random(50,400),random(100,450));
  fill(0,0,0)
  text("reality",x,y);

  y+=1;
  if (y>500===true){
  	y=100;
  }
  noStroke();
  if (mouseIsPressed===true){
  	fill(random(100,0),random(100,0),random(100,0));
  ellipse(random(0,500),random(0,500),random(50,100),random(50,100));
  textSize(15);
  text("forgotten",random(0,500),random(0,500));
  }
  
}