console.log("Working");

let myAudio = new Audio();
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "stop") {
    myAudio.pause();
  }
  if (message === "neutral") {
    myAudio.src = chrome.extension.getURL("https://www.youtube.com/watch?v=5qap5aO4i9A");
    myAudio.play();
  } else if (message === "happy") {
    myAudio.src = chrome.extension.getURL("songs/happy.mp3");
    myAudio.play();
  } else if (message === "sad") {
    myAudio.src = chrome.extension.getURL("songs/sad.mp3");
    myAudio.play();
  }
});