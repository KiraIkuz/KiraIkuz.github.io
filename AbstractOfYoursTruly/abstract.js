

let photo;

function preload() {
    photo = loadImage("ME.jpg");
}

function setup() {
    createCanvas(800, 800);
    photo.loadPixels();
}

function draw() {
    background(128);
    noStroke();

    for(let i = 0; i < 50000; i += 1) {
        let x = floor(random(width));
        let y = floor(random(height));
        let index = (y * photo.width * 4) + x * 4;

        let r = photo.pixels[index];
        let g = photo.pixels[index+1];
        let b = photo.pixels[index+2];
        let a = random(30, 50);
        fill(r, g, b, a);
        let size = random(0, 20);
        ellipse(x, y, size, size * 2);
        rect(x, y, size / 2, size / 8);
    }
    noLoop();
}