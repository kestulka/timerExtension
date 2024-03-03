document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById("contentContainer");

  // Initial content
  contentContainer.innerHTML = `
    <div class="mainDiv">
      <div class="navbar">
        <button id="timerTab">Timer</button>
        <button id="deepLearningTab">Focus</button>
      </div>
      <div id="timerContent" style="display:block;">
        <!-- Timer content -->
        <img id="popupImg" src="../stopwatch.png" alt="Stopwatch" />
        <h1 id="time">00:00</h1>

        <div id="buttonsDiv">
          <button id="startTimerBtn">Start Timer</button>
          <button id="resetTimerBtn">Reset Timer</button>
          <button id="addTaskBtn">Add Task</button>
        </div>

        <div id="taskContainer"></div>
      </div>
      <div id="deepLearningContent" style="display:none;">
        <!-- Deep Learning content -->
        <h1>Welcome to Deep Learning</h1>
      </div>
    </div>
  `;

  const timerTab = document.getElementById("timerTab");
  const deepLearningTab = document.getElementById("deepLearningTab");
  const timerContent = document.getElementById("timerContent");
  const deepLearningContent = document.getElementById("deepLearningContent");

  timerTab.addEventListener("click", function () {
    // Show Timer content and hide Deep Learning content
    timerContent.style.display = "block";
    deepLearningContent.style.display = "none";
  });

  deepLearningTab.addEventListener("click", function () {
    // Show Deep Learning content and hide Timer content
    timerContent.style.display = "none";
    deepLearningContent.style.display = "block";
  });
});
