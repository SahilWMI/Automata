let cells = [1, 0, 0, 1, 0, 1, 0, 1, 1, 0];
let w = 40;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    for(let i = 0; i < cells.length; i++) {
        let x = i * w;
        stroke(0);
        fill(255 - cells[i] * 255);
        square(x, 0, w);
    }

    let nextCells = [];
    nextCells[0] = cells[0];
    nextCells[cells.length - 1] = cells[cells.length - 1];

    for(let i = 0; i < cells.length - 1; i++) {
        let left = cells[i - 1];
        let right = cells[i + 1];
        let state = cells[i];
        let newState = calculateState(left, state, right);
        nextCells[i] = newState;
    }
}

function calculateState(a, b, c) {

}
