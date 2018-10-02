var x = 50;
var y = 50;
var up = false;
var left = false;
var speed = 5;
var w = 2560;
var h = 1440;
var ballARR;
function setup() {
    createCanvas(2560, 1440);
    ballARR = [];
    noStroke();
}

function draw() {
    //background(246, 228, 149);
    ballARR.push(new Ball());
    if (frameCount > 500) {
        ballARR.shift();
    }
    ballARR.forEach(ball => {
        ball.draw();
    });
}

class Ball {

    constructor() {
        this.x = random(1, w);
        this.y = random(1, h);
        this.dx = random(-250, 250);
        this.dy = random(-250, 250);
        this.c = [random(0, 255), random(0, 255), random(0, 255)];
        this.r = random(10, 30);
        this.dy /= this.r;
        this.dx /= this.r;
    }

    draw() {
        fill(this.c[0], this.c[1], this.c[2]);
        this.x += this.dx;
        this.y += this.dy;
        if (this.y > h) {
            this.c = [random(0, 255), random(0, 255), random(0, 255)];
            this.dy = -this.dy;
        }
        if (this.y < 0) {
            this.dy = -this.dy;
        }
        if (this.x > w) {
            this.dx = -this.dx;
        }
        if (this.x < 0) {
            this.dx = -this.dx;
        }
        ellipse(this.x, this.y, this.r);
    }

}