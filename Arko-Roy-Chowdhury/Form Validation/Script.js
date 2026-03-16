// let div = document.getElementById("container");

// const button = document.createElement("button");
// button.textContent = "Submit";
// div.appendChild(button);

// div.removeChild(button);

// const button = document.getElementById("btn");

// button.onclick = function() {
//     alert("Button was Clicked");
// }

// button.addEventListener("mouseover", function() {
//     alert("Mouse is over the button");
// }); 

const form = document.getElementById("RegistrationForm");

form.addEventListener("submit", function(ele) {
    ele.preventDefault(); // Page reload prevented
    
    //Values Reading
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
});

//Form Vlidation
if(username === "" || email === "" || password === "") {
    alert("All fields are required");
    return;
}

if(username.length < 3) {
    alert("Username must be at least 3 characters long");
    this.style.border = "2px solid red";
}