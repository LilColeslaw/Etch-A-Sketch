const container = document.querySelector(".container");


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
            rowDiv.appendChild(smallDiv);
        }
    }
}