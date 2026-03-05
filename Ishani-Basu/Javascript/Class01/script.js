//var name="Ishani"
//console.log(name)
// let age=20
// console.log(age)

// const coll = "ITER"
// console.log(coll)
// coll = "ITER bbsr"
// console.log(coll)

//let name = "Ishani"
// function getName() {
//     let name="Roniit"
//     console.log(name)
// }
// getName();
// console.log(name)

// var name; //declaration
// name = "ishani" //initialization
// name = "basu" //assignment or re-initialization

//Properties of var:
//Re-declaration - to reallocate memory location
//Re-initialization
//Global scope
//Functional scope

//Disadv of var: Memory leak

//Properties of let:
//Re-initialization
//Global scope
//Block scope

// let address;
// let address; //cannot redeclare block-scoped variable address

// if(true) {
//     var count = 40
//     let name = "Ishani"
//     console.log(count)
// }
// console.log(count) //memory leak. count available outside block
// console.log(name)

// {
//     let name = "Ishani"
//     console.log(name)
//     {
//         //console.log(name) 
//         let name = "Roniit"
//         console.log(name)
//     }
// }
// console.log(name)

// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr[0])

// let obj = {
//     "Name" : "Ishani",
//     "Age" : 20,
//     "College" : "ITER"
// }
// console.log(obj)
// console.log(obj.Name)
// console.log(obj["Age"])

// function print(a,b){
//     console.log(a + b)
//     console.log(a - b)
// }
// //+ prioritizes string concatenation if one of the operands is a string. Otherwise, it performs addition.
// //- operator converts both operands to numbers before performing subtraction, so it will perform numeric subtraction regardless of the types of the operands.
// print("10", 5)
// print(10, "5")


// //Arrow function - utility type function
// const fn = () => {
//     console.log("Arrow")
// }
// fn()

// //Storing normal function in a variable
// const fn2 = function(a, b) {
//     console.log(a + b)
// }
// fn2(10,20)

// //High order function - function that takes another function as an argument or returns a function as a result
// function ho(a, b, callback) {
//     console.log(a, b, callback)
// }
// ho(2, 3, print)

// //JS works on single thread.
// //Takes one processor and executes one task at a time.

// //Context switching - switching between tasks. It is time consuming and leads to performance issues.
// //It is not parallel exectuion. It is concurrent execution. It can handle multiple tasks at the same time but not simultaneously.
// //By default JS is synchronous. It executes one task at a time. It is blocking. It waits for the current task to complete before moving on to the next task.
// console.log("Start")
// setTimeout(() => {
//     console.log("My process")
// }, 2000) //setTimeout syntax: setTimeout(function, milliseconds)
// console.log("End")

// //Hence callbacks are used to handle asynchronous operations.
// //If promise is found, JS will execute the callback function associated with that promise when the promise is resolved or rejected.
// //For this, await and async keywords are used.
// //If resolved, .then() is executed and if rejected, .catch() is executed.
// async function asy() {
//     console.log("Start")
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1") //fetch is a promise based API
//     .then(() => {
//         console.log("Success")
//         console.log(data)
//     }) //resolved
//     .catch((err) => {
//         console.log("Failed")
//         console.log(err)
//     }) //rejected
//     .finally(() => {console.log("Program completed")}) //finally is executed regardless of the promise being resolved or rejected
//     console.log("End")
// }
// asy()

// //Variable arguments 
// function name() {
//     console.log(arguments) //arguments is an array-like object that contains the values of the arguments passed to the function. It is not an array, so it does not have array methods like forEach, map, etc.
// }
// name(1,"Ishani",true,[1,2,3], {name: "Ishani"})

// //But this cant be done in arrow functions.
// //To achieve this in arrow functions, we must use spread functions;
// const name2 = (...args) => {
//     console.log(args) 
// }
// name2(1,"Ishani",true,[1,2,3], {name: "Ishani"})
