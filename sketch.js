function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  noFill();
  stroke(255,100,150);
  secAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,315,300,0,secAngle);

  stroke(150,100,100);
  minAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,260,280,0,minAngle);

  stroke(150,255,150);
  hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0,0,280,280,0,hourAngle);

  push();
  rotate(secAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(150,100,100);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150,255,150);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);

  drawSprites();
}