// console.log("hello")

// var x=10
// function name(){
//     var y=11
//     console.log(x)
//     console.log(y)
// }
// console.log(y)
// name()

// var x;//declaration
// x=10//initialization
// x=11//re-assignment

//var
//globally and functional scope
//redeclare and re-initialize
//also var has the memory leak issue : koe block ke bahar bhi access ho jata hai 

//let
//globally and block scope
//cannot redeclare and re-initialize

// let x=10
// //inside local scope
// {
//     let x=41
// }
// function name(){
//     var y=11
//     console.log(x)
//     console.log(y)
// }
// // console.log(y)
// name()

/*const
global and block scope
redeclare and reinitialize both not possible
value caanot be changed
*/

// const x=10;
// x=11 //not possible

/*
let,const obj_name={
    "key1":"value1",
    "key2":"value2",
    "key3":"value3"
}
*/

// let arr=[1,2,3,4]
// let obj={
//     "Student":"Riya",
//     "Mentor":"Pratham"
// }
// console.log(arr)
// console.log(arr[0])
// console.log(obj)
// console.log(obj.Student)
// console.log(obj["Student"])


// function print(a,b){
//     console.log(a+b)
// }
// print(2,"3") //23 (concatenate)

// function print(a,b){
//     console.log(a-b)
// }
// print(2,"3") //-1 (+ string has high preference , - number has high preference)

//arrow functions:
// const fn = () =>{
// console.log("arrow")
// }
// const fn2 = function(a,b){
// console.log(a,b)
// }
// fn()
// fn2(2,4)

//Higher order function:
function ho(a,b,cb){ //cb is callback function
    cb(a,b)
}
ho(2,3,print)