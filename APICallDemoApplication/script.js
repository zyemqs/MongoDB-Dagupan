const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");
const loading = document.getElementById("loading");

// Step 4.1 - Event Listener
button.addEventListener("click", fetchUsers);

// Step 4.2 - Fetch Data
function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  // Show loading
  loading.classList.remove("hidden");
  output.innerHTML = "";

  fetch(url)
    .then(response => {
      // Step 4.3 - Convert to JSON
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      // Step 5.1 - Display data
      displayUsers(data);
    })
    .catch(error => {
      // Step 5.2 - Error handling
      output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    })
    .finally(() => {
      // Step 5.3 - Hide loading
      loading.classList.add("hidden");
    });
}

// Display function
function displayUsers(users) {
  users.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Company: ${user.company.name}</p>
    `;

    output.appendChild(div);
  });
}