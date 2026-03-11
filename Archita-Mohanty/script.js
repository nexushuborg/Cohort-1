// // console.log('hello world')
// // console.log(20)
// // console.log(true)

// // int x=10;
// // string s="hello"

// var x=10;
// let y="hello"
// const z="world";

// var x =10
// var x;//declaration
// x=10;//initialization
// x=11;//reassigment
// var x=20;//redeclare and reinitialise leads to dataleak

// function name(){
//     console.log(x)
// }
// name()

// //let
// //let globally and block scope
// //reinitialise but cannot be re declare
// //const
// //cost global and blocked scope
// const a=10;
// {
//     let x=10
//     console.log(x)
//     {
//         // local var x and global var x
//         console.log(x)//dead zone cannot call x before
//         //  initialization

//         let x=11

//     }
//     console.log(x)
// }
// let arr = [1,2,3,4,5]
// //key value pair
// //let const obj_name={key:value}
// let obj={
//     "student":"himadri",
//     "mentor":"pratham",
// }
// console.log(arr[0])
// console.log(obj.student)
// console.log(obj["student"])
// console.log(obj["mentor"])

//  function print(a,b){
//      console.log(a-b)
//  }
//+ right ka type
 //-left ka type
// print(2,"3")


// const fn2=function(a,b){
//     console.log(a,b)
// }


// const fn=() =>{
//     console.log("Arrow")
// }

// fn()
// fn2(2,3)

// high order function
// function ho(a,b,cb){//cb is callback function
//     cb(a,b)
// }
// ho(2,3,print)
//javascript works on single thread and is 
//context switing and synchronous  
//  console.log("start")
//  setTimeout(()=>{
//     console.log("my processe")
    
//  },2000)
//  console.log('end')

//     const values=setTimeout(()=>{
//         return 10},1000)
    
// console.log("end")

// async function asy(){
//     console.log("start")

//     const data=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(()=>{//resolve
//         console.log("success")
//     })
//     .catch(()=>{//reject
//         console.log("failed")

//     })
//     .finally(()=>{//do ths always
//         console.log("process completed")
//     })

//     // setTimeout(fn,time in ms
//     console.log("end")

// }
// asy()

// function name(){
//     console.log(arguments)
// }
// name(1,2,3)

// const arrow=(...args)=>{
//     console.log(args)
// }
// function name(){
//      console.log(arguments)
// }
// name(1,"hello",3)
// arrow("arrow1","arrow2",1)
// const arr=[2,3,4]
// console.log(...arr)

// const element=document.getElementsByClassName('num');
// console.log(element)

// let colors=['red','yellow','blue','green'];
// let i=0;
// for(e of element){
//     e.style.color=colors[i];
//     i++;
// }
// const arr=[1,2,3]
// for(let i=0;i<arr,length;i++){
//     console.log(arr[i])
// }
// console.log('For each loop')
// for(e of arr){
//     console.log(e)
// }


// const element=document.getElementsByClassName('num')
// console.log(element)
// let colors=['red','orange','green','blue'];
// let i=0;
// for(e of element){
//     e.style.color=colors[i];
//     i++;
// }
// function colorise(){
//     const element=document.getElementsByClassName('num');
//     colors.reverse()
//     console.log(colors)
//     for(let i=0;i<element.length;i++){
//         element[i].id=colors[i];


//     }
// }
// const but=document.querySelector('#but');
// let colors=['red','orange','green','blue'];
// // const but=document.querySelector('#red');
// function redcolor(){
//     const element=document.querySelector('#three')
//     element.className='red';
// }
// // but.onclick=redcolor
// but.addEventListener('click',colorise)


//setting/adding elements to the Dom
// let div=document.getElementById("div-container")
// const btn=document.createElement("button")
// btn.textContent="click me"
// div.appendChild(btn)//to add in front use prepend
// div.removeChild(btn)//remove single element


//Event Handling
// const btn=document.getElementById("btn");
// btn.onclick=function(){
//     alert("hello world")
// }

//addEventLIstener with all elements
// btn.addEventListener("mouseeneter",function(){
//     this.style.background="red"
// });
// btn.addEventListener("mouseleave",function(){
//     this.style.bacground="blue"
// })

//FORM MANIPULATION/VALIDATION
const form=document.getElementById("registrationForm")
form.addEventListener("submit",function(ele){
    ele.preventDefault()
})

//Values reading
const username=document.getElementById("Username").value.trim() 
const email=document.getElementById("email").value.trim()
console.log("Username",username)
console.log("Email:",email)
//Form validation:checking the values of username 
// and email(any other fields)to validate in the form
if(username === ""|| email=== ""){
    alert("please fill in all fields")
}
//"this" refers to the current present element-might be a
//  div or an input field or any form element
if(username.length<3){
    alert("username must be atleast 3 characters")
    this.StylePropertyMap.border="2px solid red"
}








