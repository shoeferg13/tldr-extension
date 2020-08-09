const deepai = require('deepai');
deepai.setApiKey('75b44993-b8d3-464d-873d-33bb0129fe0a');
console.log("hello");
(async function() {
    var resp = await deepai.callStandardApi("summarization", {
            text: 'Notice that we first call makeAPICall(). That returns a promise, and so we attach a .then(). Inside that then(), we return a new call to makeAPICall(...), which, in and of itself, as seen earlier, returns a promise, permitting us chain on a new .then() after the first.'

    });
    console.log(resp);
    console.log("hi");
})()
