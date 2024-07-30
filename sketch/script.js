const container = document.querySelector("#container");

createCanvas(4);

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

function createPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  return pixel;
}
