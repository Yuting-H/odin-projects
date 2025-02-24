import createTask from "./tasks.js";

//Return an object representing a project
function createProject(pid = 0) {
  let name = "Project Name";
  let tasks = [];

  //two empty default task
  tasks.push(createTask());
  tasks.push(createTask());
  console.table(tasks);
  return { name, tasks, pid };
}

export default createProject;
