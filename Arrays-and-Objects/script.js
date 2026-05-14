// ===============================
// Step 2: Implement Arrays
// ===============================

// Subtask 2.1: Create Arrays
let fruits = ["apple", "banana", "mango"];
let numbers = [10, 20, 30, 40];
let students = ["Ana", "Ben", "Chris"];

// Subtask 2.2: Use Array Methods

// push - add element at the end
fruits.push("orange");

// pop - remove last element
fruits.pop();

// unshift - add element at the beginning
numbers.unshift(5);

// shift - remove first element
numbers.shift();

// length - check size
console.log("Fruits count:", fruits.length);
console.log("Numbers count:", numbers.length);


// ===============================
// Step 3: Implement Objects
// ===============================

// Subtask 3.1: Create Objects
let student = {
    name: "John",
    age: 20,
    course: "BSIT"
};

let product = {
    name: "Laptop",
    price: 45000,
    brand: "Dell"
};

// Subtask 3.2: Access and Modify Properties

// Dot notation
console.log(student.name);

// Bracket notation
console.log(product["price"]);

// Modify values
student.age = 21;
product.price = 42000;

console.log("Updated student:", student);
console.log("Updated product:", product);


// ===============================
// Step 4: Built-in Methods
// ===============================

// Subtask 4.1: Array Processing Methods

let scores = [75, 80, 90, 60, 85];

// forEach - print each score
scores.forEach(score => {
    console.log("Score:", score);
});

// map - increase each score by 5
let boostedScores = scores.map(score => score + 5);
console.log("Boosted Scores:", boostedScores);

// filter - get passing scores (>= 80)
let passing = scores.filter(score => score >= 80);
console.log("Passing Scores:", passing);


// Subtask 4.2: Combine Objects and Arrays

let inventory = [
    { item: "Mouse", price: 500 },
    { item: "Keyboard", price: 1200 },
    { item: "Monitor", price: 7000 }
];

// Add new object to array
inventory.push({ item: "Headset", price: 1500 });

// Process array of objects
inventory.forEach(product => {
    console.log(`${product.item} costs ${product.price}`);
});

// Filter expensive items
let expensiveItems = inventory.filter(product => product.price > 1000);
console.log("Expensive Items:", expensiveItems);


// ===============================
// Step 5: Testing and Validation
// ===============================

console.log("Final Arrays and Objects Test Complete ✔");