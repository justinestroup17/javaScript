/* Chapter 18: Classes */
class Pizza {
    crust = "original";
    #sauce = "traditional"; // Private field starts with # hashtag
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
        this.crust = "original";
        this.toppings = []; // No toppings when pizza object first created
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping); // Push new topping into the array
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    };
    bake() { // No function keyword needed when creating functions in classes
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) { // Must call in the constructor of the parent class
        super(pizzaSize); // Must be used before can use keyword this
        this.type = "The works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}


const myPizza = new Pizza("small"); // Creating a pizza object
myPizza.setCrust("thin");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());
// Can change the values of a property with just dot notation in JavaScript, but it's not desirable. To prevent this, use getter and setter

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();
// Don't need to instantiate the parent class to get parent class stuff, just use the blueprint (its class)

// FACTORY FUNCTION = A solution to a problem - making properties not accessible outside of the object (keep private)
// A factory for object creation
/* function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return { // Can return a function
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`) // No semi-colon here
    };
}

const myPizza2 = pizzaFactory("small");
myPizza2.bake(); */

const myPizza3 = new Pizza("large");
myPizza3.hereYouGo();
console.log(myPizza3.getCrust());
// console.log(myPizza3.sauce); Yields undefined due to private field