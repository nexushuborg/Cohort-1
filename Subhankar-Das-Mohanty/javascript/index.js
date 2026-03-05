// console.log("hello world");
// console.log("second");

//variables
//var, let, const

// age = 18;
// console.log(age);

// age = "hello";

//var
// probs- redeclaration
//        reassigning
//        global scope
//        functional scope

// var name = "subhankar";
// if (true) {
//   var age = 16;
// }
// console.log(age);

// var anme    step1:declaration
// var name = "subhankar"; step2:initialization

//var name
//var name = "subhankar";
//var name = "subhr";

// var name       var can be initialise many time it is bad.........
// var name
// var name

//var age=20
//age=50           var can be reassign but it is not good practice to reassign the value of a variable because it can lead to bugs and make the code harder to understand. It is better to use const for variables that should not be reassigned and let for variables that can be reassigned. This way, you can prevent accidental changes to important values and make your code more predictable and easier to debug.
//age=100
//age="subhankar"

//functional scope..
// function myFunction() {
//   var name = "subhankar";
// }
// console.log(name); // ReferenceError: name is not defined

// if (true) {
//   var name = "subhankar";
// }
// console.log(name); // Output: "subhankar" , will print but....

//let
//probs- no redeclaration

//let name;
//let name; //SyntaxError: Identifier 'name' has already been declared

// probs- reassigning
// let coll = "ITER";
// console.log(coll);
// coll = "ITER", "BBSR";
// console.log(coll);
// coll = 56;
// console.log(coll);

//scoping
//1.global scope
//2.block scope

// let name = "subhankar";

// {
//   let name = "subhankar";
//   //console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

// if (true) {
//   let name = "subhankar";
//   // console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

//const
// const age = 10;
// age = 30; //no reassign

// if (true) {
//   const name = "subhankar";
//   // console.log(name);
// }
// console.log(name); // output will me blankl , no error.

//Hoisting

// console.log(a);
// //var a    - //undefined
// let a = 10; //reference error

// console.log(name);
// var name = "subhankar"; // no error but it will be undefined because of hoisting

// console.log(name);
// {
//   console.log(name);
//   let name = "subhankar";   //errorr
// }

// {
//   let name = "subhankar";
//   console.log(name);
//   {
//     console.log(name);
//     // let name = "subhankar";    error and it will not print the name because of temporal dead zone
//     console.log(name);
//   }
// }

//     **************************online class **********************************

// var name = "subhankar";
// function myFunction() {
//   console.log(name);
// }
// myFunction(); // Output: "subhankar"

// var x; //declaration
// x=10; //initialization
// x=11 //reassigning

// let : global scope and block scope
//       reinitialization but no redeclaration
// let x;
// //let x = 10; //SyntaxError: Identifier 'x' has already been declared
// x=11; //reassigning

// const: redeclaration and reassigning not allowed
// const : global scope and block scope
// value must be assigned at the time of declaration
// value cannot be changed later

// const x = 10; //SyntaxError: Missing initializer in const declaration

// const x = 10;
// x = 11; //TypeError: Assignment to constant variable.

// deadzone
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;

// let arr = [1, 2, 3, 4, 5];

// let/const obj_name={
//     key1:value,
//     key2:value,
//     key3:value,
//     key4:value,
// }

// let obj = {
//   student: "subhankar",
//   mentor: "pratham",
// };
// console.log(arr[0]); //output: 1
// console.log(obj.student); //output: "subhankar"
// console.log(obj["mentor"]); //output: "pratham"

// function print(a, b) {
//   console.log(a + b);
// }
// print(10, 20); //output: 30
// print(2, "3"); //output: "23"  // -1 if a-b
// //+ operator is used for both addition and concatenation. If both operands are numbers, it performs addition. If one or both operands are strings, it performs concatenation. In the case of print(2, "3"), the number 2 is converted to a string and concatenated with "3", resulting in "23". If you want to perform subtraction, you can use the - operator, which will convert the string "3" to a number and perform the subtraction, resulting in -1.
// //- operator is used for subtraction. If one or both operands are strings, it will try to convert them to numbers before performing the subtraction. In the case of print(2, "3"), the string "3" will be converted to the number 3, and the subtraction will be performed, resulting in -1.
// + number,string consider
// - preference number ig higher than string

// function print(a, b) {
//   //normal function
//   console.log(a + b);
// }
// const fn = () => {
//   console.log("hello world");
// }; //arrow function

// fn(); //output: "hello world"
// print(10, 20); //output: 30

//higher order function: a function that takes another function as an argument or returns a function as a result is called a higher-order function. Higher-order functions are a powerful tool in functional programming and allow for more flexible and reusable code.
// function ho(a, b, cd) {
//   //cb callback function

//   cd(a, b);
// }
// ho(2, 3, print); //output: 5

//context switching and a synchronous programming
// console.log("start");

// setTimeout(() => {
//   console.log("hello world");
// }, 2000);
// console.log("end");   //output: "start", "end", "hello world" after 2 seconds
// The setTimeout function is used to schedule a function to be executed after a specified delay. In this case, the anonymous arrow function that logs "hello world" will be executed after 2000 milliseconds (2 seconds). The console.log("start") and console.log("end") statements will execute immediately, resulting in the output "start", "end", and then "hello world" after the delay. This demonstrates how JavaScript handles asynchronous operations and context switching, allowing other code to run while waiting for the timeout to complete.
// setTimeout(fn,ms)  - fn is the function to be executed after the specified delay, and ms is the number of milliseconds to wait before executing the function.

// const a = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(a); //output: Promise {<pending>}  because fetch is an asynchronous function that returns a promise. The promise is in a pending state until the fetch operation is completed and the response is received. Once the response is received, the promise will be resolved with the response data, and you can access it using .then() or async/await syntax.

//await is used to wait for a promise to resolve before proceeding with the execution of the code. It can only be used inside an async function. When the await keyword is encountered, the execution of the async function is paused until the promise is resolved, and then it resumes with the resolved value.
// async function asy() {
//   console.log("start");

//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((val) => {
//       console.log("success");
//       console.log(val); //output: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …} if the fetch operation is successful. The .then() method is used to handle the successful resolution of the promise returned by fetch, and the val parameter represents the response object received from the fetch operation.
//     })
//     .catch((err) => {
//       console.log("failed"); //output: "success" if the fetch operation is successful, or "failed" if there is an error during the fetch operation. The .then() method is used to handle the successful resolution of the promise returned by fetch, while the .catch() method is used to handle any errors that may occur during the fetch operation.
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("process complited"); //output: "finally" will be logged regardless of whether the fetch operation was successful or resulted in an error. The .finally() method is used to execute code that should run after the promise is settled, regardless of its outcome.
//     });
//   //setTimeout(fn,time in ms)
//   console.log(data); //output: undefined because the .then() method does not return any value, so the data variable will be assigned the value of undefined. If you want to access the response data from the fetch operation, you should return the response from the .then() method and handle it accordingly.
//   console.log("end");
// }
// asy(); //output: "start", Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}, "end"
// // The async function asy() is defined to handle asynchronous operations using the await keyword. When asy() is called, it logs "start" to the console, then awaits the completion of the fetch operation to retrieve data from the specified URL. Once the data is fetched, it logs the response object to the console, which contains information about the HTTP response. Finally, it logs "end" to indicate that the asynchronous operation has completed. The output will show "start", followed by the response object, and then "end".

// const arrow = () => {
//   console.log(arguments);
// };
// // function name() {
// //   console.log(arguments);
// // }
// // name(1, "hello", 3);
// //arrow(1, 2); //reference error because arguments object is not available in arrow functions. The arguments object is a local variable available within all non-arrow functions that contains an array-like collection of the arguments passed to the function. In arrow functions, the arguments object is not defined, and attempting to access it will result in a ReferenceError. If you need to access the arguments in an arrow function, you can use rest parameters or other methods to achieve similar functionality.


// const arr = [2, 3, 4];
// console.log(...arr); //output: 2 3 4
// // The spread operator (...) is used to expand the elements of an array or object. In this case, when we use console.log(...arr), it takes each element of the arr array and logs them individually to the console, resulting in the output "2 3 4". The spread operator allows us to easily log or manipulate the individual elements of an array without needing to access them through their indices.
