

//                                           CLASS 1
/**this is function scoped var
 *  
 * var x=10
 * function name(){
 * var y=11
 * console.log(x)
 * console.log(y)
 * }
 * console.log(y)
 * name()
 */

/**
 * var is in a form of array 
 * var can be re assigned which causes the problem in array like it stores a value of var first's value and then store the second value of var in the same array so declaration states that the variable is made before or not 
 */

/**let
 * global and blocked scoped 
 * it can be reinitialized but cant be re declared
 * let x=10
 * //inside local scope
 * {
 *   let x=11
 * this is only for this block
 * }
 */

/**constant
 * global and blocked scope
 * neither redeclaration not reinitialize
 * 
 * const x //only declaration gives error so we have to initialize it too
 * const x=10; 
 * 
 * x=11 //give error typeError
*/



// let arr = [1, 2, 3, 4, 5];
// let obj= {
//     student: "Dhruv",
//     age: 19,
// }

// console.log(arr);
// console.log(obj.student);
// console.log(obj["student"]);


// + number , string consider

// - preference number high, string low
// print("2",2);
// print(2,"2");

// agar dono ka type number hai to wo number me convert ho jayega aur fir operation hoga
// agar dono ka type string hai to wo string me convert ho jayega aur fir operation hoga
// agar dono ka type alag hai to wo dono ko number me convert karne ki koshish karega aur fir operation hoga
// agar dono ka type alag hai aur dono me se koi bhi number me convert nahi ho sakta to wo NaN return karega

//                                   function generation types
// function print(a ,b){
//     console.log(a-b);
// }
// const fn2 = function(){
//     console.log("this is function expression");
// }
// const fn = () => {
//     console.log("this is arrow function");
// }

//                                       Higher order function
// function is a first class citizen in javascript
// higher order function is a function that takes another function as an argument or returns a function as a result

// function ho(a,b,cb){   //cb is callback function
//     console.log(a,b);
//     cb(a,b);
// }

// ho(2,3,function(a,b){
//     console.log(a+b);
// });

//                           content switching and syschronous programming

/* synchronous programming ka matlab hai ki code line by line execute
 hota hai aur jab tak ek line execute nahi hoti tab tak dusri line execute nahi hoti*/

/* asynchronous programming ka matlab hai ki code line by line execute nahi hota hai aur
 jab tak ek line execute nahi hoti tab tak dusri line execute ho sakti hai */



// console.log("start")

//                          setTimeout function
// syntax: setTimeout(function, milliseconds, param1, param2, ...)

// setTimeout(() => {            // setTimeout is a function that takes a callback function 
//                                and a time in milliseconds and executes the callback
//                                function after the time has passed
//     console.log("hello");
// }, 1000);

// console.log("end")

// console.log("start")

// const data = fetch("https://jsonplaceholder.typicode.com/todos/1") ;
//  //fetch is a function that takes a url and returns a promise
//  console.log(data) //promise pending
// console.log("end")


// async and await are used to handle asynchronous operations in javascript
// async is a keyword that is used to declare a function as asynchronous and allows the use of await inside the function
// async function asy(){
//     console.log("start")
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
//     // await is a keyword that is used to wait for a promise to be fulfilled and returns the result of the promise

//     // .then() ka matlab hai ki jab promise fulfilled ho jaye to ye function execute hoga
//     .then((res)=>{ // resolve hone ke baad ye function execute hoga
//         console.log("promise fulfilled")
//         console.log(res)
//     })
//     // .catch() kya karega jab promise rejected ho jaye to ye function execute hoga
//     .catch((err)=>{ // reject hone ke baad ye function execute hoga
//         console.log("promise rejected")
//         console.log(err)    
//     })
//     .finally(()=>{ // chahe promise fulfilled ho ya rejected ho ye function execute hoga
//         console.log("promise settled")
//     })

//     //promise fulfilled

//     console.log("end")
// }
// asy()



// function name(){
//     console.log(arguments) 
//     // arguments ye ek array like object hai jo function ke andar use hota hai aur usme function ke arguments store hote hai
// }
// const arrow = ()=>{
//     console.log(arguments) // arrow function me arguments nahi hota hai
// }


// name(1,2,3,4,5)

// const arr = [1,2,3]

// console.log(...arr) // ... ye spread operator hai jo array ke elements ko alag alag kar deta hai
