/* CHAPTER 6:
 * CODING CHALLENGE */

/* This challenge returns a random letter from any name */

// Declare string
const myName = "Koda";

// Get random index between 0 and 6 for my 7 letter name
randomIndex = Math.floor(Math.random() * myName.length);

// Display character at random index of name and format
console.log("A random letter in the name " + myName +
    " is " + "\'" + myName.charAt(randomIndex) + "\'");