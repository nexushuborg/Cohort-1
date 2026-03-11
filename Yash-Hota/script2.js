//let colors=['red','orange','green','blue']
//
//function colorise(){
//    let element =document.querySelectorAll('.num');
//    colors.reverse()
//    console.log(colors)
//    for(let i=0;i<element.length;i++){
//        element[i].id=colors[i];
//    }
//}
//
//     const but = document.querySelector('#but');
//but.addEventListener('click',colorise)


const btn = document.getElementById("btn");
btn.onclick = function(){
    alert("Button Clicked");
};
//addEventListener works with all elements
btn.addEventListener('mouseover', function(){
    console.log("Mouse Hovered");
});

//form manipulation/validation
const form = document.getElementById('registration-form');
form.addEventListener('submit', function(ele){
    ele.preventDefault(); //to prevent the default form submission behavior (page reload prevented)
    //values reading
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(username, email, password);

    //form validation - checking the values of all fields to validate the form
    if(username === '' || email === '' || password === ''){
        alert("All fields are required");
    }
    if(username.length < 3){
        alert("Username must be at least 3 characters long");
        this.style.border = "2px solid red";  //this refers to the current present element, might be a div or input field or any form element
    };
});
