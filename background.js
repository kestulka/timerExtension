chrome.alarms.create("Timer", {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "Timer") {
    chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
      if (res.isRunning) {
        let timer = res.timer + 1;
        let isRunning = true;
        if (timer === 60 * res.timeOption) {
          this.registration.showNotification("Timer", {
            body: `${res.timeOption} minutes have passed!`,
            icon: "stopwatch.png",
          });
          timer = 0;
          isRunning = false;
        }
        // console.log(timer);
        chrome.storage.local.set({
          timer,
          isRunning,
        });
      }
    });
  }
});

chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
  chrome.storage.local.set({
    timer: "timer" in res ? res.timer : 0,
    timeOption: "timeOption" in res ? res.timeOption : 15,
    isRunning: "isRunning" in res ? res.isRunning : false,
  });
});
