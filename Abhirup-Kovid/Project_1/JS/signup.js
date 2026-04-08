const form = document.getElementById("form");
const displayArea = document.getElementById("displayArea");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const passwordMatchError = document.getElementById("passwordMatchError");
const passwordStrengthBar=document.getElementById('strengthBar-bar')

.addEventListener
const strengthBarFill = document.getElementById('strength-Bar').value;


function calculateStrength(password) {
    if (password.length < 4){
         return 1;
        }

    let strength = 1;
    if (password.length >= 8) strength++;
    if ([A-Z].test(password)) strength++;
    if ([0-9].test(password)) strength++;

    return Math.min(strength, 4);
}

function strengthBar() {
    const password = document.getElementById('password').value;
    const score = calculateStrength(password);
    const fill = strengthBarFill;

    fill.style.width = '0%';
    fill.style.backgroundColor = 'transparent';

    if (score === 1) {
        fill.style.width = '25%';
        fill.style.backgroundColor = '#ff4d4d';
    } else if (score === 2) {
        fill.style.width = '50%';
        fill.style.backgroundColor = '#ffb300';
    } else if (score === 3) {
        fill.style.width = '75%';
        fill.style.backgroundColor = '#1c49dc';
    } 
    else if(score === 4){
        fill.style.width='100%';
        fill.style.backgroundColor='#4caf01';
    }else if()
}

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

