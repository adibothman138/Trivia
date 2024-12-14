const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic login logic for testing
    if (username === "user" && password === "pass") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password!");
    }
});
