const library = [];

const content = document.getElementById("content");

const authorNameInput = document.getElementById("author");

const yearInput = document.getElementById("year");

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  library.push(new Book(authorNameInput.value, yearInput.value));

  displayLibrary();
});

//the constructor
function Book(author, year) {
  this.author = author;
  this.year = year;

  this.info = function () {
    return `
    <td>${author} </td>
    <td>${year}</td>
    `;
  };
  console.log(`New book ${author} ${year} `);
}

function displayLibrary() {
  content.innerHTML = "";

  library.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `${element.author} ${element.year}`;
    content.appendChild(card);
  });
}
