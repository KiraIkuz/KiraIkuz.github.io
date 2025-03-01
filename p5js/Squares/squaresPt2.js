/* 
    Juliette Bell-Ludwig
    1/23/2025
    AME 230 Programming For Media Arts 
    Professor Jennifer Weiler
*/

function setup() {
    createCanvas(600, 600);
}

let lightA;
let lightB;
let lightC;
let lightD;

function draw() {
    background(150);

    fill(250);
    strokeWeight(4);

    // First rectangle


    if (((mouseX > 100) && (mouseX < 175)) && ((mouseY > 250) && (mouseY < 325))) { //Checks if MouseX and MouseY are inside the first square
        lightA = true;
    } // Didn't do an else statement, because it made rectA false if I wasn't hovering over it


    if (lightA == true) {
        fill(255, 0, 0);
    }

    else {
        fill(255);
    }

    let rectA = rect(100, 250, 75, 75); // I guess I didn't have to do a let variable here, but its nice to know that I can do this for a rect





    // Second rectangle

    if (((mouseX > 200) && (mouseX < 275)) && ((mouseY > 250) && (mouseY < 325)) && (lightA == true)) { // Ditto with mX and mY but with rectB
        lightB = true;
    }

    if (lightB == true) {
        fill(0, 255, 0);
    }

    else {
        fill(255);
    }

    let rectB = rect(200, 250, 75, 75);





    // Third Rectangle

    if (((mouseX > 300) && (mouseX < 375)) && ((mouseY > 250) && (mouseY < 325)) && (lightB == true)) { // Ditto rectC
        lightC = true;
    }

    if (lightC == true) {
        fill(0, 0, 255);
    }

    else {
        fill(255);
    }

    let rectC = rect(300, 250, 75, 75);





    // Fourth Rectangle
    
    fill(255);

    if (((mouseX > 400) && (mouseX < 475)) && ((mouseY > 250) && (mouseY < 325))) { // This one was the easiest
        lightD = true;
    }

    else {
        lightD = false;
    } // Without this statement, D disappeared. I think I also hadn't created lightD at this point.

    if (lightD == true) {
        lightA = false;
        lightB = false;
        lightC = false;
    }

    let rectD = rect(400, 250, 75, 75);


// This program was fun! Definitely easier than the last assignment, but I also think I did it to myself lol

}