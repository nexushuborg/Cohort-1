const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Retrieve existing users from LocalStorage

  document.querySelectorAll(".errors").forEach(e => e.classList.add("hidden"));
  // Hides all error messages before validating the form again

  //Empty Field Logics
  if(emailInput.value === ""){
    document.getElementById("logNoEmail").classList.remove("hidden");
    return;
  } else {
    document.getElementById("logNoEmail").classList.add("hidden");
  }
  if(passwordInput.value === ""){
    document.getElementById("logNoPass").classList.remove("hidden");
    return;
  } else {
    document.getElementById("logNoPass").classList.add("hidden");
  }

  // Find user with matching email and password Logic
  const matchedUser = users.find((u) => u.email === emailInput.value);

  if (matchedUser && matchedUser.password === passwordInput.value) {
    setTimeout(() => {
      document.getElementById("loginSuccess").classList.remove("hidden");
      document.getElementById("logredirecting").classList.remove("hidden");
      // alert("Login successful!");
      // toggleDashboard();
  }, 3000);
  } else {
    document.getElementById("loginError").classList.remove("hidden");
    document.getElementById("logredirecting").classList.add("hidden");
    // alert("Invalid email or password");
  }
});
