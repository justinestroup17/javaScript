const playGuitar = () => {
  return "Playing guitar!";
};

const shredding = () => {
  return "Shredding some licks!";
};

const plucking = () => {
  return "Plucking the strings...";
};

// default export for guitars.js file
export default playGuitar;

// will export all the functions just created (one way, can also do inline)
export { shredding, plucking };

/* OPTIONAL WAY TO EXPORT FUNCTIONS IS TO DO SO INLINE:
    export default function playGuitar = () => {
        return "Playing guitar!";
    };

    export const shredding = () => {
        return "Shredding some licks!";
    };

    export const plucking = () => {
        return "Plucking the strings...";
    };

    /* exported functions to be imported in the main.js file */

*/
