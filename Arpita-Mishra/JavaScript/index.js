// console.log("Hello World")
// console.log(10-1)
// console.log(true)

// var x=10;
// var x=10
// let y=10
// const z=10
// var t="110"    //dynamic typing means data type specify krne ka need nahi h 
// x=10
// y=12       // x y me no issue
// z=11      // z wale pe error aayega becoz const laga hua h z k aage const means contsant means ab usko change nhi kr skte


// var x; //declaration
// x=10 //initialisation

// var x=10;
// {
// console.log(x)
// }

// {
//     var x=10
//     console.log(x)
// }
//  console.log(x)
// var is global scoped and functional scoped
// var x=10
// function name(){
//     var y=11;
//     console.log(x)
//     console.log(y)

// }
// console.log(y)
// name()


// {   let y=20
//     var x=10
//     console.log(x)
//     console.log(y)

// }
// console.log(x)
// console.log(y)

// let x=10
// console.log(x)\

// console.log(x)
//let x=10     // error dega 

// in case of let dead zone  mtlb if pehle x ko print kra re and baad me initialize kr re then wo print statement k upppr ka sab ko dead zone bolte h wo x ka dead zone h 

// console.log(x)
// var x=10;    // yaha erroe nai dega  bass undefined likh dega mtlb ki initialize nhi hua h 


// by default value of var is undefined

//let
//let globally and block c=scoped
//let can be reinitialised but cant be redeclared
// let x=10
// {
//     let x=11;
// }
// function name(){
//     var y=11;
//     console.log(x)
//     console.log(y)

// }
// console.log(y)
// name()

/*
const
global and blocked scope
redeclare and reinitialise both not possible
value cannot be changed
*/

// const x=10
// x=11; //not possible

// {
//     let x=10
//     console.log(x)
//     {
//         console.log(x)
//         let x=11
//     }
//     console.log(x)
// }

// let arr=[1,2,3,4]
//key value pair
/*
 let/const obj_name={
 "key1" : " Value1",
 "key2" : " Value2",
 "key3" : " Value3",
 "key4" : " Value4",
 }
 */
// let obj={
//     "student" :"Arpita",
//     "Mentor" : "Pratham",
// }
// console.log(arr[0])
// console.log(obj.student)
// console.log(obj["Mentor"])


//normal function 
//  function print(a,b){
//   console.log(a+b)
//}
// const fn1 =function(a,b) {
//     console.log(a,b)
// }
//  const fn2 =() => {
//     console.log("Arrow")
// }

// // print(2,"3")

// // + toh preference string ko milta hai  but string k andar v number hona chayyee
// //- me toh preference number  ko milta hai 

// fn1(2,3)
// fn2()



// high order function    isme ham ek function ko as parameter dalte h 
// function ho(a,b,cb){  // cb is a call back function mtlb isko tabhi call krenge jb ho function call hoga 
//     console.log(a,b,cb)
// }
// ho(2,3,print)

// function ho(a,b,cb){  // cb is a call back function mtlb isko tabhi call krenge jb ho function call hoga 
//     cb(a,b)
// }
// ho(2,3,print)


/*
java script works on single thread
context switching mtlb bahut speed me ek processor dusre processor pe switch kr leta h
concurency
*/


//context switching and synchronous
// console.log("start")
//     setTimeout(()=>{
//         console.log("my process")
//     },2000)
//     console.log('end')

// console.log("Start")
// const data=fetch('https://jsonpaceholder.typicode.com/todos/1');
// //setTimeout(fn,time in ms)
// console.log(data)

// console.log("end")


// async function asy() {

//     console.log("Start")
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((val) => {   // resolve
//             console.log("Success")
//             console.log(val)
//         })
//         .catch((err) => {  // reject
//             console.log("Failed")
//             console.log(err)
//         })
//         .finally(() => {   // do this always
//             console.log("Process completed")
//         })

//     console.log("end")
// }

// asy()

// const arrow = (...args) => {
//     console.log(args)
// }

// // function name() {
// //     console.log(arguments)
// // }

// // name(1, "Hello", 3)

// arrow("arrow 1", "arrow 2")

// const arr = [2, 3, 4]

// console.log(...arr)
