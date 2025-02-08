
let circle = [];

function setup() {
    createCanvas(600, 600);

    let a = 0;
    let radius = 1;
    let size = 3;

    while (a < 20.0) {
        let x1 = cos(a) * radius + 300;
        let y1 = sin(a) * radius + 300;
        let x2 = cos(-a) * radius + 300;
        let y2 = sin(-a) * radius + 300;

        let c1 = new Circle(x1, y1, size);
        let c2 = new Circle(x2, y2, size);
        circle.push(c1);
        circle.push(c2);

        a += 0.1;
        radius += 2;
        size += 0.1
    }
}

function draw() {
    background(130);

    for(let i = 0; i < circle.length; i++) {
        circle[i].render();
    }
}

class Circle {
    constructor(newX, newY, newRadius) {
        this.x = newX;
        this.y = newY;
        this.radius = newRadius;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    render() {
        
        fill(this.r, this.g, this.b);
        beginShape();

        ellipse(this.x, this.y, (this.radius * 2), (this.radius * 2));
        endShape(CLOSE);
    }
}