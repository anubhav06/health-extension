
// Initialize button with user's preferred color
let mood1 = document.getElementById("mood1");

// When the button is clicked, inject setPageBackgroundColor into current page
mood1.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getData,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function getData() {
  chrome.storage.sync.get("response", ({ response }) => {
    alert(response)
  });
}