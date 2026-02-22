// // console.log('hello world')
// // console.log(20)
// // console.log(true)

// // int x=10;
// // string s="hello"

// var x=10;
// let y="hello"
// const z="world";

// var x =10
// var x;//declaration
// x=10;//initialization
// x=11;//reassigment
// var x=20;//redeclare and reinitialise leads to dataleak

// function name(){
//     console.log(x)
// }
// name()

// //let
// //let globally and block scope
// //reinitialise but cannot be re declare
// //const
// //cost global and blocked scope
// const a=10;
// {
//     let x=10
//     console.log(x)
//     {
//         // local var x and global var x
//         console.log(x)//dead zone cannot call x before
//         //  initialization

//         let x=11

//     }
//     console.log(x)
// }
// let arr = [1,2,3,4,5]
// //key value pair
// //let const obj_name={key:value}
// let obj={
//     "student":"himadri",
//     "mentor":"pratham",
// }
// console.log(arr[0])
// console.log(obj.student)
// console.log(obj["student"])
// console.log(obj["mentor"])

//  function print(a,b){
//      console.log(a-b)
//  }
//+ right ka type
 //-left ka type
// print(2,"3")


// const fn2=function(a,b){
//     console.log(a,b)
// }


// const fn=() =>{
//     console.log("Arrow")
// }

// fn()
// fn2(2,3)

// high order function
// function ho(a,b,cb){//cb is callback function
//     cb(a,b)
// }
// ho(2,3,print)
//javascript works on single thread and is 
//context switing and synchronous  
//  console.log("start")
//  setTimeout(()=>{
//     console.log("my processe")
    
//  },2000)
//  console.log('end')

//     const values=setTimeout(()=>{
//         return 10},1000)
    
// console.log("end")

// async function asy(){
//     console.log("start")

//     const data=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(()=>{//resolve
//         console.log("success")
//     })
//     .catch(()=>{//reject
//         console.log("failed")

//     })
//     .finally(()=>{//do ths always
//         console.log("process completed")
//     })

//     // setTimeout(fn,time in ms
//     console.log("end")

// }
// asy()

// function name(){
//     console.log(arguments)
// }
// name(1,2,3)

// const arrow=(...args)=>{
//     console.log(args)
// }
// function name(){
//      console.log(arguments)
// }
// name(1,"hello",3)
// arrow("arrow1","arrow2",1)
// const arr=[2,3,4]
// console.log(...arr)