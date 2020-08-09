// This callback function is called when the content script has been 
// injected and returned its results
function onPageDetailsReceived(pageDetails)  { 
    document.getElementById('title').value = pageDetails.title; 
    document.getElementById('url').value = pageDetails.url; 
    //document.getElementById('summary').innerText = pageDetails.summary; 


    chrome.extension.getBackgroundPage().console.log('foo');
    var s = pageDetails.summary;

    // Example directly sending a text string:
    // Inject the content script into the current page 
    //chrome.tabs.executeScript(null, { file: 'background.js' });
    chrome.runtime.sendMessage({greeting: s}, function(response) {
        console.log(response.farewell);
      });
    
    //console.log('hello');

} 

function onPageAPIDetailsReceived(pageDetails)  { 
    document.getElementById('summary').innerText = pageDetails.summary; 
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {

    // chrome.runtime.getBackgroundPage(function(eventPage) {
    //     // Call the getPageInfo function in the event page, passing in 
    //     // our onPageDetailsReceived function as the callback. This injects 
    //     // content.js into the current tab's HTML
    //     eventPage.getPageDetails(onPageDetailsReceived);
    //     eventPage.callDeepApi(onPageAPIDetailsReceived);
    // });
    chrome.runtime.sendMessage({greeting: 'hi'}, function(response) {
        console.log(response);
      });
});