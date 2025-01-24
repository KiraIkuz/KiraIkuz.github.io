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
        return lightA;
    }
    else {
        return false;
    }

    if (lightA == true) {
        fill(255, 0, 0);
    }

    else {
        fill(255);
    }

    let rectA = rect(100, 250, 75, 75);

    // Second rectangle
    let rectB = rect(200, 250, 75, 75);

    // Third Rectangle
    let rectC = rect(300, 250, 75, 75);

    // Fourth Rectangle
    let rectD = rect(400, 250, 75, 75)




}