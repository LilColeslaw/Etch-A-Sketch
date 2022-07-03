const container = document.querySelector(".container");
let amDrawing = false;
const body = document.querySelector("body");
const changeDimensionsButton = document.querySelector(".dimension-change");
let usingRandomColors = true;

body.addEventListener("keypress", (event) => {if (event.key === " ") toggleDrawing();});

function setCanvasColor() { //needed to set the canvas color when it's resized or first created
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.style.cssText = "background-color: black; opacity: 0");
}

function useShading() {//blurs the button and changes the mode of coloring
    usingRandomColors = false;
    this.blur();
}
function useRandomColors() {//blurs the button and changes the mode of coloring
    usingRandomColors = true;
    this.blur();
}

function changeToOnEnter(event) {//used when mouseEnter -> sees what mode has been chosen and calls the appropriate function
    let targetElement = event.target;
    usingRandomColors ? rgbRandom(targetElement) : shade(targetElement);
}

function shade(element) {
    element.style.opacity = parseFloat(element.style.opacity) + 0.1;
}

function rgbRandom(element) {//gets random color and sets the passed element's background color as it
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    element.style.backgroundColor = rgb;
    element.style.opacity = 100;//needed because if the shade mode was being used these colors wouldn't show up well
}

function clear() {
    container.textContent = "";
}

function createGrid(num) {//creates the grid
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

function changeDimensions() {//collects new side length and sets it
    let sideLength = prompt("Enter the side length: ");
    if (sideLength % 1 !== 0) {
        alert("You have not entered a valid number.");
        changeDimensionsButton.blur();
        return;
    } else if (sideLength > 100) {
        alert("Please enter something only up to 100 so the computer can load the canvas easily!");
        changeDimensionsButton.blur();
        return;
    }
    clear();//clears the current grid so things don't get weird
    createGrid(sideLength);//creates the grid
    setCanvasColor();//sets the color to default
    addDrawing();//initiates drawing
    changeDimensionsButton.blur();//blurs the button
}

function addDrawing() {//initiates drawing for every box
    const box = document.querySelectorAll(".box");
    box.forEach((box) => box.addEventListener("mouseenter", changeToOnEnter));
    amDrawing = true;
}


function removeDrawing() {//turns of drawing for every box
    const box = document.querySelectorAll(".box");
    box.forEach((box) => box.removeEventListener("mouseenter", changeToOnEnter));
    amDrawing = false;
}

function toggleDrawing() {//toggles the drawing
    amDrawing ? removeDrawing() : addDrawing();
}

createGrid(16);
setCanvasColor();
alert("Press the space-bar to start and stop drawing!");