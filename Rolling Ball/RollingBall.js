
/* Juliette Bell-Ludwig
   1/28/2025
   AME 230 Programming For Media Arts 
   Professor Jennifer Weiler
   This project is supposed to be a ball rolling around our canvas
*/


function setup() {
    createCanvas(600, 600);
}


function draw() {
    let x = random(0, 600);
    let y = random(0, 600);
    background(150);

    fill(255, 0, 0);
    strokeWeight(2);
    
    ellipse(x, y, 50, 50);

    while ((x != 600) || (y != 600)) {
        
        x = x + 50;
        y = y + 50;
        
    }


}