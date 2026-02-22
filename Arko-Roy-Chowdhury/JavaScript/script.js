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
//     //Temporal Dead Zone (TDZ) - the time between the block start and variable declaration where the variable cannot be accessed
//     //TDZ exists for let and const variables
//     //TDZ exists because we redeclare the variable x in the inner block and we want to prevent accessing it before initialization




//         console.log(x) //ReferenceError: Cannot access 'x' before initialization
//         let x = 20;
//     }
//     console.log(x)
// }