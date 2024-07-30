const container = document.querySelector("#container");

const changSizeBtn = document.querySelector("#size");

const resetBtn = document.querySelector("#reset");

const modeBtn = document.querySelector("#mode");

//default canvas size to 16 * 16
let canvasLength = 16;

let mousedown = false;

//default to painting black pixels
let mode = "paint";

//default opacity = 10%
let opacity = 0.1;

//initialze a 16* 16 canvas
createCanvas(16);

//set mousedown when LMB is depressed
//and paint pixel if cursor in canvas
document.addEventListener("mousedown", (e) => {
  e.preventDefault(); //stops weird dragging behavior
  if (e.button == 0) {
    //if LMB
    mousedown = true;

    //if mousedown inside a pixel
    if (e.target.classList == "pixel") {
      fillPixel(e.target);
    }
  }
});

//reset mousedown when mouseup
document.addEventListener("mouseup", (e) => {
  mousedown = false;
});

//fills pixel if mouseover and LMB pressed
container.addEventListener("mouseover", (e) => {
  if (mousedown && e.target.classList.value == "pixel") {
    fillPixel(e.target);
  }
});

//canvas size change button
changSizeBtn.addEventListener("click", (e) => {
  let newLength = 0;

  newLength = window.prompt("Enter a size between 4 and 100");

  if (Number(newLength) && newLength >= 4 && newLength <= 100) {
    canvasLength = newLength;
    resetCanvas(canvasLength);
  } else {
    window.alert("Number not valid");
  }
});

//reset button
resetBtn.addEventListener("click", (e) => {
  resetCanvas(canvasLength);
});

/*functions*/

//fills the div with a grid of pixels
function createCanvas(length) {
  //append lengt number of rows to container
  for (let i = 0; i < length; i++) {
    container.appendChild(createRow(length));
  }
}

//create a row of pixels
function createRow(length) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < length; i++) {
    row.appendChild(createPixel());
  }

  return row;
}

//creates a pixel
function createPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  return pixel;
}

//fills a pixel
function fillPixel(pixel) {
  //if in paint mode, fill a pixel with a black color and an opacity
  if (mode == "paint") {
    pixel.style.backgroundColor = "black";

    if (Number(pixel.style.opacity) < 1) {
      pixel.style.opacity = Number(pixel.style.opacity) + opacity;
    }
  } else if (mode == "rainbow") {
  }
}

//reset the current canvas then create a new one with size newLength * newLength
function resetCanvas() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createCanvas(canvasLength);
}
