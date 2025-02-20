import createTask from "./tasks.js";

//Return an object representing a project
function createProject(name = "Project Name") {
  let tasks = [];

  tasks.push(createTask());

  return { name, tasks };
}

export default createProject;
