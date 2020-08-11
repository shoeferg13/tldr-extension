// This callback function is called when the content script has been 
// injected and returned its results
var s;
function onPageDetailsReceived(pageDetails)  { 
    document.getElementById('title').value = pageDetails.title; 
    document.getElementById('url').value = pageDetails.url; 
    //document.getElementById('summary').innerText = pageDetails.summary; 

    console.log('hiii');

     s = document.getElementById('summary').value;
     console.log(s);
    // Example directly sending a text string:
    // Inject the content script into the current page 
    //chrome.tabs.executeScript(null, { file: 'background.js' });
    // chrome.runtime.sendMessage({greeting: s}, function(response) {
    //     console.log(response);
    //   });

    //console.log('hello');

} 

function onPageAPIDetailsReceived(pageDetails)  { 
    document.getElementById('summary').innerText = pageDetails.summary; 
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {

    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
        // eventPage.callDeepApi(onPageAPIDetailsReceived);

        
    });
   
    // console.log(s);
    chrome.runtime.sendMessage({greeting: 'hi'}, function(response) {
        console.log(response);
      });
});