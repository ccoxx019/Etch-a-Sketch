alert("conn");

var board = document.querySelector("#board");
var boxes = document.querySelectorAll(".box");
var numberOfBoxes = 10000;

function createGrid(cells) {
    for (let i = 0; i < cells; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        board.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.classList.add("active");
        })
    };
};


createGrid(numberOfBoxes);
