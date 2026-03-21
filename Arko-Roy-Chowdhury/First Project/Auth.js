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

  
  //Password Logic
  if(pass.length < 6){
    alert("Password is too short");
    return;
  }
  
  
  // Confirm Password Logic
  if (pass !== cpass) {
    alert("Passwords don't match!");
    return;
  }

  users.push({ username: user, password: pass });
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
