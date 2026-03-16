// let ele =document.getElementById("pehla")
// console.log(ele)
// ele.innerText="hi"

// let element = document.getElementsByClassName("pehla");
// console.log(element);
// console.log(element[0]);
// console.log(typeof element);

// let element1 = document.getElementsByClassName("pehla");
// for(let i = 0;i<element1.length;i++){
//     console.log(element1[i].innerText);
// }
// for(ele of element1){
//     console.log(ele.innerText)
// }

// let tag = document.getElementsByTagName('h1')
// for(let i = 0;i<tag.length;i++){
//     console.log(tag[i].innerText);
// }
// console.log(tag);


//querySelector
// let q = document.querySelectorAll("h1")
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }
// let q1 = document.querySelectorAll("h2")
// console.log(q1)
// for(ele of q1){
//     console.log(ele.innerText)
// }


const element = document.querySelector("div");
console.log(element.textContent)// sara text content la ke de dega.
console.log(element.innerText)// jo available text hai wahi la ke dega.


//lecture 11 march 2026;

let div = document.getElementById("div-container")
    const btn = documment.createElement("button")
    btn.textContent="click me"
    div.prepend(btn)
    div.removeChild(btn);




    //Event handling
    // const btn = document.getElementById("Btn")
//on click with button
    // btn.onclick = function(){
    //     console.log("1st")
    // }

//addEventListner with all the elements;
// btn.addElementListner("mouseenter",function()){
//     this.style.background
// }
// <form if = "rsgestrationform">
//     <div>
//         <label for = "username">Usrename:</label>
//         <input type = "text" id = "email"name="email"
//         placeholder = "Enter email"></input>
//     </div>
//     <br>
//     <button tyoe = "submit">Register</button>
//     </br>
// </form>
const form = document.getElementById("registrationform")
form.addEventListener("submit",function(event){
    event.preventDefault()
})

//value reading
const username = document.getElementById("usrname")


//16/3/26;
