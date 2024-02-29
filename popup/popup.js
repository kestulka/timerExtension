const tasksArr = [];

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
  const tasksCount = tasksArr.length;
  tasksArr.push("");

  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");

  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task...";
  text.addEventListener("change", () => {
    tasksArr[tasksCount] = text.value;
    console.log(tasksArr);
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "X";

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("taskContainer");
  taskContainer.appendChild(taskRow);
}
