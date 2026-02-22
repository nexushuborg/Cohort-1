//CLASS-1

//console.log(10-5)
//console.log("hello world")
//console.log(10)
//console.log(true)

// var x=10
// let y=10
// const z=10

// var x; //declaration
// x=10 //initialization
// x=11 //re-assignment

//const x=10; //it is necessary to initialize a const
//x=11 // not possible
// var x=10;
// console.log(x)
// {
//     console.log(x)
// }

// var is global scoped and functional scope. memory leaks in var. so var is not used.
// {
//     var x=10;
//     console.log(x)

// }
// console.log(x)


// {
//     let y=20
//     var x=10;
//     console.log(x)
//     console.log(y)
//     let y;//y cannot be used again
//     var x;//doesnt show error
// }
// console.log(x)
// console.log(y)// it will show error as it is not declared globally

//var x // by default, value is undefined
//let x // undefined 
//console.log(x)
//let x=10 // above this , for this line above all the codes are temperal dead zone
//var x=10; //done by u



// {
//     let x =10;
//      console.log(x)
//     {
//         console.log(x)
//         let x=12;
//         console.log(x)
//     }
// }

// note:
// 1. var is not used as memory leaks and it can be reassigned which is problem 
// 2. let cannot be redeclared. so it is used. 
// 3. const- redeclare and reinitialize both  not possible. value cannot be cahnged 






// CLASS-2

//let arr=[1,2,3,4]


// objects- key value pair
/*

    let/const obj_name={
        "key1":"Value1",
        "key1":"Value1",
        "key1":"Value1"
        "key1":"Value1"
    }
 */     

    
// let obj= {
//     "Student": "Rohit",
//     "Mentor": "Pratham",
// }
// console.log(obj.Student)
// console.log(obj["Student"])
//console.log(obj["Mentor"])
// console.log(arr[0])


// function print(a,b){
//     console.log(a-b)
// }
// print(2,3)
// print(2,"3")

// + number, string mein string is preferred 
//- number , string mein number is preferred 
// function print(a,b){
//     console.log(a+b)
// }
// print(2,3)
// print(2,"3")
//print("two","2") // output is Nan




// //Normal function
// function print(a,b){
//     console.log(a+b)
// }
// print(2,3)


// //ARROW FUNCTIONS 
// const fn = ()=> {
//     console.log("Arrow")
// }
// fn()

// //normal function can also be written in this format
// const fn2=function(a,b){
//     console.log(a,b)
// }
// fn2(2,3)

// //high order function
// function ho(a,b,cb){ // cb is callback function
//     console.log(a,b,cb)
    
// }
// ho(2,3,print)

// //high order function calling the print function 
// function ho(a,b,cb){ // cb is callback function
//     cb(a,b)
// }
// ho(2,3,print)



//javascript works on single thread.

// context switching and synchronous
//  console.log("Start")
//  setTimeout(()=>{
//     console.log("My Process")
//  },2000)
//  console.log("end")
//output
// start
// end
// Myprocess

// setTimeout(fn,time in ms)



//await can only be used with asyncgronous . without await , it will work similarly like synchronous 
// async function asy(){
//     console.log("Start")
//     const data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(data)
//     console.log("end")
// }
// asy()


//both are same 
//const val=function(){}
//const val2 = ()=> {}


// async function asy(){
//     console.log("Start")
//     const data=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((val)=>{ //resolve
//         console.log("succes")
//         console.log(val)
//     })
//     .catch((err)=>{ //reject
//         console.log("failed")
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log("process completed")
//     })
//     console.log(data)
//     console.log("end")
// }
// asy()



// const arrow =(...args)=>{
//     console.log(args)
// }
// function name(){
//     console.log(arguments)
// }
// name(1,"Hello",3)
// arrow("arrow 1", "arrow 2")
// const arr=[2,3,4]
// console.log(...arr)