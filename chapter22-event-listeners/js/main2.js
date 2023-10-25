document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readystate: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");

  myForm.addEventListener("submit", (event) => {
    /* Prevent the default behavior of the form -
    grab the info from form w/o reloading entire page */
    event.preventDefault();
    console.log("Submit event");
  });
};
