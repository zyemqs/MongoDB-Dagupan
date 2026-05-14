// Step 3: Debug Faulty Code
// Add your debugging solutions here

console.log("Debugging session started");

// Step 4: Use Debugging Techniques
// Use console.log() to inspect values

function testFunction() {
    let a = 10;
    let b = 0;

    // Example runtime-safe check
    if (b !== 0) {
        console.log(a / b);
    } else {
        console.log("Cannot divide by zero");
    }
}

testFunction();
