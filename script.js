//get the container
const containerDiv = document.querySelector(".container");

//get the buttons
const editButton = document.querySelector(".grid-change");
const rainbowColor = document.querySelector(".color-rainbow");
const redColor = document.querySelector(".color-red");
const greenColor = document.querySelector(".color-green");
const blueColor = document.querySelector(".color-blue");
const whiteColor = document.querySelector(".color-white");

//init color variable
let color = "red";

//init check for rainbow
let checkForRainbow = false;

//choose color 
redColor.addEventListener("click", () => {
    color = "red";
    checkForRainbow = false;
});

greenColor.addEventListener("click", () => {
    color = "green";
    checkForRainbow = false;
});

blueColor.addEventListener("click", () => {
    color = "blue";
    checkForRainbow = false;
});

whiteColor.addEventListener("click", () => {
    color = "white";
    checkForRainbow = false;
});

rainbowColor.addEventListener("click", () => checkForRainbow = true);

//read desired grid height and width from user i button pressed
editButton.addEventListener("click", () => {
    const gridSize = prompt("Input grid size (max 100)");

    while (gridSize > 100 || gridSize < 1) {
        gridSize = prompt("Maximum size is 100");
    }

    printGrid(gridSize);
});

printGrid(3);

//creating divs for a grid
function printGrid (gridSize) {

    //delete children if have any
    while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.lastChild);
    }

    const cellSize = ((containerDiv.offsetWidth - 2) / gridSize);

    //create and append each grid element
    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");

        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        
        div.addEventListener("mouseenter", () => {
            if (checkForRainbow) {
                color = randomColor();
            }
            div.style.backgroundColor = color;
        });

        containerDiv.appendChild(div);
    }
}

function randomColor () {
    const red = Math.floor(Math.random() * 100);
    const green = Math.floor(Math.random() * 100);
    const blue = Math.floor(Math.random() * 100);
    while (red > 255) {
        red = Math.floor(Math.random() * 100);
    }
    while (green > 255) {
        green = Math.floor(Math.random() * 100);
    }
    while (blue > 255) {
        blue = Math.floor(Math.random() * 100);
    }
    return `rgb(${red}, ${green}, ${blue})`;
}