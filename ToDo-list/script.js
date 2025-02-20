import createProject from "./project.js";
import elementFactory from "./elementFactory.js";

//stores objects representing projects
let projects = [];

//Stores DOM Stuff
const dom = (() => {
  const projectPanel = document.getElementById("project-panel");
  const projectList = document.getElementById("project-list");
  const contentPanel = document.getElementById("content");
  const newTaskButton = document.getElementById("new-task-btn");
  const taskList = document.getElementById("task-list");

  function clearTaskList() {
    taskList.innerHTML = "";
  }

  //Function that adds a new project dom element and push it to projects array
  function addNewProject() {
    const project = createProject();
    projects.push(project);
    projectList.appendChild(elementFactory.createProjectNode(project));

    //clear task list, then display this project's tasks
    clearTaskList();
    project.tasks.forEach((task) => {
      taskList.appendChild(elementFactory.createTaskNode(task));
    });
  }

  //Handle new project button clicks
  document.getElementById("new-project-btn").addEventListener("click", () => {
    addNewProject(createProject());
  });

  return { addNewProject };
})();

dom.addNewProject();
