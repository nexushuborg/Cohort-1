const signupform = document.getElementById("signupForm");
// Finds the signup form from HTML and stores it in a variable

signupform.addEventListener("submit", (e) => {
  // Listens for the "submit" event when the signup button is clicked

  e.preventDefault();
  // Prevents the page from refreshing after form submission

  const user = document.getElementById("regUsername").value;
  // Gets the username entered by the user

  const email = document.getElementById("regEmail").value;
  // Gets the email entered by the user

  const pass = document.getElementById("regPassword").value;
  // Gets the password entered by the user

  const cpass = document.getElementById("confirmPassword").value;
  // Gets the  confirmed password entered by the user

  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Retrieve existing users from LocalStorage

  const noUser = document.getElementById("noUser");

  //Empty Field Logic
  if(user===""){
    // document.getElementById("noUser").textContent = "Username is required";
    alert("No user entered");

  }


  //Username Logic
  if (users.find((u) => u.username === user)) {
    alert("Username taken!");
    return;
  }


  //Email Logic
  if (email.length < 5 || !email.includes("@")) {
    alert("Invalid email format!");
    return;
  }
  if (users.find((u) => u.email === email)) {
    alert("Email already registered!");
    return;
  }

  
  //Password Logic
  if(pass.length < 6){
    alert("Password is too short");
    return;
  }

  // Confirm Password Logic
  if (pass !== cpass) {
    document.getElementById("passMismatch").classList.toggle("hidden");
    // alert("Passwords don't match!");
    return;
  }

  users.push({ username: user, email: email, password: pass });
  // Add new user object to array

  localStorage.setItem("users", JSON.stringify(users));
  // save updated users array into LocalStorage

  alert("Signup Successful! Please login.");
  toggleForm();
  // switch from signup form to login form
});

function toggleForm() {
  // Function to toggle between registration and login forms
  document.getElementById("signupForm").classList.toggle("hidden");
  document.getElementById("loginForm").classList.toggle("hidden");
}


function viewPassword(inputId, eyeIcon) {
    // Get the password input by its id
    const input = document.getElementById(inputId);
 
    if (input.type === "password") {
        // Password is hidden → show it
        input.type = "text";
        eyeIcon.textContent = "🙈"; // closed eye = password visible (toggle icon)
    } else {
        // Password is visible → hide it
        input.type = "password";
        eyeIcon.textContent = "👁"; // open eye = password hidden
    }
}

function StrengthCheck() {
    const password = document.getElementById("regPassword").value;
    const bars = document.querySelectorAll(".barstrength");
    const label = document.getElementById("strength-label");
    const colors = ["#ef4444", "#06b6d4", "#3b82f6", "#7c3aed"];
    const strengthText = ["Weak", "Good", "Great", "Perfect"];
    let strength = 0;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[!@#$%^&*()-+]/)) strength++;
    
    bars.forEach((bar, index) => {
        if (index < strength) {
            bar.style.backgroundColor = colors[strength - 1];
        } else {
            bar.style.backgroundColor = "lightgray";
            // bar.style.display = "none";
        }
        if (password.length === 0) {
          label.textContent = "";           // empty when no input
        } else {
          label.textContent = strengthText[strength - 1];
          label.style.color = colors[strength - 1];
        }
    });
}