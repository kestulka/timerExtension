const timeOption = document.getElementById("timeOption");
timeOption.addEventListener("change", (event) => {
  const val = event.target.value;
  console.log(val);
  if (val < 1 || val > 60) {
    timeOption.value = 15;
  }
});

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    timeOption: timeOption.value,
    isRunning: false,
  });
});

chrome.storage.local.get(["timeOption"], (res) => {
  timeOption.value = res.timeOption;
});
