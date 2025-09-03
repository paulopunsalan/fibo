// hi
// are you looking at this in the github?
// that's fun, i hope you're doing grand

// based off of
// https://github.com/hbokmann/fibonacci-spirals

// get canvas
const canvas = document.getElementById("fibo");
const ctx = canvas.getContext("2d");

const canvas2 = document.getElementById("fibo-2");
const ctx2 = canvas2.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let size = 4;
let space = 5;

ctx.fillStyle = "#FFF";

ctx.moveTo(centerX, centerY);
ctx.beginPath();

let fiboMod1 = 0;
let fiboMod2 = 0;

let col1 = "#fff";
let col2 = "#fff";

const col1Input = document.getElementById("col1");
const col2Input = document.getElementById("col2");

col1Input.addEventListener("input", () => {
    col1 = col1Input.value;
    drawFibo();
});

col2Input.addEventListener("input", () => {
    col2 = col2Input.value;
    drawFibo();
});

const mod1 = document.getElementById("mod1");
const mod2 = document.getElementById("mod2");

mod1.addEventListener("input", () => {
    fiboMod1 = parseFloat(mod1.value);
    drawFibo();
});

mod2.addEventListener("input", () => {
    fiboMod2 = parseFloat(mod2.value);
    drawFibo();
});

const sizeInput = document.getElementById("size");
const spaceInput = document.getElementById("space");

sizeInput.addEventListener("input", () => {
    size = parseFloat(sizeInput.value);
    drawFibo();
});

spaceInput.addEventListener("input", () => {
    space = parseFloat(spaceInput.value);
    drawFibo();
});

function drawFibo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(centerX, centerY);
    ctx.beginPath();

    ctx.fillStyle = col1;

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

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.beginPath();

    ctx2.moveTo(centerX, centerY);
    ctx2.beginPath();

    ctx2.fillStyle = col2;

    for (let i = 1; i < 1000; i++) {
        let r = Math.sqrt(i);
        let t = 137.5 * Math.PI / 180 * i;

        t += fiboMod1;
        t += i * fiboMod2;

        let x = centerX + r * space * Math.cos(t);
        let y = centerY + r * space * Math.sin(t);

        ctx2.arc(x, y, size, 0, 2 * Math.PI, false);
        ctx2.closePath();
    }

    ctx2.fill();
}

function draw() {
    if (document.getElementById("mod1-check").checked) {
        fiboMod1 += 0.01;
        mod1.value = fiboMod1.toFixed(4);
    }
    if (document.getElementById("mod2-check").checked) {
        fiboMod2 += 0.000005;
        mod2.value = fiboMod2.toFixed(4);
    }
    drawFibo();

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);