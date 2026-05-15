// Access DOM Elements
const clickBtn = document.getElementById("clickBtn");
const outputText = document.getElementById("outputText");
const nameInput = document.getElementById("nameInput");
const keyInput = document.getElementById("keyInput");
const hoverBox = document.getElementById("hoverBox");
const demoForm = document.getElementById("demoForm");

// Click Event
clickBtn.addEventListener("click", () => {
  outputText.textContent = "Button was clicked!";
});

// Input Event
nameInput.addEventListener("input", () => {
  outputText.textContent = `Typing: ${nameInput.value}`;
});

// Change Event
nameInput.addEventListener("change", () => {
  outputText.textContent = `Changed value: ${nameInput.value}`;
});

// Focus Event
nameInput.addEventListener("focus", () => {
  nameInput.style.border = "2px solid blue";
});

// Blur Event
nameInput.addEventListener("blur", () => {
  nameInput.style.border = "1px solid #ccc";
});

// Keyup Event
keyInput.addEventListener("keyup", (event) => {
  outputText.textContent = `Last key typed: ${event.key}`;
});

// Mouseover Event
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
  outputText.textContent = "Mouse entered the box!";
});

// Mouseout Event
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightgray";
  outputText.textContent = "Mouse left the box!";
});

// Submit Event
demoForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const value = document.getElementById("formInput").value;

  outputText.textContent = `Form submitted with value: ${value}`;
});