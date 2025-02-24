//returns a object representing a task
function createTask(name = "Example Task") {
  let description = "";
  let dueDate = new Date();
  let priority = "low";
  let expanded = false;

  return { name, description, dueDate, priority, expanded };
}

export default createTask;
