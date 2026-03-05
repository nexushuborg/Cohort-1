// var x;
// x=10

// let 
// let globally and block scope
// reinitialize but cannot redeclare

// let x=10;

// inside local scope
// {
//     let x=11
// }
// function name() {
//     var y=11;
//     console.log(x)
//     console.log(y)

// }

//console.log(y)

// name()

// const
/* global and blocked scope
redeclare and reinitialized both not possible
value can't be changed */
// const x=10
// x=11 not possible

// let arr=[1,2,3]
// let obj={
//     "Student":"Hello",
//     "Mentor":"Pratham"

// }

// console.log(arr)
// console.log(obj)
// console.log(arr[0])
// console.log(obj.Student)


//  function print(a,b){
//      console.log(a+b)
//  }
//  print(2,"3") // + string ko prefer karta hai

// function name(a,b){
//      console.log(a-b)
//  }
// name(2,"3") // - number ko prefer karta hai

// Arrow function

// function print(a,b){
//     console.log(a+b)
// }

// const fn=() => {
//     console.log("Arrow")
// }

// fn()


// // High order function
// function ho(a,b,cb){ // cb is acall back function
//     console.log(a,b,cb)
// }

// ho(2,3,print)

// console.log("Start")
// setTimeout(()=>{
//     console.log("Boiling Milk")
// },2000)
// console.log("end")

// console.log("Start")

// console.log("end")


const arrow=(...args)=>{
    console.log(args)
}
arrow("arrow1","arrow2")
