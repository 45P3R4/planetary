const canvas = document.getElementById("main-canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#FFFFFF"

const centerPos = {x: innerWidth/2, y: innerHeight/2};

let speed = 1;

const speedLabel = document.getElementById("speed");
speedLabel.textContent = speed.toFixed(1);

const speedUp = document.getElementById("speed-up");
const speedDown = document.getElementById("speed-down");

speedUp.addEventListener("mousedown", () => {
    speed += 0.1;
    speedLabel.textContent = speed.toFixed(1);;
})

speedDown.addEventListener("mousedown", () => {
    speed -= 0.1;
    speedLabel.textContent = speed.toFixed(1);;
})

class Body {
    radius = 50;
    epsilon = 0;
    position = {x: 0, y: 0};

    constructor(name, radius, position) {
        this.name = name;
        this.radius = radius;
        this.position.x = position.x;
        this.position.y = position.y;
    }

    draw() {
        ctx.fillText(this.name, this.position.x, this.position.y - this.radius * 1.2)
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke(); 
    }

    animate(center, distance) {
        this.position.x = center.x + Math.sin(this.epsilon/distance)*distance;
        this.position.y = center.y + Math.cos(this.epsilon/distance)*distance;
        this.draw();
        this.epsilon += speed;
    }
}

let sun = new Body("Sun", 100, centerPos);

let mercury = new Body("Mercury", 1, centerPos);

let venus = new Body("Venus", 1, centerPos);

let earth = new Body("Earth", 1, centerPos);
let moon = new Body("Moon", 1, centerPos);

let mars = new Body("Mars", 1, centerPos);

let jupiter = new Body("Jupiter", 14, centerPos);
let ganimed = new Body("Ganimed", 1, centerPos);
let callisto = new Body("Callisto", 1, centerPos);

let saturn = new Body("Saturn", 12, centerPos);
let titan = new Body("Titan", 1, centerPos);

let uranus = new Body("Uranus", 5, centerPos);

let neptune = new Body("Neptune", 5, centerPos);

let pluto = new Body("Pluto", 1, centerPos);



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sun.draw();

    mercury.animate(centerPos, 120);

    venus.animate(centerPos, 140);

    earth.animate(centerPos, 160);
    moon.animate(earth.position, 10);

    mars.animate(centerPos, 180)

    jupiter.animate(centerPos, 200);
    ganimed.animate(jupiter.position, 17);
    callisto.animate(jupiter.position, 20)

    saturn.animate(centerPos, 240);
    titan.animate(saturn.position, 15)

    uranus.animate(centerPos, 260);

    neptune.animate(centerPos, 280);

    pluto.animate(centerPos, 300);
    
    window.requestAnimationFrame(animate);
}
  
  animate();