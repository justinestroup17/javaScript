/* Chapter 19: JSON */
// JSON = JavaScript Object Notation
/*
JSON is used to send and receive data (usually a web app & a server)
JSON is a text format that is completely language independent
Meaning JSON is used to send & receive data in many languages, not just in JavaScript
*/

const myObj = {
    name: "Justine",
    hobbies: ["snowboarding", "coding", "playing guitar"],
    hello: function () {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// Take object and send it to JSON
const sendJSON = JSON.stringify(myObj); // Converts object to a string in proper data format
console.log(sendJSON); // JSON does not send functions, so function is not displayed in console.log
console.log(typeof sendJSON); // Displays string
console.log(sendJSON.name); // Displays undefined b/c object has been converted to a JSON formatted string & doesn't respond like a regular object does

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // Now an object again, displays as object. But function is still lost
console.log(typeof receiveJSON); // Displays object