/* Chapter 24: Modules */

/* Usually used to export different sections of code from one file to another.
   After that code is exported, you import it into another file.
   These sections are usually functions or classes. */

/* If doing this in a dev environment, need to have a local server running. Can't just load files from Windows directory and have modules work.
   The Live Server extension in VS Code works for this */

/*
   Must have this in your HTML file:
   <script type="module" src="js/main.js"></script>
   This automatically applies the defer keyword, so you don't need the defer keyword. So that the DOM is loaded first BEFORE the JavaScript
   This immediately applies strict mode. 
   (LETS JavaScript know going to be using modules)
   */

/* 
import module into main js file
*/
import playGuitar from "./guitars.js"; /* Relative path */
import { shredding, plucking } from "./guitars.js";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());

/* Can change name of function, if more than one person on a team creates a function with the same name.
Can do it as you export them or import them, but preferred is as you import them:

import {shredding as shred, plucking as fingerpicking} from "./guitars.js";
console.log(shred());
console.log(fingerpicking());
*/

// Import all
import * as Guitars from ".guitars.js";

// Need to use dot notation if you import all.
console.log(Guitars.default()); // Have to name it default, not playGuitar(), if there is a default. Otherwise can choose to not have a default
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// Import from user.js:
import User from "./user.js"; // Don't need curly braces if it's the default

const me = new User("email@email.com", "Justine"); // Create an instance of the class
console.log(me);
console.log(me.greeting());
