/* Chapter 23: Web Storage API */

// The Web Storage API is NOT part of the DOM. Instead, it refers to the window API
// Available to JavaScript via the global variable, window

// We do not have to type "window". It is implied.

// Same as: alert("ok");
window.alert("ok");

// window.location returns the URL of a website
window.alert(window.location);

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Justine",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

myObject.logName();

/* Session storage only keeps the data during the session (while on the website or logged into the website).
   Once the browser is closed, the session is closed, and that data is no longer in storage */

/* Local storage will store persistent data and will continue to store that data in the browser, but is not
   attached to the local tab or local browser. We can reopen our browser, go back to the same website, and
   retrieve that data. */

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject)); // 1st parameter is naming the store, 2nd parameter is what you'd like to store

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); // Only stores string data, if it's not string data, it will attempt to convert it to string data
console.log(mySessionData);

// Using the web storage API with either local storage or session storage, using JSON parse after using JSON stringify will put it back to the object that the data needs to be in
// Therefore, it can turn back into the object or the array that we need it to be
// JSON does lose methods through the conversion.

// For local storage (my persistent data), change the word "session"
localStorage.setItem("myLocalStore", JSON.stringify(myArray));

// Return the key
const key = localStorage.key(0);
console.log(key); // Have to give the index of where that is

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

// Find out how many items are in local storage
const number = localStorage.length;
console.log(number);

// Remove item localStorage.removeItem("myLocalStore");
// If the data does not exist and we attempt to get it, it will return null. Need to be prepared for that, just in case

// If want to remove all items at once:
localStorage.clear();

// These methods work with both localStorage and sessionStorage

/* There could be other items in localStorage for other websites. This would be how many
   are in the localStorage (or the sessionStorage) for THIS particular website or webapp */
