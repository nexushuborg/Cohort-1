// const but = document.querySelector('#red')
// function colorise(){
//     const element = document.querySelector("#one");
//     element.className='red';

// }
// but.onclick = colorise

// let colour =['red','blue','orange','green'];

// function colorise(){
//     const elements= document.querySelectorAll('.num')
//     colour.reverse()
//     for(let i=0; i<elements.length ; i++){
//         elements[i].id=colour[i];
//     }
// }

// const but = document.querySelector('#but')
// but.addEventListener('click',colorise)

// //selecting / adding elements
// let div = document.getElementById("div-container")

// const link = document.createElement("button")

// btn.textContent = "CLICK ME"
// div.appendChild(btn)

// div.prepend(btn)

// const  btn = document.getElementById("myBtn")

//onclick works with button
// btn.onclick = function(){
//     alert("Hello")
// };


// //addEventListener works in every elements
// btn.addEventListener("mouseenter",function(){
//     this.style.backgroundColor="red"
// });

// btn.addEventListener("mouseleave",function(){
//     this.style.backgroundColor="Black"
// });

const form = document.getElementById("registrationForm")

form.addEventListener("submit",function(ele){
    ele.preventDefault()
    const username = document.getElementById("username").value.trim()

    const email = document.getElementById("email").value.trim()

    console.log("Username:", username)
    console.log("Email:", email)


    //form validation : checking the values of username and email(any other fields) to validate
    if(username ==="" || email === ""){
        alert("Please fill in the fields")
    }

    //this refers to the current present element -might be a div or an input field  or any form element
    if(username.length < 3){
        alert("Username have atleast 3 characters long")
        this.style.border="2px solid red"
    }
})

