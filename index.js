const canvas = document.getElementById("main-canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "#FFFFFF"

let xPos = innerWidth/2;
let yPos = innerHeight/2;
let epsilon = 0;
let distance = 300;

function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius , 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xPos += Math.sin(epsilon/distance);
    yPos += Math.cos(epsilon/distance);
    drawCircle(xPos - distance, yPos, 20);
    drawCircle(innerWidth/2, innerHeight/2, 50);
    window.requestAnimationFrame(animate);
    epsilon++;
  }
  
  animate();