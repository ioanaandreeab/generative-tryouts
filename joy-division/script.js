const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;
const VARIANCE_FACTOR = 150;
const MONOCHROME = [[0,32,63]];

function setup() {
    createCanvas(MAX_HEIGHT, MAX_WIDTH);
    //color of stroke
    stroke(169, 251, 215);
    strokeWeight(2);
    noLoop();
}

function draw() {
    const lines = [];
    for(let i = STEP; i < MAX_HEIGHT - STEP; i += STEP) {
        let line = [];
        for (let j = STEP; j < MAX_HEIGHT - STEP; j += STEP) {
            let distanceToCenter = Math.abs(j - MAX_HEIGHT / 2);
            let variance = Math.max(MAX_HEIGHT / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
            let random = Math.random() * variance / 2 * - 1;
            let point = {x:j, y: i + random};
            line.push(point);
        }
        lines.push(line);
    }
    //draw
    for(let i = 5; i < lines.length; i++) {
        beginShape();
        for (let j = 0; j< lines[i].length; j+= 2) {
            curveVertex(lines[i][j].x, lines[i][j].y);
            let random_index = Math.floor(Math.random() * MONOCHROME.length);
            const [r,g,b] = MONOCHROME[random_index];
            fill(r, g, b);
            curveVertex(lines[i][j+1].x, lines[i][j+1].y);
        }
        endShape();
    }
}