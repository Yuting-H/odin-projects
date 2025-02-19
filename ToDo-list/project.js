function createProject(projectName = "Project Name") {
  let tasks = [];

  //top level div
  let node = document.createElement("div");
  node.classList.add("project-tab");

  let nameInput = document.createElement("input");
  nameInput.value = projectName;
  node.appendChild(nameInput);

  //handle click
  node.addEventListener("click", () => {
    console.log("WOW");
  });
  console.log("new proj");

  return { projectName, node };
}

export default createProject;
