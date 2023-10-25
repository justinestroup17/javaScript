/* Chapter 22: Event Listeners */

/* Before we can interact with the Document Object Model, we need to make sure that the DOM is fully loaded and is ready to interact with */
/* Use the attribute defer for the script tag in the head tag, otherwise can put the script tag at the very bottom of the body tag */

/* If you put the script tag in the head of the HTML, it might cause JavaScript to not load and return null. It's because
first the script loads, then the tags load after that. So when the querySelector tries to select the element, the element doesn't
exist yet. Need to either add the script tag at the botton right before the closing body tag, or add the attribute called "defer"
to the script tag while leaving the script tag in the head of the document. */

// All elements and nodes need to be actually loaded before we try to work with these

// Syntax: addEventListener(event, function, useCapture);
const doSomething = () => {
  alert("Doing Something");
};

//Ready State Change Event = The page is loaded enough that the DOM is loaded and ready to interact with
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp(); // If ready, kick off your web app/program
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  // These are anonymous functions:
  view.addEventListener(
    "click",
    (event) => {
      // Can omit false for the eventCapture parameter, and the default is still false
      view.classList.add("purple");
      view.classList.remove("darkblue");
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
      // event.target.style.backgroundColor = "blue" will not change the div to blue, only the background of the text (very small box around text)
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Already Clicked")
        : (event.target.textContent = "My 2nd View");
    },
    false
  );

  /* If not using eventCapture, then we prefer event bubbling (work from the inside to outside)
    stopPropagation goes from the outside, in */

  // Can remove an event listener when we have the name of the function, cannot remove an anonymous function the same way, however
  // h2.removeEventListener("click", doSomething, false);

  /* Event Capture = If set to true, it works from the out to the innermost element/click event, working its way in (working its way out when set to false). It is propagating that event */

  /* If you use event.target.classList.toggle, then it will only apply to the exact element (i.e. the h2) but if you use
     div.classList.toggle then it will apply to the whole div itself, including the h2 */

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100"); // makes it so when mouseover is done, nav goes back to normal (as opposed to "add" method)
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
  h2.addEventListener("mouseover", (event) => {
    event.target.classList.add("big-font");
  });
  h2.addEventListener("mouseout", (event) => {
    event.target.classList.remove("big-font");
  });
};

/* If you use classList.add, then it will add the class and stay there. You can then use classList.remove to remove it
 * If you use classList.toggle, then it will make the class toggle and not stay there */
