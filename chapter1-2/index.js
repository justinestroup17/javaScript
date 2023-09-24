let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
console.log ('Hi');

let person = {
    name: 'Justine',
    age: 30
}; // Curly brackets object literal

console.log(person);

person.name = 'Koda';
person.age = 6;

console.log(person.name);
console.log(person.age);

// Bracket Notation
person['name'] = 'Luna';

console.log(person.name);

let selectedColors = []; // array literal indicating an empty array

let selectedFoods = ['banana', 'peanut', 'yogurt'];
console.log(selectedFoods);
console.log(selectedFoods[2]);

selectedFoods[2] = 'chicken';
console.log(selectedFoods);

function greet() {
    console.log('Hello');
}
greet();