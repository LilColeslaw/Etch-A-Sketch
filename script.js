const container = document.querySelector(".container");
let amDrawing = false;
const body = document.querySelector("body");

body.addEventListener("keypress", (event) => {if (event.key === " ") toggleDrawing();});

function rgbRandom() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}
function clear() {
    container.textContent = "";
}

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let rowDiv = document.createElement("div");
        container.appendChild(rowDiv);
        rowDiv.className = "row";
        //append it to the container div
        //css will kick in
        //and now make the elements within the rows
        for (let j = 0; j < num; j++) {
            let smallDiv = document.createElement("div");
            smallDiv.className = "box";
            rowDiv.appendChild(smallDiv);
        }
    }
}

function changeDimensions() {
    let sideLength = prompt("Enter the side length: ");
    if (sideLength % 1 !== 0) {
        alert("You have not entered a valid number.");
        return;
    } else if (sideLength > 100) {
        alert("Please enter something only up to 100 so the computer can load the canvas easily!");
        return;
    }
    clear();
    createGrid(sideLength);
    addDrawing();
}

function addDrawing() {
    const box = document.querySelectorAll(".box");
    box.forEach((box) => box.addEventListener("mouseenter", bgColorRandom));
    amDrawing = true;
}

function bgColorRandom(event) {
    event.target.style.backgroundColor = rgbRandom();
}

function removeDrawing() {
    const box = document.querySelectorAll(".box");
    box.forEach((box) => box.removeEventListener("mouseenter", bgColorRandom));
    amDrawing = false;
}

function toggleDrawing() {
    amDrawing ? removeDrawing() : addDrawing();
}

createGrid(16);
addDrawing();