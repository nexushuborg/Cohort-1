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
// {
//     let x=10
//     console.log(x);
//     {
//         console.log(x);
//         let x=11
//     }
//     console.log(x);

// }

// Array
// let arr=[1,2,3,4]
// let obj={
//     name:"John",
//     age:30,
//     city:"New York"
// }
// console.log(arr);
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(arr[0]);

// function print(a,b) {
//     console.log(a+b);//     In "+" it checks the data type of the operands and if they are strings, it concatenates them. If they are numbers, it adds them. In this case, since "20" is a string, it concatenates 10 and "20" to produce "1020".
//     console.log(a-b);//     In "-" it converts the operands to numbers and then performs the subtraction. In this case, it converts "20" to 20 and then subtracts 10 from it to produce 10.
// }
// print(30,"20")

//Higher Order Function
// function ho(a,b,cb){//cb is a callback function that is passed as an argument to the higher-order function ho.
//     console.log(a,b,cb);
// }
// ho(a,b,print)//Here, print is the callback function that is passed to the higher-order function ho. When ho is called, it will execute the print function with the provided arguments a and b.

// console.log("Hello World");
// setTimeout(() => {
//     console.log("This is a message from setTimeout");
// }, 2000); //setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay (in milliseconds). In this case, the message "This is a message from setTimeout" will be logged to the console after a delay of 2000 milliseconds (2 seconds).
// console.log("This message will be logged before the setTimeout message");

// console.log("Start")
// const value =setTimeout(() => {
//     return 10
// }, 2000);
//

// async function asy() {
//     console.log("Start");
//     const data=await fetch("https://jsonplaceholder.typicode.com/todos/1")//await is used to wait for the promise returned by the fetch function to resolve before proceeding to the next line of code. The fetch function is used to make an HTTP request to the specified URL and returns a promise that resolves to the response of the request. By using await, we can handle the asynchronous nature of the fetch operation and work with the resolved value directly.
//     .then((val)=>{
//         console.log("Data fetched successfully");
//         console.log(val);//when promise is resolved successfully, the then method is called with the resolved value (val) as its argument.
//     })
//     .catch((err)=>{
//         console.log("Error fetching data");//when promise is rejected like when there is a network error or wrong URL
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("Fetch operation completed");
//     })
//     console.log(data);
//     console.log("End");
// }
// asy()


// const arrow=(...args)=>{// ... collect the meaning values into one array but without using ... it will be treated as separate arguments and only the first argument will be printed .
//     console.log(args);
// }
// arrow(1,"hello",5)

