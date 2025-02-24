//creates Project and Tasks nodes based on their object representation

//elementFactory is an object containting methods to create those html nodes
const elementFactory = (() => {
  function createProjectNode(project) {
    //top level div
    let node = document.createElement("div");
    node.classList.add("project-tab");

    //input element storing name of project
    let nameInput = document.createElement("input");
    nameInput.value = project.name;
    nameInput.classList.add("underline-input");
    node.appendChild(nameInput);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    node.appendChild(deleteBtn);

    //handle click
    node.addEventListener("click", () => {
      console.log(Array.from(node.parentNode.children).indexOf(node));
    });

    return node;
  }

  //function that creates a node representing a task
  function createTaskNode(task) {
    const node = document.createElement("div");
    node.classList.add("task");

    //input element storing name of the task
    let nameInput = document.createElement("input");
    nameInput.value = task.name;
    nameInput.classList.add("underline-input");
    node.appendChild(nameInput);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    node.appendChild(deleteBtn);

    //handle click
    node.addEventListener("click", () => {
      console.log(Array.from(node.parentNode.children).indexOf(node));
    });

    return node;
  }

  return { createProjectNode, createTaskNode };
})();

export default elementFactory;
