const canvas = document.getElementById("main-canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#FFFFFF"

const centerPos = {x: innerWidth/2, y: innerHeight/2};

class Body {
    radius = 50;
    epsilon = 0;
    position = {x: 0, y: 0};

    constructor(radius, position) {
        this.radius = radius;
        this.position.x = position.x;
        this.position.y = position.y;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
    }

    animate(center, distance) {
        this.position.x = center.x + Math.sin(this.epsilon/distance)*distance;
        this.position.y = center.y + Math.cos(this.epsilon/distance)*distance;
        this.draw();
        this.epsilon++;
    }
}

let sun = new Body(50, centerPos);
let planet = new Body(10, centerPos);
let planet2 = new Body(5, centerPos);

console.log(centerPos)


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sun.draw();
    planet.animate(centerPos, 200);
    planet2.animate(planet.position, 50);
    
    window.requestAnimationFrame(animate);
}
  
  animate();