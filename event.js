// Initialize Firebase
var config = {
    apiKey: "AIzaSyBzIzD4jjIwIypdQebsj4YoaEEaLXeIpjA",
    databaseURL: "https://tldr-extension.firebaseio.com",
    storageBucket: "tldr-extension.appspot.com"
   };
   firebase.initializeApp(config);

// This function is called onload in the popup code
function getPageDetails(callback) { 
    // Inject the content script into the current page 
    chrome.tabs.executeScript(null, { file: 'content.js' }); 
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  { 
        // Call the callback function
        callback(message); 
    }); 
}; 
