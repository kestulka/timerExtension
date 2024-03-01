chrome.alarms.create("Timer", {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "Timer") {
    chrome.storage.local.get(["timer", "isRunning"], (res) => {
      if (res.isRunning) {
        let timer = res.timer + 1;
        let isRunning = true;
        if (timer === 60 * 25) {
          // to test: (timer === 10)
          this.registration.showNotification("Timer", {
            body: "25 minutes have passed!",
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

chrome.storage.local.get(["timer", "isRunning"], (res) => {
  chrome.storage.local.set({
    timer: "timer" in res ? res.timer : 0,
    isRunning: "isRunning" in res ? res.isRunning : false,
  });
});
