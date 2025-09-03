// hi
// are you looking at this in the github?
// that's fun, i hope you're doing grand

// based off of
// https://github.com/hbokmann/fibonacci-spirals

// get canvas
const canvas = document.getElementById("fibo");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const size = 4;
const space = 5;

ctx.fillStyle = "#FFF";

ctx.moveTo(centerX, centerY);
ctx.beginPath();

let fiboMod1 = 0;
let fiboMod2 = 0;

function drawFibo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(centerX, centerY);
    ctx.beginPath();

    for (let i = 1; i < 1000; i++) {
        let r = Math.sqrt(i);
        let t = 137.5 * Math.PI / 180 * i;

        t += fiboMod1;
        t += i * fiboMod2;

        let x = centerX + r * space * Math.cos(t);
        let y = centerY + r * space * Math.sin(t);

        ctx.arc(x, y, size, 0, 2 * Math.PI, false);
        ctx.closePath();
    }

    ctx.fill();
}

function draw() {
    fiboMod1 += 0.01;
    fiboMod2 += 0.000005;
    drawFibo();

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);