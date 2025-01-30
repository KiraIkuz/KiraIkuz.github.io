/* Juliette Bell-Ludwig
   1/28/2025
   AME 230 Programming For Media Arts 
   Professor Jennifer Weiler
*/

let y;
let x;

function setup() {
    createCanvas(600, 600);
    
}


function draw() {
   
    background(150);

    strokeWeight(2);
    stroke(0);
    fill(255);

    let w = 60;
    let h = 60;
    
    
    for(y = 0; y < height; y += h){
        for(x = 0; x < width; x += w){
            
            let chance = random(0,1);
            let eyeX = x;
            let eyeY = y + 20;
            

            if (chance < .25) {
                stroke(0, 255, 0); 
                strokeWeight(1);
                fill(102, 2, 60);
                triangle(x, y, x + w, y, x + w, y + h);
                fill(0, 127, 255);
                ellipse(eyeX, eyeY, w / 2.5, h / 4);
                
            }

            else if(chance < 0.5) {
                fill(255, 73, 3);
                stroke(255, 50, );
                triangle(x, y, x + w, y + h, x, y + h);
                
            }
 
            else if(chance < 0.75) {
                stroke(0, 0, 255); 
                strokeWeight(1);
                fill(255, 0, 0);
                triangle(x, y, x + w, y, x, y + h);
                fill(50, 205, 50);
                ellipse(eyeX, eyeY, w / 2.5, h / 4);
                
            }

            else {
                stroke(255, 255, 0);
                fill(255);
                triangle(x + w, y, x + w, y + h, x, y + h);
               
            }
        }
    }

    
    noLoop();

}