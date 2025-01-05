let library = [];

const content = document.getElementById("content");

const titleInput = document.getElementById("title");

const authorNameInput = document.getElementById("author");

const yearInput = document.getElementById("year");

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  //create new book object, then push to library array
  library.push(
    new Book(titleInput.value, authorNameInput.value, yearInput.value)
  );

  displayLibrary();
});

//the constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = false;

  this.index = () => {
    return this.title;
  };

  this.info = function () {
    return `
    <div>${title}</div>
    <div>${author}<div>
    <div>${year}</div>
    <div>Read: ${this.read}</div>
    `;
  };
}

function displayLibrary() {
  content.innerHTML = "";

  library.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = element.info();

    //mark as read button
    let readBtn = document.createElement("button");
    readBtn.innerHTML = "Mark as read";

    readBtn.addEventListener("click", () => {
      target = library.find((elem) => {
        return elem.index() == element.index();
      });
      target.read = true;
      displayLibrary();
    });

    card.appendChild(readBtn);

    //delete button
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Remove";

    delBtn.addEventListener("click", () => {
      library = library.filter((elem) => {
        return elem.index() != element.index();
      });
      displayLibrary();
    });

    card.appendChild(delBtn);

    content.appendChild(card);
  });
}
