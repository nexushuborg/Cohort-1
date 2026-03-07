console.log("Hello World")

//Declaring Variables 
//var
var name = "G SMruti Shriya"
name = "Smruti"
console.log(name)
// Doesnt respect any scope
{
    var age = 18 // block scope
}
console.log(age)

//functional scope

function Varname(){
    var age = 48
    console.log(age)
}
Varname()


//let
let nme = "G Smruti Shriya"
console.log(nme)

//const kinda works like private in java
const nm = "Smruti"
// nm = "heyy"
console.log(nm)
 // This throws a error message cause we try to re assign it

 //We continued on these principals for a while

 // Dictionary in js
 let obj = {
    "Student" : "Teacher",
    "Twelve ": 12
 }
 console.log(obj)
 //Printing values
 console.log(obj.Student) // Here we dont need string quotes because this becomes a function when called by dictionary
 console.log(obj["Student"])

 //USES OF FUNCTIONS

 function print(a,b){
    console.log(a + b) // Checks for right type In this case its string so output is concatenated
    console.log(a-b) // Checks for left type and then integerizes the right side to get -1
 }

 print(2,"2") // 22(String) 0
 print("2",2) // 22(String) 0
 // Why both of them are the same output will be explained in further classes 

 // This has a preference list
 print("2","2") // The minus will still have 0 output 

 //I now do understand why people hate on this language soo much...That logic makes no sense

 const fn = () => { //looks useful 
    console.log("Arrow")
 }

 const fn2 = function(a,b){
    console.log(a,b)
 }

 fn()
 fn2(1,2)

 //High Order Function
// Functions where we pass functions as parameters 

//cb is a callback function
function ho(a,b,cb){
    cb(a,b) 
}
ho(8,9,print)
ho(4,5,fn2)

//pARELLISM -- > context switching The computer cuts the task into small functions then solves them and while there is a delay in the output production the computer switches to the next task (maybe pipelining helps here...) The task switching is so smooth that it almost feels like the parallel working (Synchronous working)

setTimeout(() => {
    console.log("My process")
}, 2000);

console.log("end")

//fetch gtes data from a url 
async function asy(params) {
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then --> if promise fulfilled
    // .catch -- >not fulfilled
    .then( () => {
        console.log("Sucssess")
    })
    .catch(()=>{
        console.log("Failure")
    })
    .finally(() => { // similar to finally in java
        console.log("DOne")
    })
console.log(data)
console.log("end")
const d = await fetch("https://jsonplaceholder.typicode.com/todos/1")
.then( (res) => {
        console.log("Sucssess")
        console.log(res)
    })
.catch(()=>{
        console.log("Failure")
    })
.finally(() => { // similar to finally in java
        console.log("DOne")
    })
console.log(d)   
}
asy()

const arrow = (...args) => {
    console.log(args)
}

