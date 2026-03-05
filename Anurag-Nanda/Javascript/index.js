console.log("Hello")
console.log("My first progrom in Javascript")

console.log("Hello")
console.log("My first progrom in Javascript")

age=22
console.log("second")

age="hello"
console.log(age);

if(true){
    var age =16
}
console.log(age);

function getname()
{
    var name="Anurag"
}
console.log(name)

if(true){
    var name="vishnu"
}
console.log(name)


//let
//props: 1)no rdeclaration
let name1;
// 2) re assign
// let coll="iter"
// console.log(coll)
// coll="iter,bbsr"
// // console.log(coll)
// coll-45
// console.log(coll)




//scoping   1)global scope
//2)block scope


// const
//1) have to initialise
//2) no reassign
//3)follows bloc


// const age1-22
//console.log(age1)


// {
//     const age2= 57

// }
// console.log(age2)


// if(true){
//     const coll2="iter"
// }
// console.log(coll2)

// function name(){
//     var y=0;
//     console.log(x)
//     console.log(y)
// }

// LET-- Is is Global and use Block scope, it can be re intialised but connot be re declared
//  let x =10
// {
//    var x= 11;
// //  }

// ** CONST**//
// It cannot be redeclared and reinitialze.
// it uses both global and blocked scope
// const x=10;
// x=11;  it is not possible 
// {
//    let x=10
//   console.log(x)
//   {
//     // as here both local variable x and global var x both are present 
//     console.log(x)
//     // let x=11preference is first given to global scope
//   }
//   console.log(x)
// }cd

// Object and Arrays 
// let arr =[1,2,3,4,5]
// let obj={
//     "Students":"Anurag",
//     "Mentor":"Pratham"
// }
// console.log(arr)
// console.log(obj)
// console.log(arr[0])
// console.log(arr[1])
// console.log(obj.Students)
// console.log(obj["Students"])
// console.log(obj["Mentor"])


// function print(a,b){
//     console.log(a-b)
// }
// console.log(2,"3")

//+ number, string is considered
// - preference number high, string low

// function print(a,b){
//     console.log(a+b)
// }
// console.log(2,"3")

// const fn = (){
//     console.log("Normal")
// }

// // const
// function print(a,b){
//     console.log(a+b)
// }
// const fun=() => {
//     console.log("Arrow")
// }

// // High order functions
// function ho(a,b,cb){
//     console.log(a,b,cb)
// }

// console.log("Start")
// set Timeout(finally,time in ms)
// console.log("Start")
// const data= 
function name(){
    console.log(arguments[0])
}
name(1,"Hello",3)