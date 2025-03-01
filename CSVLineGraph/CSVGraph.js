let minDataValue = 60;
let maxDataValue = 67;

let graphX = 100;
let graphY = 100;
let graphWidth = 600;
let graphHeight = 400;

let startYear = 1970;
let endYear = 2021;
let table;

function preload() {
    table = loadTable("data.csv", "csv");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(128);
    drawGraphBackground();
    drawXAxisLabels();
    drawYAxisLabels();
    drawLineGraph();
    drawChartTitle();

    noLoop();
}

function drawGraphBackground() {
    noStroke();
    fill(250);
    rect(graphX, graphY, graphWidth, graphHeight);
}

function drawLineGraph() {
    let numberOfDataPoints = table.getRowCount();

    let px = 0;
    let py = 0;

    for (let i = 0; i < numberOfDataPoints; i += 1) {
        let sampleValue = table.getNum(i, 1);

        let yearData = table.getString(i , 0);
        let yearString = yearData.slice(0, 4);
        let year = parseInt(yearString);

        let y = map(sampleValue, minDataValue, maxDataValue, graphY + graphHeight, graphY);
        let x = map(year, startYear, endYear, graphX, graphX + graphWidth);

        noStroke();
        fill(40);
        ellipse(x, y, 5, 5);

        if(i > 0) {
            stroke(0);
            strokeWeight(1);
            line(px, py, x, y);
        }

        px = x;
        py = y;
    }

}

function drawXAxisLabels() {
    let numberOfDataPoints = table.getRowCount();

    textFont("Verdana");
    textSize(8);
    textAlign(CENTER, TOP);

    for (let i = 0; i < numberOfDataPoints; i += 2) {
    
        
            let yearData = table.getString(i, 0);
            let yearString = yearData.slice(0, 4);
            let yearNum = parseInt(yearString);

            let x = map(yearNum, startYear, endYear, graphX, graphX + graphWidth);

            stroke(0);
            strokeWeight(1);
            line(x, graphY + graphHeight, x, graphY + graphHeight + 15);

            stroke(220);
            line(x, graphY, x, graphY + graphHeight);

            noStroke();
            fill(0);
            text(yearNum, x, graphY + graphHeight + 19);
            
        }
    }


function drawYAxisLabels() {

    textFont("Verdana");
    textSize(8);
    textAlign(RIGHT, CENTER);

    for (let sampleValue = minDataValue; sampleValue <= maxDataValue; sampleValue += 1) {
        let y = map(sampleValue, minDataValue, maxDataValue, graphY + graphHeight, graphY);

        stroke(0, 255, 0);
        strokeWeight(1);
        line(graphX, y, graphX-15, y);

        stroke(0 , 255, 50);
        line(graphX, y, graphX + graphWidth, y);

        noStroke();
        fill(0);
        text(sampleValue, graphX-19, y);
    }
}

function drawChartTitle() {
    textFont("Verdana");
    textSize(24);
    noStroke();
    fill(0, 0, 255);
    textAlign(CENTER, TOP);
    text("CSV Line Graph", 400, 20);
    text("1970 - 2021", 400, 75);
    text("Columbia, SC", 400, 50);
    text("Years For Climate Graph", 400, 550);
    push();
    rotate(-PI/2);
    text("Average Temperature Per Year", -300, 35);
    pop();
}
