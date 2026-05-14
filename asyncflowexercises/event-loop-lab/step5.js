console.log("3");
console.log("4");
async function test() {
console.log("1");
await Promise.resolve();
console.log("2");
}
test();
