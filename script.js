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

createGrid(16);

const box = document.querySelectorAll(".box");

box.forEach((box) => box.addEventListener("mouseover", (event) => event.target.classList.add("hovered")));