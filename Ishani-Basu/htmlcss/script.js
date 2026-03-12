const el = document.getElementsByClassName("num");
console.log(el)

const arr = [1,2,3]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
// for(e in arr){ //for each loop
//     console.log(e);
// }
// let colors = ['green','blue','yellow','red'];

// let i = 0;
// for(e of el){
//     e.style.color = colors[i];
//     i++;
// }
let colors = ['green','blue','yellow','red'];
function colorise(){
    const el = document.getElementsByClassName("num");
    colors.reverse();
    let i = 0;
    for(e of el){
        e.style.color = colors[i];
        i++;
    }
}
const button = document.getElementById('but')
button.onclick = colorise;

// let div = document.getElementById('div-container');
// const btn = document.createElement('button');
// btn.textContent = 'Click me';
// div.appendChild(btn);
//div.prepend(btn); //to add the button before the h1 element
//div.removeChild(btn); //to remove the button
//div.remove(); //to remove the entire div container and its children

//Event Handling
//onclick works with button
const btn = document.getElementById("btn");
btn.onclick = function(){
    alert("Button Clicked");
};
//addEventListener works with all elements
btn.addEventListener('mouseover', function(){
    console.log("Mouse Hovered");
});
btn.addEventListener('mouseenter', function(){
    this.style.backgroundColor = "lightblue";
});
btn.addEventListener('mouseleave', function(){
    this.style.backgroundColor = "";
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
//form.reset() -> to clear the form

const para = document.getElementById("para");
para.classList.add("para-class") //adds a class name to that element

//$ sign meaning
let docs = "guys"
console.log("Hi ",$(docs))