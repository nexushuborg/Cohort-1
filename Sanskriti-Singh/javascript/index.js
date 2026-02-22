//console.log(10-1)
//console.log("hello world")
//console.log(10.2)
//console.log(true)
//var x=10;
//let y=10
//const z=10//it is necessary to onitialize a constant while declaration
// dynamic typing means data type nahi batana hota hai
//var x; //declaration
//x=10;//initialization
//x=11;//reassignment
//{
//let x=20;
//var y=10;
// console.log(x);
//   console.log(y)
//}
//console.log(x);
//console.log(y)
// var x=10;
// function name (){
//     var y=10
//     console.log(x)
//     console.log(y)
// }
// //console.log(y)
// name()
// let arr=[1,2,3,4]
// let obj={
//     "student":"sanskriti",
//     "mentor":"bhaiya",
// }
// console.log(arr)
// console.log(obj.student)
// console.log(obj["student"])


//+ string preference
//- number preference
// print(2,"3")
 function print(a,b){
   console.log(a+b)
}
// const fn2=function(a,b){
//     console.log(a+b)
// }
// const fn=()=>{
//     console.log("arrow")
// }
// fn()
// fn2(2,3)


//high order function
// function ho(a,b,cb){//cb is a callback function
// console.log(a,b,cb)
// }
// ho(2,3,print)
//context switching and asynchronous
//console.log("start")
// setTimeout(()=>{
//     console.log("my process")
// } ,2000)
// console.log("end")

console.log("start")
function data(){
    
}
const value =setTimeout(()=>{
        return 10
 } ,1000)
 console.log("end")