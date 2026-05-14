console.log("A");
console.log("D");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
