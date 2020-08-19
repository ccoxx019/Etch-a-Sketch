var board = document.querySelector("#board");
var boxes = document.querySelectorAll(".cell");
var numberOfBoxes = 10000;

function createGrid(cells) {
    for (let i = 0; i < cells; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        board.appendChild(div);
        //color cell when cursor moves over
        div.addEventListener("mouseover", function() {
            div.classList.add("active");
        })
    };
};

function resetCells() {
    var cells = document.querySelectorAll(".cell");
    [].forEach.call(cells, function(el) {
        el.classList.remove("active");
});
}

createGrid(numberOfBoxes);
