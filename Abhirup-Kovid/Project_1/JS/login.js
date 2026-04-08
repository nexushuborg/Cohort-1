const form = document.getElementById("form");
const displayArea = document.getElementById("displayArea");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
        return;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    if (password.trim() === "") {
        passwordError.textContent = "Enter the password";
        passwordError.style.display = "block";
        return;
    } else {
        passwordError.style.display = "none";
    }

    // Success message
    displayArea.innerHTML = `<p style="color: green;">Login successful!</p>`;
    form.reset();
});