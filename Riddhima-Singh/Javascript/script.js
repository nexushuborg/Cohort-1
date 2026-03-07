//console.log(true)

//int x = 10;
// String s = "hello"


// var x = 10
// let y = "hello"
//const z = "world";

//var
//var is golbally and functionally scoped
//redeclare and reinitialise

//let
//let is golbally and block scoped
//reinitialise but can't redeclare


//var x = 10

// var x ; //declaration
//x=10; //initialisation
//x=11; //reinitialisation

//var x = 10;
//let x = 10
// x =12

//inside local scope
//function name(){
//var y = 0;
//console.log(x) 
//cosole.log(x)
//}

//console.log(y) 

//name()

/*
const 
global and blocked scope
redeclare and reinitialise both not allowed
value can not be changed
*/

//const x = 10
//x = 12; //not possible

//{
//     let x = 10
//     console.log(x)
//     {
//        local var x and global var x
//        deadzone
//        console.log(x) //error
//        let x = 11
//   }
//    console.log(x)
//}


//Array
//let arr = [1,2,3,4]
//key value pair
/*
   let/const obj_names={
    "key":"value",
    "key2":"value2"
    }
*/

//let obj = {
//      "Student":"Riddhima",
//      "Mentor":"pratham"
//}

//comsole.log(arr[0])
//console.log(obj["Student"])
//console.log(obj.Student)


//normal function
//function print(a,b){
//console.log(a+b)
//}

//+ number, String, addition
//- preference number high, string low
//print("2",2)
//print("Pratham", "Shriv")


//cosole fn2 = function(){
//   console.log(a+b)
//}

//const fn =function(){
//console.log("Normal")
//}

//const fn=function(){
//console.log("Arrow")
//}

//fn()
//fn(2,3)

//high order function
//function ho(a,b,cb){  callback function
//   console.log(a,b,cb)
//}

//ho(2,3,print)

//context switching and synchronous 

//console.log("start")

//setTimeout(()=>{
//console.log("my process")
//},2000)

//console.log("end")

//setTimeout(fn, time in milliseconds) synatx

//console.log("start")

//const data = fetch("https://jsonplaceholder.typicode.com/todos/1")

//console.log(data)

//console.log("end")

//Asynchronous Functions

//async function asy(){

//  console.log("start")

// const data == fetch("https://jsonplaceholder.typicode.com/todos/1")
//  .then((res)=>{ //reject
   // console.log("faild")
   //console.log(err)
//})
//   .finally(()=>{ //do this always
//        console.log("process completed")
//   })

//  console.log("end")
//}


// const arrow = (args) =>{
    // console.log();
 //}
 //function name(){
    // console.log(arguments)
 //}

 //name1(1, "hello", 3)
 //arrow("arrow 1", "arrow 2")










//}