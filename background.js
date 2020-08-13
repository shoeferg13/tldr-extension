
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
        var s =  yourResponseObject.output;
        s = s.replace(/\s\*/g, '\n&bull;');
        views[0].document.getElementById('summary').innerHTML = s ;
        console.log(yourResponseObject);

        //------copy Summarized text to clipboard-----
        //Create a textbox field where we can insert text to. 
        var copyFrom = document.createElement("textarea");

        //Set the text content to be the text you wished to copy.
        copyFrom.textContent = s;

        //Append the textbox field into the body as a child. 
        //"execCommand()" only works when there exists selected text, and the text is inside 
        //document.body (meaning the text is part of a valid rendered HTML element).
        document.body.appendChild(copyFrom);

        //Select all the text!
        copyFrom.select();

        //Execute command
        document.execCommand('copy');

        //(Optional) De-select the text using blur(). 
        copyFrom.blur();

        //Remove the textbox field from the document.body, so no other JavaScript nor 
        //other elements can get access to this.
        document.body.removeChild(copyFrom);
                    // sendResponse()
                })
            // .catch(error => { console.error(error) });
            
}); 

 