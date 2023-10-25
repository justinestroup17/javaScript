/* Chapter 23: Web Storage API */

// The Web Storage API is NOT part of the DOM. Instead, it refers to the window API
// Available to JavaScript via the global variable: window

// We do not have to type "window". It is implied.

window.alert("Ok!");

// Is the same as:
alert("Ok!");

//window.location returns the URL of a website
alert(location);

const myObject = {
  name: "Justine",
  logName: function () {
    console.log(this.name);
  },
};
const myArray = ["eat", "sleep", "code"];
myObject.logName();

// Session storage only keeps data during the session
// Local storage will store persistent data in the browser, but not attached to the open tab/browser

// Store some data
sessionStorage.setItem("mySessionStore", myObject);

const mySessionData = sessionStorage.getItem("mySessionStore");

console.log(mySessionData);

// Using the web storage API with JSON is the ideal way of storing data
// When converting an object to JSON, remember it will NOT keep methods, only the properties that we have defined
