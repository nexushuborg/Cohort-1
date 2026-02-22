// console.log("Hello World");
// console.log(20-10);
// console.log(true);
// console.log(false);


// var a = "110";      //Dynamic Typing--Computer automatically assigns data type to the variable based on the value assigned to it.
// let y = 20;
// const z = 30;       //Constant variable--Value of a constant variable cannot be changed once it is assigned.
                       //                   Initialisation is mandatory for constant variables. They cannot be declared without initialization.


// var x               //Variable declaration
// x=10                //Variable initialization
// x=11                //Variable re-assignment


// // Variable Scope 
// {
//     //Var is global scope and function scope and can be re-declared and re-assigned.
//     var x=10
//     console.log(x);
//     //Let and Const are block scope and cannot be re-declared but can be re-assigned.
//     let y=20
//     console.log(y);
// }
// console.log(x);
// console.log(y);

// var x //Variable declaration
// x= 10//Variable initialization
// x=11//Variable re-assignment
// function name() {
//     var y=11
//     console.log(x);
//     console.log(y);
// }
// name()
{
    let x=10
    console.log(x);
    {
        console.log(x);
        let x=11
    }
    console.log(x);

}
