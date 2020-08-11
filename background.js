
chrome.runtime.onMessage.addListener(function(message)  { 
    // Call the callback function
   //callback(message); 
    //console.log(message.summary);

   const yourRequestObject = {
        "text": message.summary
    };
    console.log(message.summary)

    fetch('https://us-central1-tldr-extension.cloudfunctions.net/helloWorld', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(yourRequestObject)
    })
    // Convert reponse to JSON
    .then(response => response.json())
    .then(yourResponseObject => {
        var views = chrome.extension.getViews({
            type: "popup"
        });
        views[0].document.getElementById('summary').innerHTML = yourResponseObject.output;
        console.log(yourResponseObject);
        // sendResponse()
    })
    // .catch(error => { console.error(error) });
    
}); 

 