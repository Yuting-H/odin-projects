import createTask from "./tasks.js";

//Return an object representing a project
function createProject(pid = 0) {
  let name = "Project Name";
  let tasks = [];

  let addTask = () => {
    tasks.push(createTask());
  };
  //two empty default task
  addTask();
  addTask();

  return { name, tasks, addTask };
}

export default createProject;
