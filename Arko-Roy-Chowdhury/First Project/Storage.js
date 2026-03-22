const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Retrieve existing users from LocalStorage
  if (
    users.find(
      (u) => u.email === emailInput.value && u.password === passwordInput.value,
    )
  ) {
    alert("Login successful!");
  } else if (users.find((u) => u.email === emailInput.value)) {
    alert("Incorrect password!");
  } else {
    alert("User not found!");
  }
});
