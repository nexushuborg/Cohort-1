//Revision - 22/02/2026

// var x; //declaration
// x = 10; // initiatlization
// x = 20; // reassignment

// function name(){
//     var y=11
//     console.log(x)
//     console.log(y)
// }

// console.log(y) // ReferenceError: y is not defined

// name()

// const x = 10;
// x = 11; // not possible

// {
//     let x = 10; // declaration + initialization
//     console.log(x)
//     {
    //Temporal Dead Zone (TDZ) - the time between the block start and variable declaration where the variable cannot be accessed
    //TDZ exists for let and const variables
    //TDZ exists because we redeclare the variable x in the inner block and we want to prevent accessing it before initialization




//         console.log(x) //ReferenceError: Cannot access 'x' before initialization
//         let x = 20;
//     }
//     console.log(x)
// }

//Sunday Class

// let arr = [1, 2, 3, 4, 5]

// //Key-value pair data structure
// /*
//     let/const object = {
//         key1: value1,
//         key2: value2,
//         key3: value3
//     }
// */
// let object = {
//     "Student": "Arko Roy Chowdhury",
//     "Age": 19,
//     "Mentor": "Pratham"
// }

// console.log(arr)
// console.log(object["Student"])
// console.log(object.Age)

//normal function
// function print(a,b){
//     console.log(a+b)
// }

// + number,string consider
// - preference number high, string low

// print(2,3)
// print(2,"3")
//print("Arko","Roy")


// const fn1 = function(a,b){
//     console.log(a+b)
// }

// const fn2 = (a,b) => {
//     console.log(a+b)
// }

//fn()
//fn1(2,3)

//HighOrder Function - function that takes another function as an argument or returns a function
// function HO(a,b,cb){ //cb is callback function
//     console.log(a,b)
//     cb(a,b)
// }

// HO(2,3,print);


//context switching and synchronous 
// console.log("Start")

// setTimeout(() => {
//     console.log("My Process")
// }, 2000)

// console.log("End")

// function callback(){
//     setTimeout(() => {
//     console.log("Boiling milk")
//     }, 2000)
// }

// console.log("Start")

// setTimeout(() => {
//     console.log("Boiling milk")
// }, 2000)

// setTimeout(fn, time in ms)

// console.log("End")


// console.log("Start")

// const data = fetch("https://jsonplaceholder.typicode.com/todos/1");

// //setTimeout(fn, time in ms)

// console.log(data)

// console.log("End")

//Promise - an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// async function asy(){
//     console.log("Start")

//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     //setTimeout(fn, time in ms)

//     console.log(data)

//     console.log("End")
// }

// //await can only be used inside an async function
// //async function returns a promise

// asy()


// async function asy(){
//     console.log("Start")

//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const val = function(){}
//     const val2 = () => {}

//     //setTimeout(fn, time in ms)

//     console.log(data)

//     console.log("End")
// }

// async function asy(){
//     console.log("Start")

//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(() => { //resolved
//         console.log("Success")
//     })
//     .catch(() => { //rejected
//         console.log("Error")
//     })
//     .finally(() => { //always executes
//         console.log("Process Completed")
//     });

//     //setTimeout(fn, time in ms)

//     console.log(data)

//     console.log("End")
// }

//asy()

// async function asy(){
//     console.log("Start")

//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((...args) => { //resolved
//         console.log("Success")
//         console.log(args)
//     })
//     .catch(() => { //rejected
//         console.log("Error")
//     })
//     .finally(() => { //always executes
//         console.log("Process Completed")
//     })
//     ;



//     console.log("End")
// }

//asy()

// async function asy(){
//     console.log("Start")

//     const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((val) => { //resolved
//         console.log("Success")
//         console.log(val)
//     })
//     .catch((err) => { //rejected
//         console.log("Error")
//         console.log(err)
//     })
//     .finally(() => { //always executes
//         console.log("Process Completed")
//     })
//     ;

//     console.log(data)

//     console.log("End")
// }

// asy()

// function name(){
//     console.log(arguments)
// }

// name(1,"Hello",3)

// const arrow = () => {
//     console.log(arguments)
// }

// arrow(1,"Hello",3) // ReferenceError: arguments is not defined

// const arr = [1, 2, 3, 4, 5]

// console.log(...arr) //Spread Operator - allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// const arrow = (...val) => {
//     console.log(val)
// }

// arrow(1,"Hello",3) 