// let colors=["red","orange","green","bule"];


// const but=document.querySelector("#red");
// function redcolor(){
//   const ele=document.querySelector("#three");
//   ele.className="red"
// }
// but.onclick=redcolor



// const but1=document.querySelector("#orange") 
// function orangecolor(){
//   const ele2=document.querySelector("#one")
//   ele2.className="orange"
// }
// but1.onclick=orangecolor


// let colors = ["red","orange","blue","green"];

// function colorise(){
//   let element=document.querySelectorAll('.num');
//   colors.reverse()
//   console.log(colors)
//   for(let i=0;i<element.length;i++){
//     element[i].id=colors[i];
//   }

// }
// const but=document.querySelector("#but");
// but.addEventListener('click',colorise);



// let div=document.getElementById("container")

// const btn=document.createElement("button")
// btn.textConten="click me"
// div.prepend(btn)
// div.removeChild(btn)



//Event handling

// const btn=document.getElementById("btn");
// // btn.onclick=function(){ //onclick only with button
// //   alert("hello")
// // };

// //add eventlistner with all elements
// btn.addEventListener("mouseenter",function(){
//   // console.log("2nd")
//   this.style.backgroundColor="blue"
// })
// btn.addEventListener("mouseleave",function(){
//   this.style.backgroundColor="red"
// })


//FORM MANIPULATION/VALIDATION

const form=document.getElementById("registrationform")

form.addEventListener("submit",function(event){
  event.preventDefault() //page reload prevented
  //values reading
  const username=document.getElementById("username").value.trim()
  const email=document.getElementById("email").value.trim()

  console.log("username:",username)
  console.log("email:",email)

  //form validation 

 if(username===""||email===""){
  alert("Please fill all fields")
 }

 //this refer to the current present element might be a div or an input field of any element
 if(username.length <3){
  alert("Username must be of atmost 3 ")
  this.style.border="2px solid red"
 }
})

