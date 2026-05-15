const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;

  // Validation Errors
  if (email === "" || password === "" || age === "") {
    message.textContent = "All fields are required.";
    message.style.color = "red";
    return;
  }

  // Email Validation
  if (!email.includes("@")) {
    message.textContent = "Email must contain @ symbol.";
    message.style.color = "red";
    return;
  }

  // Password Validation
  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
    message.style.color = "red";
    return;
  }

  // Age Validation
  if (isNaN(age)) {
    message.textContent = "Age must be a number.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "Validation successful!";
  message.style.color = "green";

});