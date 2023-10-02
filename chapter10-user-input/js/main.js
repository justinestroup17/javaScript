/* CH 10:
    USER INPUT */

// User just gets data and clicks ok, no data returned from user
alert("Hello World!"); // Shows name of website at top

// Confirmed return
confirm("Ok === True\nCancel === False"); // If user hits ok, returns true value, otherwise user hits cancel, returns false value

// Make a variable to receive data returned by confirm statement
let myBoolean = confirm("Ok === True\nCancel === False");

// Look to see value of myBoolean after accepting user confirmation
console.log(myBoolean);

// Third type of user input = prompt (input box)
let name = prompt("Please enter your name:"); // Name variable will get value returned

// Look to see value of name after accepting user input
console.log(name);

// If user clicks "Cancel" when should have entered data in a prompt input box, will return null. Plan for this.
console.log(name?? "You didn't enter your name."); // If name has a value, log name to console. Else it's null or undefined, then send response to console

// If user clicks "Ok" but didn't enter any data, will still return string. Plan for this
if (name) {
    console.log(name);
} else {
    console.log("You didn't enter your name.");
}

// Check for whitespace characters
if (name) {
    console.log(name.length); // Length of name with any whitespace chars at beginning and end
    console.log(name.trim().length); // Length of name without whitespace chars at beginning and end
    console.log(name.trim()); // Name without whitespace chars at beginning and end
} else {
    console.log("You didn't enter your name.");
}