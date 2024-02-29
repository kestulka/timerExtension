const mainDiv = document.createElement("div");
mainDiv.classList.add("main");

const image = document.createElement("img");
image.src = "../stopwatch.png";
mainDiv.appendChild(image);

const timer = document.createElement("h1");
timer.textContent = "00:00";
mainDiv.appendChild(timer);

const formDiv = document.createElement("div");
const form = document.createElement("form");

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Enter task";
form.appendChild(taskInput);

const addButton = document.createElement("button");
addButton.textContent("Add Task");
form.appendChild(addButton);
