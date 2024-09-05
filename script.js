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
        FileList(255 - cells[i] * 255);
        square(x, 0, w);
    }
}
