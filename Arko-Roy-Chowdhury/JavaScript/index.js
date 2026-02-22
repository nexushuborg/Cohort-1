// console.log("Hello, World!");
// console.log("Second");
// console.log("Third");

//variables
// var let const
// var is function scoped
// let and const are block scoped

// age = 22
// console.log(age)

// age = "Hello"

//var
//Props -1) redeclarable 2) reassignable 3) function scoped
// var name = "Arko"
// if(true){
//     var age = 16
// }
// console.log(age)

// var name Step1: declaration
// name = "Arko" // Step2: initialization

// var name = "Arko";
// var name
// name = "Arko"
// name = "Roy"

// var name
// var name
// var name
// var name


// var age = 20
// age = 21 // reassignment
// age = 22 // reassignment
// age = "Sixty"

// var name = "Arko";


//function scope
// function getName(){
//     var name = "Arko"
//     // console.log(name)
// }
// console.log(name)

//block scope
// {
//     var name = "Arko"
// }
// console.log(name)

// if(true){
//     var name = "Arko"
// }

//console.log(name)

//let
//Props - 1) not redeclarable 2) reassignable 3) block scoped

// let name;
// let name; // SyntaxError: Identifier 'name' has already been declared

// let college = "ITER"
// console.log(college)
// college = "IIT"
// console.log(college)
// college = 123
// console.log(college)

//scoping
//1) global scope
//2) block scope
//3) function scope

// {
//     let name = "Arko"
//     // console.log(name)
// }
// console.log(name)

// if(true){
//     let name = "Arko"
// }
// console.log(name)

// function getCollege(){
//     let college = "ITER"
// }
// console.log(college) // ReferenceError: college is not defined

//const
// const age; // SyntaxError: Missing initializer in const declaration

// const age = 10;
// let name;
// var college;

//no reassignment
// age = 60 // TypeError: Assignment to constant variable.

// {
//     const name = "Arko"
// }

// console.log(name) // ReferenceError: name is not defined

// if(true){
//     const name = "Arko"
// }

// console.log(name) //Output will be blank, no error

//Hoisting
//Hoisting in JavaScript is a behavior where declarations of variables, functions, and classes are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed.
// console.log(a)
// let a = "Arko" // ReferenceError: Cannot access 'a' before initialization

// const a = 10
// var name = "Arko"

// {
// console.log(name) //temporal dead zone
// let name = "Arko"
// }

// {
//     let name = "Arko";
//     console.log(name)
//     {
//         console.log(name); // ReferenceError: Cannot access 'name' before initialization
//         // let name = "Arko"
//         console.log(name)
//     }
// }