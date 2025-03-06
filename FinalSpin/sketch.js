let wheel;
let angle = 0;

function preload() {
  wheel = loadImage("car_wheel.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  
  let x = width / 2.0;
  let y = height / 2.0;

  translate(x, y);
  rotate(angle);
  

  imageMode(CENTER);
  image(wheel, 0, 0);

  angle += 0.02;
}
