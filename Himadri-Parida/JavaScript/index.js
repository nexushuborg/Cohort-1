console.log("Hello world");
console.log("Second");  

// variables 
// 1.var(earlier version) 2.let 3.const

age = 22 //don't use it ever
console.log(age)

//var   (Scope is not defined )
// properties 1. redeclaration 2. reassign 3. Global Scope 4 . functional Scope

// var name ---> declaration of the name
// name = "Himadri" ----> inistialation 

// How to declare a function in a js
function getName(){
    var name  = "Hello"
}
console.log(name) //if there is dash then it is debriviation



//let
// Properties 1. No redeclaration 
// let name;
// let name;

// 2.Re-assignment
let call = "Iter"
console.log(call)
call = "Iter,BBSR"
console.log(call)
call = 56
console.log(call)
//this supports dynamic typing any datatype element can be stored in the variables

// Scoping
//1.Global Scope
// 2.Block Scope
{
    let name = "Hello"
    console.log(name)
}
// Problem in var is memory leak to prevent that we use let

//const
// const age ---> it should have declaration and instialisation in the same .. we cant declare in one line and intialisation in one line

// No reassignment
// const age = 10
// age = 20 ---> this is an error as it doesn't support re assignment

// it is also a block Variable can't be called outside the block

{
    const age =20
}
console.log(age)

if(true){
    const name = "Hello"
}
console.log(name)


// Hoisting  --> javascript first read the line before executing
console.log(a) //--> this is Executed Before in
var a = 10 
// let a = 10 //--> this is temporary dead zone but hoisting is done ... Shows Error
// // lines before this lines are Known as temporary dead Zone
// const a = 10 //--> this is temporary dead zone but hoisting is done   .... Shows Error 

// {
//     console.log(name)
//     let name = "Himadri"
// }

{
    let name = "Himadri"
    console.log(name) //---> Himadri
    {
        console.log(name) //---> this Gives the Error
        // let name = "Himadri"
        console.log(name)
    }
}


// Functions 
// array in js  -->let arr =[1,2,3,4]
let arr = [1,2,3,4]
console.log(arr)
console.log(arr[0]) //--> accessing through index

/*Objects in js -->let/const obj = {     
    "Key1": "Value1"
    "Key2": "Value2"
    "Key3": "Value3"
}    
... here the index is accordng to our perferance */
// object is a key value pair same as dictionary

let obj = {
    "Student" : "Himadri",
    "Mentor" : "Pratham Bhaiya"
}

console.log(obj["Student"]) //--> through keys 
console.log(obj.Student) //--> acts as a properties 

//Functions code
function print(a,b){
    console.log(a+b)
}
print(2,3)


function print(a,b){
    console.log(a+b)//--> the Preferance is given to string , then number 
}
print(2,"3")

function print(a,b){
    console.log(a-b)//--> the preferance is given to the number then the String but inside the string it should be a number not ap
}
print(2,"3")

// Arrow Function
// () => {     --> syntax for the arrow function  
    
// }

const fun = () => { //-->so basically storing a function
    console.log("Arrow")
}

// we can alo store Normal Function
const fun1 = function print(){
    console.log("Normal Function")
}



// High Order Function
function ho(a,b,cb){  //---> so, here we can add another function in the parameter .....   --> cb is the call back function

    console.log(a,b,cb)
}
ho(2,3,print)











// context switching
console.log("Start")

setTimeout(()=>{
    console.log("My Process")
},2000)

console.log("end")
// This works on synchorounous working / synchorouns behaviour means if some thing is taking time then we are going to  the next process and if the left one  is completed it comes back to the left one

// setTimeout(fn,time in ms) ---> this is a function to assign some time to the function

console.log("Start")

const data = fetch('https://jsonplaceholder.typicode.com/todos/1');/*-->this fetch a promise function that means it will gives me the  data in the future 
this is because of the synchoronous behaviour of js  */

console.log(data)
console.log("end")

// through asynchoronous behaviour we are breaking the behaviour of the js and wwe are telling the program to wait for the process then proceed
async function asy(){   //---> this is the syntax of the Asynchronoius Function .
    console.log("Start")

    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((fr)=>{
        console.log("Success")
        console.log(fr)
    }) //Await keyword used for to wait  ---> then is used to return a message or function when the promise is fulfilled
    .catch((err)=>{
        console.log("Failure")//--> catch if the promise is not fullfilled
        console.log(err)//--> to get the error message
    })
    .finally(()=>{
        console.log("Process is Commplete")//--> executed every time
    })

    console.log(data)
    console.log("end")
}
asy()

// const arrow = () =>{
//     console.log(arguement) // This gives error becausee this not defined in arrow function
// }

// function arr(){
//     console.log(arguements)
// }
// arr(1,2,3)
console.log(...arr) //--> this actually spread function which is used to spread

const arrow = (...args) =>{
    console.log(args) //--> now we can see the elements in it
}
arrow(1,2,3)