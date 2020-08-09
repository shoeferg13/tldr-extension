
// //function callDeepApi(callback) { 
//     chrome.runtime.onMessage.addListener(function(message)  { 
//         // Call the callback function
//        // callback(message); 
//        console.log('resp');
//         const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

//         deepai.setApiKey('75b44993-b8d3-464d-873d-33bb0129fe0a');
        
//         (async function() {
//             var resp = await deepai.callStandardApi("summarization", {
//                     text: 'hjkjkkljkbl',
//             });
//             console.log(resp);
//             chrome.runtime.sendMessage({
//                 'summary': resp
//             });
//         })()
//     }); 
// //}


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



 