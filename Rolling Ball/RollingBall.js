/* Juliette Bell-Ludwig
   1/28/2025
   AME 230 Programming For Media Arts 
   Professor Jennifer Weiler
   This project is supposed to be a ball rolling around our canvas
*/

let x;
let y;

function setup() {
    createCanvas(600, 600);
    x = 300;
    y = 300;
}


function draw() {
   
    background(150);

    fill(255, 0, 0);
    strokeWeight(2);
    
    ellipse(x, y, 50, 50);

    


}