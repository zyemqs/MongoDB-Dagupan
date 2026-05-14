// ============================================================
//  ES6 Destructuring Lab — destructuring.js
// ============================================================

// ────────────────────────────────────────────────────────────
// STEP 2: Array Destructuring
// ────────────────────────────────────────────────────────────

const colors = ["red", "green", "blue", "yellow"];

// Basic extraction
const [first, second] = colors;
console.log("=== STEP 2: Array Destructuring ===");
console.log("first:", first);     // red
console.log("second:", second);   // green

// Skip elements using commas
const [, , third] = colors;
console.log("third (skipped 0 and 1):", third); // blue

// Rest syntax to collect remaining elements
const [head, ...rest] = colors;
console.log("head:", head);   // red
console.log("rest:", rest);   // ["green", "blue", "yellow"]

// Swap variables without a temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log("After swap — a:", a, "b:", b); // a:2, b:1


// ────────────────────────────────────────────────────────────
// STEP 3: Object Destructuring
// ────────────────────────────────────────────────────────────

const student = {
  name: "Maria",
  age: 21,
  course: "Computer Science",
  year: 3
};

// Extract multiple properties at once
const { name, age, course } = student;
console.log("\n=== STEP 3: Object Destructuring ===");
console.log("name:", name);     // Maria
console.log("age:", age);       // 21
console.log("course:", course); // Computer Science

// Rest syntax collects remaining properties into a new object
const { name: studentName, ...details } = student;
console.log("studentName:", studentName); // Maria
console.log("details:", details);         // { age: 21, course: "Computer Science", year: 3 }


// ────────────────────────────────────────────────────────────
// STEP 4: Advanced Destructuring
// ────────────────────────────────────────────────────────────

const employee = {
  id: 101,
  fullName: "Juan dela Cruz",
  address: {
    city: "Quezon City",
    country: "Philippines"
  },
  scores: [95, 87, 91]
};

console.log("\n=== STEP 4: Advanced Destructuring ===");

// Nested object destructuring
const { address: { city, country } } = employee;
console.log("city:", city);       // Quezon City
console.log("country:", country); // Philippines

// Variable renaming (fullName → empName) + default value for missing property
const { fullName: empName, department = "General" } = employee;
console.log("empName (renamed from fullName):", empName);   // Juan dela Cruz
console.log("department (default value):", department);     // General

// Nested array destructuring — extract first element of scores
const { scores: [topScore] } = employee;
console.log("topScore:", topScore); // 95

// Combined: rename + nested + default
const {
  id: empId,
  address: { city: empCity },
  bonus = 0
} = employee;
console.log("empId:", empId);     // 101
console.log("empCity:", empCity); // Quezon City
console.log("bonus (default):", bonus); // 0


// ────────────────────────────────────────────────────────────
// STEP 5: Destructuring in Function Parameters
// ────────────────────────────────────────────────────────────

console.log("\n=== STEP 5: Destructuring in Function Parameters ===");

// Object destructuring in function parameters with default value
function greetStudent({ name, course = "Undeclared" }) {
  console.log(`Hello, ${name}! Enrolled in: ${course}`);
}

greetStudent({ name: "Ana", course: "Information Technology" });
greetStudent({ name: "Ben" }); // course uses default

// Array destructuring in function parameters
function showTopTwo([first, second]) {
  console.log(`Top scores — 1st: ${first}, 2nd: ${second}`);
}

showTopTwo([98, 95, 90]);

// Nested object destructuring in function parameters
function getCity({ address: { city } }) {
  console.log(`Employee city: ${city}`);
}

getCity(employee);

// Combined: rename + default inside function parameter
function displayEmployee({ fullName: name, department = "General", id }) {
  console.log(`ID: ${id} | Name: ${name} | Dept: ${department}`);
}

displayEmployee(employee);
