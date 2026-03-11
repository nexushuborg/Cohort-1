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
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
});

//Form Vlidation
if(username === "") {
    alert("Username is required");
    return;
}