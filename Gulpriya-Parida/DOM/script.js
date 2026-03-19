// get element by id name 
//let ele=document.getElementById("one")
//console.log(ele)
//ele.innerText ="hi"


//element by class name
//returns HTML.COLLECTION[]
// let element=document.getElementsByClassName("first")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)

// let element=document.getElementsByClassName("first")
// for(let i=0;i<element.length;i++){
//     console.log(element[i].innerText);
// }
// for (ele of element){
//     console.log(ele.innerText)
// } 
//get element by tag name 
// let tag = document.getElementsByTagName('h1')
// for(let i=0; i<tag.length;i++){
//     console.log(tag[i].innerText)
// }


//query selectorALL
// let q= document.querySelectorAll("h1")
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }

//query selector =first match
// let q= document.querySelector("h1")
// console.log(q)
// for(let i=0; i<q.length ; i++){
//     console.log(q[i].innerText)
// }

// const element = document.querySelector("div")
// console.log(element.textContent)
// console.log(element.innerText)

//setting a button on javascript
// let div = documnet.getElementById("div-container")
// const btn = document.createElement("button")
// btn.textContent ="click me"
// div.prepend(btn)

// //Event Handling
// const btn=document.getElementById("button");

// //onClick with button
// btn.onclick = function(){
//     alert("hello world")
// };

// //addEventListener with all elements
// btn.addEventListener("mouseover",function(){
//     console.log("2nd")

// })


//main 
// let colors=['red','blue','orange','green'];
// function colorise() {
//         let element=document.querySelectorAll('.num');
//         colors.reverse()
//         console.log(colors)
//         for(let i=0;i<element.length;i++){
//         element[i].id = colors[i];
//         }

//     }


//     const but=document.querySelector('#but');
// but.addEventListener('click',colorise)



// function redcolor(){
//     const element=document.querySelector('#three');
//     element.className='red';
// }
// but.onclick=redcolor
// but.addEventListener('click',redcolor)

// const bu=document.querySelector('#blue');


// function bluecolor(){
//     const element=document.querySelector('#two');
//     element.className='blue';
// }
// bu.onclick=bluecolor
//but.onclick = document.querySelector('#three').classList.add('red')


//FORM MANUPILATION/VALIDATION
const form=document.getElementById("registrationForm")
form.addEventListener("submit" , function(ele){
    
    ele.preventDefault()//prevents from losing data after refreshing


    //values reading 
    const username =document.getElementById("username").value.trim()

    const email=document.getElementById("email").value.trim()

    // console.log("Usernamae" , username)
    // console.log("Email" , email)

    //Form validation : checking the values of username and email to validate in the form
    if(username === "" || email === ""){
        alert("Please fill in all fields")
    }

    if(username.length<3){
        alert("username must be atleast 3 char long")
        this.style.border = "3px solid red"
    }
})