//var name="Ishani"
//console.log(name)
// let age=20
// console.log(age)

// const coll = "ITER"
// console.log(coll)
// coll = "ITER bbsr"
// console.log(coll)

//let name = "Ishani"
// function getName() {
//     let name="Roniit"
//     console.log(name)
// }
// getName();
// console.log(name)

// var name; //declaration
// name = "ishani" //initialization
// name = "basu" //assignment or re-initialization

//Properties of var:
//Re-declaration - to reallocate memory location
//Re-initialization
//Global scope
//Functional scope

//Disadv of var: Memory leak

//Properties of let:
//Re-initialization
//Global scope
//Block scope

// let address;
// let address; //cannot redeclare block-scoped variable address

// if(true) {
//     var count = 40
//     let name = "Ishani"
//     console.log(count)
// }
// console.log(count) //memory leak. count available outside block
// console.log(name)

// {
//     let name = "Ishani"
//     console.log(name)
//     {
//         //console.log(name) 
//         let name = "Roniit"
//         console.log(name)
//     }
// }
// console.log(name)