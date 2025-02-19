import createProject from "./project.js";

//stores objects representing projects
let projects = [];

//Stores DOM Stuff
const dom = (() => {
  const projectPanel = document.getElementById("project-panel");
  const projectList = document.getElementById("project-list");
  const contentPanel = document.getElementById("content");
  const newTaskButton = document.getElementById("new-task-btn");

  //Adds a new project dom element and push it to projects array
  function addNewProject({ projectName, node }) {
    projects.push(projectName);
    projectList.appendChild(node);
  }

  document.getElementById("new-project-btn").addEventListener("click", () => {
    addNewProject(createProject());
  });

  return { addNewProject };
})();

dom.addNewProject(createProject("ASDF"));
console.log(projects.pop());
