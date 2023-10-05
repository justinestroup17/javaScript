/* CH 12: Loops */

// Loops
let myNumber = 0;

// Displays numbers 0 through 49
while (myNumber < 50) {
    console.log(myNumber);
    myNumber++;
}

let myInteger = 1;
// Displays numbers 1 through 50
while (myInteger <= 50) {
    console.log(myInteger);
    myInteger++;
}

let myEvens = 0;
// Displays even numbers through 50
while (myEvens <= 50) {
    console.log(myEvens);
    myEvens += 2;
}

// Do-While loop executes at least once
let myNum = 2;
do {
    myNum += 2;
    console.log(myNum);
} while (myNum < 50);

// For loop
// Three components
// 1. Variable
// 2. Condition
// 3. Increment/Decement Operator
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

/* Can define the variable before the for loop and can
increment/decrement inside the for loop if desired */

// Displays letters in the console on new lines
let myName = "Justine";
for (let i = 0; i < myName.length; i++) {
    console.log(myName.charAt(i));
}

// Another way to iterate through letters is having an ongoing while loop with a break condition
let friend = "Buddy";
let counter = 0;
let myLetter;

while (true) {
    // Iterate through letters in a name
    myLetter = friend.charAt(counter);
    console.log(myLetter);
    if (myLetter === "y") {
        break;
    }
    counter++;
}

let favoriteResort = "Arapahoe Basin";
let counter2 = 0;
let myLetter2;
while (counter2 < favoriteResort.length) {
    // Iterate through letters in name
    myLetter2 = favoriteResort[counter2];
    console.log(myLetter2);
    // If character at position 7 (the space in resort name), then skip and continue loop
    if (counter2 === 7) {
        counter += 2;
        continue;
    }
    counter2++;
}