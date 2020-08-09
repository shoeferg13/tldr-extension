// This callback function is called when the content script has been 
// injected and returned its results
function onPageDetailsReceived(pageDetails)  { 
    document.getElementById('title').value = pageDetails.title; 
    document.getElementById('url').value = pageDetails.url; 
    document.getElementById('summary').innerText = pageDetails.summary; 


    chrome.extension.getBackgroundPage().console.log('foo');
    var s = pageDetails.summary;

    // Example directly sending a text string:

    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

    deepai.setApiKey('75b44993-b8d3-464d-873d-33bb0129fe0a');

    (async function() {
        var resp = await deepai.callStandardApi("summarization", {
                text: 'hjkjkkljkbl',
        });
        console.log(resp);
    })()
    
    //console.log('hello');

} 

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {

    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});