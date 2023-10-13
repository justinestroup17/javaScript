/* CH 17: OBJECTS */

// Objects come in key-value pairs in curly braces

const myObj = { name: "Justine"};
console.log(myObj);
console.log(myObj.name); // Returns the value belonging to the key called "name"

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Snowboarding", "Play guitar", "Programming", "Video games"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    } 
};

console.log(anotherObj.hobbies[0]); // Displays Snowboarding
console.log(anotherObj["alive"]); // Displays true
console.log(anotherObj.action());

const vehicle = {
    wheels : 4,
    engine: function() {
        return "Vrroooom!";
    }
};

const truck = Object.create(vehicle); // Use the generic vehicle object as a constructor for truck object
truck.doors = 2; // Adding a property to truck
console.log(truck);
console.log(truck.wheels); // Inheriting the proprety wheels from the generic vehicle object
console.log(truck.engine()); // Inheriting the method engine from the generic vehicle object

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whoooosh!";
}
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhh...";
}
console.log(tesla.engine());


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band)); // Displays all of the keys of the band object
console.log(Object.values(band)); // Displays all of the values of the band object

// For-in loop
for (let job in band) { // Let KEY in OBJECT
    console.log(`On ${job}, it's ${band[job]}!`); // Display the keys and their values. Must use brackets, not dot notation
}

delete band.drums; // Delete an existing property
console.log(band.hasOwnProperty("drums")); // Will return a boolean to see if it has the property

// Destructuring objects
const { guitar: myVariable} = band; // We're defiing myVariable and pulling the key guitar out of the object
console.log(myVariable);

function sings({vocals}) { // Since destructuring, must refer parameter to specific key of object
    return `${vocals} sings!`;
}
console.log(sings(band));