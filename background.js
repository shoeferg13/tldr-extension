
//function callDeepApi(callback) { 
    chrome.runtime.onMessage.addListener(function(message)  { 
        // Call the callback function
       // callback(message); 
       console.log('resp');
        const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

        deepai.setApiKey('75b44993-b8d3-464d-873d-33bb0129fe0a');
        
        (async function() {
            var resp = await deepai.callStandardApi("summarization", {
                    text: 'hjkjkkljkbl',
            });
            console.log(resp);
            chrome.runtime.sendMessage({
                'summary': resp
            });
        })()
    }); 
//}


 