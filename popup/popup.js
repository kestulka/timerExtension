let tasksArr = [];

const startTimerBtn = document.getElementById("startTimerBtn");
startTimerBtn.addEventListener("click", () => {
  chrome.storage.local.get(["isRunning"], (res) => {
    chrome.storage.local.set(
      {
        isRunning: !res.isRunning,
      },
      () => {
        startTimerBtn.textContent = !res.isRunning
          ? "Pause Timer"
          : "Start Timer";
      },
    );
  });
});

const resetTimerBtn = document.getElementById("resetTimerBtn");
resetTimerBtn.addEventListener("click", () => {
  chrome.storage.local.set(
    {
      timer: 0,
      isRunning: false,
    },
    () => {
      startTimerBtn.textContent = "Start Timer";
      console.log("Timer reset");
    },
  );
});

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", () => addTask());

chrome.storage.sync.get(["tasksArr"], (res) => {
  tasksArr = res.tasksArr ? res.tasksArr : [];
  renderTasks();
});

function saveTasks() {
  chrome.storage.sync.set({
    tasksArr,
  });
}

function renderTask(taskCount) {
  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");

  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task...";
  text.value = tasksArr[taskCount];
  text.addEventListener("change", () => {
    tasksArr[taskCount] = text.value;
    saveTasks();
    console.log(tasksArr);
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "X";
  deleteBtn.addEventListener("click", () => {
    deleteTask(taskCount);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("taskContainer");
  taskContainer.appendChild(taskRow);
}

function addTask() {
  const taskCount = tasksArr.length;
  tasksArr.push("");
  renderTask(taskCount);
  saveTasks();
}

function deleteTask(taskCount) {
  tasksArr.splice(taskCount, 1);
  renderTasks();
  saveTasks();
}

function renderTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.textContent = "";
  tasksArr.forEach((taskText, taskCount) => {
    renderTask(taskCount);
  });
}
