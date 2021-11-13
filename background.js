//chrome.runtime.onMessage.addListener(
//  function(request, sender, sendResponse) {
    
//    console.log('Background Script: ')
//    console.log(request.songs)

//    fetch('http://127.0.0.1:8000/getUserData')
//    .then(response => response.json())
//    .then(response => sendResponse({songs: response}))
//    .catch(error => console.log(error))
      
//    return true;  // Will respond asynchronously.
    
//});



chrome.runtime.onInstalled.addListener(() => {

  fetch('http://127.0.0.1:8000/getUserData')
  fetch('http://127.0.0.1:8000/getUserData')
    .then(response => response.json())
    .then(response => chrome.storage.sync.set({ response }))
    .then(()=> console.log('fetched'))
    .catch(error => console.log(error))

  
  console.log('Fetched data ', `DATA: ${response}`);
});

