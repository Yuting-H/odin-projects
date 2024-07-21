const input = document.querySelector("input");

const addBtn = document.querySelector("button");

const list = document.querySelector("ul");

//adds item to list
addBtn.addEventListener("click", (e) => {
    
    //get the input string
    let inputText = input.value; 
    
    //clear input 
    input.value = "";

    //create entry
    const item = document.createElement("li");
    item.innerText = inputText;

    //create and append remove button to entry
    const removeBtn = document.createElement("button");
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener("click", (e) => {
        item.remove();
    });
    item.appendChild(removeBtn);


    //add item to shopping list
    list.appendChild(item);

    //focus on input
    input.focus();

});

