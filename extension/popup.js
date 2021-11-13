neutralBtn = document.getElementById("neutral");
happyBtn = document.getElementById("happy");
sadBtn = document.getElementById("sad");

const playSong = (type) => {
  chrome.runtime.sendMessage(type, (response) => {
    console.log(response);
  });
};

document.getElementById("stop").addEventListener("click", () => {
  chrome.runtime.sendMessage("stop", (response) => {
    console.log(response);
  });
});

neutralBtn.addEventListener("click", function () {
  playSong("neutral");
});

happyBtn.addEventListener("click", function () {
  playSong("happy");
});

sadBtn.addEventListener("click", function () {
  playSong("sad");
});
