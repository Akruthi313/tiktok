var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255); 
  hr=hour();
  mn=minute();
  sc=second();
  hrAngle=map(hr,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);
  translate(400,200);
  rotate(-90);
  push();
    rotate(scAngle);
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
  pop();
  push();
    rotate(mnAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,70,0);
  pop();
  push();
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,50,0);
  pop();
  noFill();
  stroke("red");
  arc(0,0,200,200,0,scAngle);
  stroke("green");
  arc(0,0,170,170,0,mnAngle);
  stroke("blue");
  arc(0,0,150,150,0,hrAngle);
  drawSprites();
}