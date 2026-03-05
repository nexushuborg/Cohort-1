//console.log(10)

//let- block scope
//var
//const
//CONCEPT OF DEAD ZONE

//  {
//   let x=10
//   console.log(x)
//   {
//     console.log(x)
//     let x=11
//   }
//   console.log(x)
//  }

 // output will be
 //10
 //reference error
 // this is because let has block scope

 /*let arr=[1,2,3,4]
 console.log(arr)

//key value pair

 let obj={"std":"khushi","mentor":"xyz"}
 console.log(obj)
 console.log(obj.std)*/

//  function print(a,b){
//   console.log(a-b)
//  }
//  print(2,3)

 //+ number,string consider
 //- preference number high,string low

//  print("2",3)
//  print(2,"3")

//Arrow function
//()=>{}

// const func= function(){
//   console.log("Normal")
// }
// high order function
// function ho (a,b,cb){
//   cb(a,b)            // cb is callback function
// }

// javascript works on single thread

//context switching and synchronous

// setTimeout(()=>{
//   console.log("my process")
// },2000)

// console.log('end')

//Asynchronous function 
//asy()
//await-keyword

// async function asy(){
//   console.log("Start")

//   const data= await fetch('');

//   console.log(data)

//   console.log("end")
// }

// asy()

//await is used inside asynchronous function

//.then :if promise is resolved
//.catch : if fails
//.finally

