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
    node.appendChild(nameInput);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    node.appendChild(deleteBtn);

    //handle click
    node.addEventListener("click", () => {
      console.log("Clicked");
    });

    return node;
  }

  function createTaskNode(task) {
    const node = document.createElement("div");
    node.innerHTML = task.name;

    return node;
  }

  return { createProjectNode, createTaskNode };
})();

export default elementFactory;
