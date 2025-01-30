// sketch.js

/* Juliette Bell-Ludwig
   1/18/2025
   AME 230 Programming For Media Arts 
   Professor Jennifer Weiler
   Bill Cypher PART 2!!!!
   (Variables are below, I have them labeled)
*/
function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(150);

  noStroke();
  
  /* Wanted to use CSS Glow animation, but could not and still
  keep background, so I used Meta AI to help me find way to do 
  CSS glow animation using P5.js so I could keep the background 
  for the assignment. The rest of the assignment is my own 
  original creation, besides the one fill right below this, 
  that was the only thing I used the AI to help with. I have no
  problem sharing chat log, if need be.
  
  P.S. I wanted to make the character glow, as he does
  in the show Gravity Falls, giving him an "otherworldy
  ethereal" presence, and I wanted to keep that true to
  the character.*/


  // Body Glow
  fill(255, 255, 100, 128 + sin(frameCount * 0.04) * 128);
  triangle(300, 190, 190, 405, 415, 405);
  // Hat Glow (Updated Hat Glow after Part 2)
  beginShape();
  vertex(287, 98);
  vertex(312, 98);
  vertex(312, 184);
  vertex(327, 184);
  vertex(327, 192);
  vertex(273, 192);
  vertex(273, 183);
  vertex(287, 183);
  endShape(CLOSE);

  //Left Arm Glow
  beginShape();
  vertex(248, 402);
  vertex(263, 402);
  vertex(263, 478);
  vertex(248, 478);
  endShape(CLOSE);

  // Right Arm Glow
  beginShape();
  vertex(336, 402);
  vertex(351, 402);
  vertex(351, 478);
  vertex(336, 478);
  endShape(CLOSE);

  // Left Leg Glow
  beginShape();
  vertex(265, 402);
  vertex(279, 402);
  vertex(279, 418);
  vertex(290, 412);
  vertex(296, 412);
  vertex(296, 448);
  vertex(280, 448);
  vertex(280, 434);
  vertex(265, 442);
  endShape(CLOSE);

  // Right Leg glow
  beginShape();
  vertex(317, 402);
  vertex(333, 402);
  vertex(333, 452);
  vertex(323, 446);
  vertex(323, 468);
  vertex(307, 468);
  vertex(307, 422);
  vertex(312, 422);
  vertex(317, 424);
  
  endShape(CLOSE);

/* I put my code for the main project down lower so it didn't
get jumbled in with the code for the glow. I created this code
first, in order to help eventually develop the glow code.*/

  stroke(255, 255, 0); // Main Body for Bill
  strokeWeight(1);
  fill(255, 255, 0);
  triangle(300, 200, 200, 400, 405, 400);

  fill(0); // The Hat
  beginShape();
  vertex(290, 100);
  vertex(310, 100);
  vertex(310, 185);
  vertex(325, 185);
  vertex(325, 190);
  vertex(275, 190);
  vertex(275, 185);
  vertex(290, 185);
  endShape(CLOSE);

  // New Variables for Project 2
  let ratioX = mouseX / width;
  let pupilX = ratioX * 30 + 285;
  /* Making this safeguard if statement so that if the user
  goes way past the canvas to the point of "breaking" the 
  character's eye, it will pop back to the center of Bill.
  Still stutters if user keeps moving the cursor, but is
  essentially doing what I want it to.*/
  if (mouseX > 900) {
    mouseX = 310
  }
 
  /*stroke(255, 255, 0); // Main Body for Bill
  strokeWeight(1);
  fill(255, 255, 0);
  triangle(300, 200, 200, 400, 405, 400);*/

  let eyeX = 300;
  let eyeY = 300;
  let eyeSizeOne = 15;
  let eyeSizeTwo = 50;
  let ratioY = mouseY / width;
  let pupilY = ratioY * 15 + 290;


  fill(255); // Eyeball Shape
  stroke(0);
  strokeWeight(2);
  ellipse(eyeX, eyeY, 80, 60);

  fill(0); // Inner Iris
  ellipse(pupilX, pupilY, eyeSizeOne, eyeSizeTwo);

  // Starts the Top Eyelashes
  line(278, 273, 273, 265);
  line(291, 269, 288, 255);
  line(310, 269, 313, 255);
  line(323, 273, 328, 265);

  // Starts the Bottom Eyelashes
  line(285, 328, 278, 339);
  line(300, 330, 300, 344);
  line(317, 328, 325, 339);

 // Starts Brick-Like Structure
  stroke(255, 219, 88);
  line(226, 350, 378, 350); // Top line (Left-to-Right)

  line(235, 350, 235, 368); // Top Left Line

  line(300/*X*/, 350/*Y*/, 300/*X*/, 368/*Y*/); // Top Middle Line

  line(365, 350, 365, 368); // Top Right Line

  line(216, 368, 387, 368); // Middle Line (L-R)

  line(267, 370, 267, 385); // Middle Left Line

  line(332, 370, 332, 385); // Middle Right Line

  line(208, 385, 396, 385); // Bottom Line (L-R)

  line(235, 385, 235, 399); // Bottom Left Line

  line(300, 385, 300, 399); // Bottom Middle Line

  line(365, 385, 365, 399); // Bottom Right Line

  fill(0); //Starts the bowtie
  stroke(0);
  beginShape();
  vertex(282, 355); // Top Left Bow
  vertex(300, 364); // Middle Bow
  vertex(318, 355); // Top Right Bow
  vertex(318, 377); // Bottom Right Bow
  vertex(300, 367); // Bottom Middle Bow
  vertex(282, 377); // Bottom Left Bow
  endShape(CLOSE)

  // Starts the left arm
  beginShape();
  vertex(251, 402);
  vertex(260, 402);
  vertex(260, 475);
  vertex(251, 475);
  endShape(CLOSE);

  // Starts the right arm
  beginShape();
  vertex(339, 402);
  vertex(348, 402);
  vertex(348, 475);
  vertex(339, 475);
  endShape(CLOSE);

  // Starts the left leg
  beginShape();
  vertex(267, 402);
  vertex(276, 402);
  vertex(276, 424);
  vertex(290, 415);
  vertex(293, 415);
  vertex(293, 445);
  vertex(283, 445);
  vertex(283, 429);
  vertex(267, 438);
  endShape(CLOSE);

  // Starts the right leg
  beginShape();
  vertex(320, 402);
  vertex(330, 402);
  vertex(330, 446);
  vertex(320, 440);
  vertex(320, 465);
  vertex(310, 465);
  vertex(310, 425);
  vertex(313, 425);
  vertex(320, 430);
  
  endShape(CLOSE);
 


}
