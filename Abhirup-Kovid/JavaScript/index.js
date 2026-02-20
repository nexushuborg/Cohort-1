//console.log("Hello World")
//console.log(10)
//console.log(true)
// //console.log(10-11)
// var x="hey";//dynamic typing is called no need to declare which type of datatype
// let y=10;
// const z=10;
// x=10
// y=12

// //var x makes an array memory but in const x 
// var k;//declaration
// k=10;//initialization
// k=11;//re-assignment

//const x;//it gives error as no value has be assigned 

//memory leak
// {var x=10; console.log(x);
//  console.log //we still get the value of x 
//}
/**
 * var iis functional and global scoped
 * var make memory leak
 * 
 * var is global scoped and functional scope 
 * if we do the same thing with 
 * 
 * let doesnt allow redeclaration
 */

let x=10;
console.log(x);
//if console is before let then the code above it will be called dead zone in var this will not give error it says not initialized 

//dead zone accessing is called reference error
/**
 * let x=10;
 * console.log(x)
 */


