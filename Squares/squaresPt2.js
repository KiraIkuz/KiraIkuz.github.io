function setup() {
    createCanvas(600, 600);
}

let lightA = true;
let lightB = true;
let lightC = true;

function draw() {
    background(150);

    fill(250);
    strokeWeight(4);
    // First rectangle

    if (((mouseX > 100) && (mouseX < 175)) && ((mouseY > 250) && (mouseY < 325))) {
        lightA = true;
    }
    else {
        lightA = false;
    }

    if (lightA == true) {
        fill(255, 0, 0);
    }

    else {
        fill(255);
    }

    let rectA = rect(100, 250, 75, 75);

    // Second rectangle

    if (((mouseX > 200) && (mouseX < 275)) && ((mouseY > 250) && (mouseY < 325)) && (lightA = true)) {
        lightB = true;
    }
    else {
        lightB = false;
    }

    if (lightB == true) {
        fill(0, 255, 0);
    }

    else {
        fill(255);
    }
    let rectB = rect(200, 250, 75, 75);

    // Third Rectangle
    let rectC = rect(300, 250, 75, 75);

    // Fourth Rectangle
    let rectD = rect(400, 250, 75, 75)




}