const container = document.querySelector("#container");

const changSizeBtn = document.querySelector("#size");

const resetBtn = document.querySelector("#reset");

//default canvas size to 16 * 16
let canvasLength = 16;

let mousedown = false;

//initialze a 16* 16 canvas
createCanvas(16);

//set mousedown when LMB is depressed
//and paint pixel if
document.addEventListener("mousedown", (e) => {
  e.preventDefault();
  if (e.button == 0) {
    mousedown = true;
  }

  if (e.target.classList == "pixel") {
    e.target.classList.add("filled");
  }
});

//reset mousedown when mouseup
document.addEventListener("mouseup", (event) => {
  mousedown = false;
  console.log("up");
});

//fills pixel if mouseover and LMB pressed
container.addEventListener("mouseover", (event) => {
  if (mousedown && event.target.classList.value == "pixel") {
    event.target.classList.add("filled");
  }
});

//canvas size change button
changSizeBtn.addEventListener("click", (event) => {
  let newLength = 0;

  newLength = window.prompt("Enter a size between 4 and 100");

  console.log(Number(newLength));
  if (Number(newLength) && newLength > 4 && newLength < 100) {
    resetCanvas(newLength);
  } else {
    window.alert("Number not valid");
  }
});

//reset button
resetBtn.addEventListener("click", (event) => {
  resetCanvas(canvasLength);
});

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

//reset the current canvas then create a new one with size newLength * newLength
function resetCanvas(newLength) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  console.log(newLength);
  createCanvas(newLength);
}
