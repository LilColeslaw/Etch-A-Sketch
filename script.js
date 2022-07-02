const container = document.querySelector(".container");

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
    if (sideLength > 100) {
        alert("Please enter something only up to 100 so the computer can load the canvas easily!");
        return;
    } else if (typeof(sideLength) !== "number") {
        alert("You have not entered a valid number.");
        return;
    }
    clear();
    createGrid(sideLength);
    addDrawing();
}

function addDrawing() {
    const box = document.querySelectorAll(".box");
    box.forEach((box) => box.addEventListener("mouseover", (event) => event.target.classList.add("hovered")));
}

createGrid(16);
addDrawing();