/*
Juliette Bell-Ludwig
2/22/2025
AME 230
Jennifer Weiler
*/

// This is just a project that has different degrees of 
// slide on the project



let anim;

let slide = 100;
let sliide = 100;
let sliiide = 100;
let sliiiide = 100;

function setup() {
    createCanvas(600, 600);
    anim = new AnimationTicket();
    anim.duration = 3000;
    reset();
    textFont("Verdana");
}

function draw() {
    background(255, 0 , 100);
    
    fill(200, 0, 0);

    if (anim.isAnimating == true) {
        anim.step();

        slide = anim.linear(100,500);
        sliide = anim.easeInQuad(100,500);
        sliiide = anim.easeOutQuad(100,500);
        sliiiide = anim.easeInOutQuad(100,500);
    }

    textAlign(LEFT, BASELINE);
    textSize(30);
    stroke(0, 255, 0);
    strokeWeight(2);
    fill(0);
    text("Slide", slide, 100);
    text("Sliide", sliide, 200);
    text("Sliiide", sliiide, 300);
    text("Sliiiide", sliiiide, 400);
}

function mousePressed() {
    anim.start();
}

function reset() {
    slide = 100;
    sliide = 100;
    sliiide = 100;
    sliiiide = 100;
}

function keyPressed() {
    if(key == "r") {
        reset();
    }
}

class AnimationTicket {
    constructor() {
        this.isAnimating = false;

        this.t = 0.0;

        this.startTime = millis();

        this.duration = 3000;

    }

    start() {
        this.isAnimating = true;
        this.startTime = millis();
        this.t = 0.0;
    }

    step() {
        if(this.isAnimating == false) {
            return;
        }
        let currentMillis = millis();
        let timeElapsed = currentMillis - this.startTime;
        this.t = timeElapsed / this.duration;
        if (timeElapsed >= this.duration) {
            this.isAnimating = false;
            this.t = 1.0;
        }
    }

    linear(start, end) {
        return start + (end - start) * this.t;
    }

    easeInQuad(start, end) {
        return start + (end - start) * (this.t * this.t);
    }

    easeOutQuad(start, end) {
        return start + (end - start) * (1 - (1 - this.t) * (1 - this.t));
    }

    easeInOutQuad(start, end) {
        if (this.t < 0.5) {
            return start + (end - start) * (2 * this.t * this.t);
        } else {
            return start + (end - start) * (1 - Math.pow(-2 * this.t + 2, 2) / 2);
        }
    }
}