/* Chapter 21 - Document Object Model */

// DOM - Document Object Model
// The DOM responds like an object does with both properties and methods
// Elements are selected in the document

// We only give a specific ID to one element in our webpage
// Select an element with an ID:
const view1 = document.getElementById("view1");
console.log(view1); // Displays to the console the element returned by getElementById

// Query selector can select elements by other means, not just by ID
const view2 = document.querySelector("#view2"); // Must use # symbol to indicate ID
console.log(view2); // Displays the element returned by querySelector

// Can show or hide parts of the view
// Can change the CSS properties by accessing the style property & then the display property of the style property
view1.style.display = "flex"; // Hides view1
view2.style.display = "flex"; // Shows view 2

/*Putting these together like the below, stacks them */
// view1.style.display = "flex";
// view2.style.display = "flex";

const views = document.getElementsByClassName("view"); // Selects both views
console.log(views); // Displays to the console HTML collection, which is like an array but not quite

const sameViews = document.querySelectorAll(".view");
console.log(sameViews); // Displays to the console node list which includes all elements on a web page

// Using results of previous query (view1). Select all divs in view1
const divs = view1.querySelectorAll("div"); // No # needed, just tag name
console.log(divs);

// Uses selectors much like CSS does to identify the different elements on the page
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

// Select even divs only
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// Change appearance for each even div using styles and a for loop
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1"); // Inside the navbar, I want the h1
console.log(navText);

navText.textContent = "Hello World"; // Changes the text for the h1 inside the navbar

const navbar = document.querySelector("nav"); 

// Different than textContent because before you were just changing the text, will change the inner HTML with HTML property (innerHTML will overwrite everything currently in there)
navbar.innerHTML = "<h1>Hello!</h1> <p>This should align right.</p>";
console.log(navbar);

// navbar.style.justifyContent = "flex-start"; // Sends everything to the left
// navbar.style.justifyContent = "flex-end"; // Sends everything to the right
// navbar.style.justifyContent = "space-evenly"; // Sends everything to the middle
navbar.style.justifyContent = "space-between"; // Sends everything to right and left which looks good for navbar

console.log(evenDivs[0]); // Log the first evenDiv
console.log(evenDivs[0].parentElement); // The full section itself is the parent element of this div
console.log(evenDivs[0].parentElement.children); // Show all the children of the parent element
console.log(evenDivs[0].parentElement.childNodes); // Shows 25 childNodes (children are actual elements, childNodes are elements and text nodes like white space)
console.log(evenDivs[0].parentElement.hasChildNodes()); // Returns true because there's 25 child nodes
console.log(evenDivs[0].parentElement.lastChild); // Returns text node, as it is the last child of the parent element
console.log(evenDivs[0].parentElement.lastElementChild); // Returns the very last element of the parent element
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild); // Returns first element
console.log(evenDivs[0].nextSibling); // Returns text node
console.log(evenDivs[0].nextElementSibling); 
console.log(evenDivs[0].previousSibling); 
console.log(evenDivs[0].previousElementSibling); 

// In CSS, these styles WOULD have hyphens, but in JavaScript, they are just camelCase
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row"; // Changes flex direction from column to row
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) { // While view2 has a lastChild
    view2.lastChild.remove(); // remove last child of view2 (all nodes, not just elements)
}

const createDivs = (parent, iterator) => {
    const newDiv = document.createElement("div"); // Creates new div element

    // Access new element and add some properties to it
    newDiv.textContent = iterator; // Number each square we create
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
};

// Ended at 4:38