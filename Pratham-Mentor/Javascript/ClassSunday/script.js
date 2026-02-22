// console.log('hello')
// console.log(20)
// console.log(true)

// int x = 10;
// String s = "hello"

// var x = 10
// let y = "hello"
// const z = "world";

// Var
// var is globally and functional scopedd
// redeclare and reinitialize


//let
//let globally and block scope
//reinitialize but cannot redeclare

// var x = 10


// var x; // declaration
// x = 10; // iniitialization
// x = 11; //re-assignement

// var x = 10;
// let x = 10
// x = 12;


// inside local scope
// {
//     // let x = 41;
// }

// function name() {
//     var y = 0;
//     console.log(x)
//     console.log(y)
// }

// // console.log(y)

// name()


/*
const
global and blocked scope
redeclare and reinitialize both not possible
value cannot be changed
*/

// const x = 10;
// x =11; not possible

// {
//     let x = 10
//     console.log(x)
//     {
//         // local var x and global var x
//         console.log(x)
//         let x = 11
//     }
//     console.log(x)
// }
//         0  1  2  3
// let arr = [1, 2, 3, 4]

//key value pair.
/*
    let/const obj_name = {
        "Key1" : "Value1",
        "Key1" : "Value1",
        "Key1" : "Value1",
        "Key1" : "Value1"
    
    }
*/ 
// let obj = {
//     "Student" : "Himadri",
//     "Mentor" : "Pratham",
// }

// console.log(arr[0])

// console.log(obj.Student)
// console.log(obj["Student"])
// console.log(obj["Mentor"])


// + number, string consider
// - prefernece number high, stirng low.

// print("2", 2)
// print("Pratham", "Shriv")
// print(2, "2")

// //normal function
function print( a, b) {
    console.log(a + b)
}    

// const fn2 = function (a, b){
//     console.log(a, b)
// }    

// const fn = () => {
//     console.log("Arrow")
// }    

// fn()
// fn2(2, 3)

// High Order Function
// function ho(a, b, cb){ // cb is callback function
    
//     cb(a, b)

// }

// ho(2, 3, print);

//context switching and synchronous
// console.log("Start")

// setTimeout(()=>{
//     console.log("My Process")
// }, 2000)

// console.log('end')


// console.log("Start")

// const data = fetch('https://jsonplaceholder.typicode.com/todos/1');

// // setTimeout(fn,time in ms)

// console.log(data)

// console.log("end")

// async function asy() {

//     console.log("Start")

//     const data = await fetch('https://jsonplaceholder.typicod.com/todos/1')
//     .then((val) => { //resolve
//         console.log("Success")
//         console.log(val)

//     })
//     .catch((err)=>{ //reject
//         console.log("Failed")
//         console.log(err)
//     })
//     .finally(()=>{ //do this always
//         console.log("Process completed")
//     })


//     console.log("end")
        
// }

// asy()





// const arrow = (...args) => {
//     console.log(args)
// }

// function name() {
    
//     console.log(arguments)
// }

// name(1, "Hello",3 )
// arrow("arrow 1", "arrow 2", 1)

// const arr = [2, 3, 4]

// console.log(...arr)