// console.log("Hello world")
// console.log(10)
// console.log(10.2)
// console.log(true)
// console.log(10-11)
//  var x = "110" 
//  let y = 10
// const z = 10
// x=10
// y=12
// z=11
// var x; //declaration
// x=10 //initialization
// x=11 //reassignment
//const x; //const must have a value at the time of declaration
//const x = 10;
// var is global scope & function scope
// {
//     let y=20
//     var x = 10
//     var x
//     var x
//     let y //can't redeclare 

//     console.log(x)
//     console.log(y)
// }
// console.log(x)
// console.log(y)

// console.log(x)
// let x = 10;

// console.log(x)
// var x = 10; //done by me
 
//var x; //done by js by is taken to line 33 so it comes as undefined and is known as "wasting"
// x=10; //done by js
// let x; // indefined

// {

//     console.log(x)
//     let x =10
// console.log(x)
//     {




//         console.log(x)
//         let x = 12
//         console.log(x)
//     }

// }


//                                           CLASS 2
//                                          Revision
/**this is function scoped var
 *  
 * var x=10
 * function name(){
 * var y=11
 * console.log(x)
 * console.log(y)
 * }
 * console.log(y)
 * name()
 */

/**
 * var is in a form of array 
 * var can be re assigned which causes the problem in array like it stores a value of var first's value and then store the second value of var in the same array so declaration states that the variable is made before or not 
 */

/**let
 * global and blocked scoped 
 * it can be reinitialized but cant be re declared
 * let x=10
 * //inside local scope
 * {
 *   let x=11
 * this is only for this block
 * }
 */

/**constant
 * global and blocked scope
 * neither redeclaration not reinitialize
 * 
 * const x //only declaration gives error so we have to initialize it too
 * const x=10; 
 * 
 * x=11 //give error typeError
*/

/**
 *         FUNCTIONS(indexing starts from 0)
 * let arr=[1,2,3,4]
 * console.log(arr)
 * console.log(arr[0]) 
 * 
 *         OBJECTS (we can give our own index)
 * let obj ={
 * "Student" : "Abhirup"
 * "Mentor" : "Pratham"
 * // student and mentor are keys and names are values so together called key value pairs
 * console.(obj)
 * console.log(obj[Student]) //gives reference error
 * console.log(obj["Student"])
 * console.log(obj.Student)
 * 
 * }
*/

/* function print(a,b){
console.log(a+b);
 }
print(2,3) //5
print(2,"3") //23

function print(a,b){
console.log(a+b);
 }
print(2,"3") //-1 

// string concatenation property make the right type to left type in minus and in addition checks the right type and changes accordingly for the operation

in addition number,string preference of string is high and vice versa for difference
print("hi","2") //Nan
print("hello","world") //hello world

          ARROW FUNcTIONS
function print(a,b){
console.log(a+b);
 }
const fn - ()  ->{
console.log("Arrow"); 
}
fn()

const fn - (a,b) ->{
console.log(a,b)
}
//   High order function 

function ho(a,b,cb){ // call back function
console.log(a,b,cb)
}

ho(2,3,print)

//need 
javascript works on single thread 
a process when breaks down in a smaller independent processes are threads

*/
/** //CONTEXT SWITCHING and SYNCHRONOUS
 * console.log("Start")
 * 
 * setTimeout(()->){
 * console.log("My process")
 * },2000)
 * console.log('end')
 * 
 * 
 * 
 * console.log("Start")
 * setTimeout(()->){
 * console.log("Milk boil")
 * },2000)
 * console.log('end')
 * 
 * 
 * 
 * console.log("Start")
 * const value = setTimeout(()->){
 * return 10 
 * },2000)
 * console.log('end',value)
 *
 * console.log("Start")
 * const data= fetch('link'); //give me data from the url 
 * console.log(data)
 * console.log("end")
 * OUTPUT
 * start
 * promise //gives a promise(pending) that it will be done in future so write async function
 * end
 * 
 * async function asy(){
 * console.log("Start")
 * const data=await fetch('link'); //give me data from the url 
 * //resolved
 * .then((val)->{  //if promise completed comes here
 * console.log("success")
 * console.log(val)
 * })
 * //rejected
 * .catch(()->{  //if promise is not completed then do this example the url is wrong
 * console.log("failed")
 * })
 * //always
 * .finally(()->{  //either the promise is resolved or rejected this will be executed every time
 * console.log("process completed")
 * })
 * console.log(data) //undefined
 * console.log("end")
 * }
 * asy()
 */

/**
 * function name(){
 * console.log(arguments)
 * }
 * name(1,"hello",3) // cant be done with arrow functions
 * 
 * 
 * const arrow = (...args)->{
 * console.log(args)
 * }
 * function name(){
 * console.log(arguments)
 * }
 * console.log(1,"hello",2)
 * arrow(1,2."arrow1")
 *  
 * const arr =[2,3,4]
 * console.log(...arr)
 * */

/**        PRACTICE
 * 
 */
