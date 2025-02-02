//
// Bounce1
// A simple bouncing ball - it has perfect bounces,
// it never slows down.

// These variables store the position, size, and speed.
  let positionX = 300;
  let positionY = 300;
  let radius = 20;
  let velocityX = 3;
  let velocityY = 5;
  let r;
  let g;
  let b;

function setup() {
  createCanvas(600, 600);
}




function draw() {
  background(220);

  const rightEdge = width;
  const leftEdge = 0;
  const topEdge = 0;
  const bottomEdge = height;


  drawBackground(rightEdge, leftEdge, topEdge, bottomEdge);
  drawBall(positionX, positionY, radius, r, g, b);
}





function drawBackground(rightEdge, leftEdge, topEdge, bottomEdge) {
   let newBoxWidth = rightEdge - 200; //This is the new box width (-200 for 100 on both sides)
   let newBoxHeight = bottomEdge - 200; //This is the new box height (-200 for 100 on both sides)
   let newBoxLeft = leftEdge + 100;
   let newBoxTop = topEdge + 100;

  
  rect(newBoxLeft, newBoxTop, newBoxWidth, newBoxHeight);
  moveBall(newBoxWidth, newBoxLeft, newBoxHeight, newBoxTop);
}




function drawBall(positionX, positionY, radius, r, g, b) {
  fill(r, g, b);
  ellipse(positionX, positionY, radius * 2, radius * 2);
  fill(255);
  
}



function moveBall(newBoxWidth, newBoxLeft, newBoxHeight, newBoxTop )

{
  
  // move the ball
  positionX = positionX + velocityX;
  positionY = positionY + velocityY;


  if (positionX + radius > newBoxWidth + 100) {
    // hit the right edge
    velocityX = velocityX * -1; 
    positionX = (newBoxWidth + 100) - radius;

    changeColor();
  }
  else if (positionX - radius < newBoxLeft) {
    // hit the left edge
    velocityX = velocityX * -1;
    positionX = newBoxLeft + radius;

    changeColor();
  }

  if (positionY + radius > newBoxHeight + 100) {
    // hit the bottom edge
    velocityY = velocityY * -1; 
    positionY = (newBoxHeight + 100) - radius;

    changeColor();
  }
  else if (positionY - radius < newBoxTop) {
    // hit the top edge
    velocityY = velocityY * -1;
    positionY = newBoxTop + radius; 

    changeColor();
  }


}

function changeColor() {

  r = random(255);
  g = random(255);
  b = random(255);

  

}