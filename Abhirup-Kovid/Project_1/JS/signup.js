const form = document.getElementById("form");
const displayArea = document.getElementById("displayArea");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const passwordMatchError = document.getElementById("passwordMatchError");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username.trim() === "") {
        usernameError.style.display = "block";
        return;
    } else {
        usernameError.style.display = "none";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
        return;
    } else {
        emailError.style.display = "none";
    }

    if (password.trim() === "") {
        passwordError.style.display = "block";
        return;
    } else {
        passwordError.style.display = "none";
    }

    if (confirmPassword.trim() === "") {
        confirmPasswordError.style.display = "block";
        return;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (confirmPassword !== password) {
        passwordMatchError.style.display = "block";
        return;
    } else {
        passwordMatchError.style.display = "none";
    }

    displayArea.innerHTML = `<p style="color: green;">Account created successfully!</p>`;
    form.reset();
});