import createProject from "./project.js";

//stores objects representing projects
const projects = [];

let focusedProject;

//Stores DOM Stuff
const dom = (() => {
  const projectList = document.getElementById("project-list");
  const contentPanel = document.getElementById("content");

  const taskList = document.getElementById("task-list");

  function refreshTaskList(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      taskList.appendChild(elementFactory.createTaskNode(task));
    });
  }

  //Function that adds a new project dom element and push it to projects array
  function addNewProject() {
    let pid = projects.length;
    let project = createProject(pid);
    projects.push(project);
    projectList.appendChild(elementFactory.createProjectNode(project));

    //newly created project focused automatically
    focusedProject = project;

    //clear task list, then display this project's tasks
    refreshTaskList(project.tasks);
  }

  //Handle new project button clicks
  document.getElementById("new-project-btn").addEventListener("click", () => {
    addNewProject();
  });

  document.getElementById("new-task-btn").addEventListener("click", () => {
    //add new task
    if (focusedProject != null) {
      focusedProject.addTask();
    }
    console.log(focusedProject);
    refreshTaskList(focusedProject.tasks);
  });

  return { addNewProject };
})();

//creates element from object
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

    //on click set focusedProject
    node.addEventListener("click", () => {
      focusedProject = project;
      console.log(project);
    });

    //on delete button click
    deleteBtn.addEventListener("click", () => {
      //remove project
      focusedProject = null;
      let index = projects.indexOf(project);
      projects.splice(index, 1);
      node.parentNode.removeChild(node);
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

    deleteBtn.addEventListener("click", () => {
      focusedProject.tasks = [];
    });

    return node;
  }

  return { createProjectNode, createTaskNode };
})();

dom.addNewProject();
