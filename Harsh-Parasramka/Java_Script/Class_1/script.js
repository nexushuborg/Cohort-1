// var name = "Harsh" // es5
// console.log(name)

// var name = "Pa" // es5
// console.log(name)  //name changes to p 


//var let const

// let age = 20 //es6
// console.log(age)


// const coll = "ITER"
// console.log(coll)
// coll = "ITER, Bhubaneswar"
// console.log(collname) // once assigned through const cannot change the variable value



//scoping - global, block, functional
//let name = "Pratham"

// function getname(){
//     console.log(name)
// }
// console.log(name)
// getname();// global scoping 


// function getname(){
//     let name = "Saswat"
//     console.log(name)
// }

// getname();// functional scoping




//var 
// var name = "PRATHAM"
// var name;  // decalration  
// name = "Pratham" //initilize 


//Properties : var
//Re-Declaration 
//Re-initlize 
//global scope 
//functional scope 

// var name;
// var name;
// var name;
// var name;
// var name;
// var name;
// var name;


// name = "Saswat"
// name = "Ayan"
// name = "Riya"
// name = "Anubhav"
// name = 30

//anme 

//Properties :let 
//props:
//reinitilize
//global scope 
//block scope 

//let address = "BBSR"
//let address; 
//address="BBSR"
//address="Delhi"

//address = "DEL"

// let address;
// let address;//Cannot redeclare block-scoped variable 'address'

// if (true){
//     var count = 40;
//     let name = "Pratham"
//     console.log(count)
// }
 
// console.log(count) // is being acessed outside function
// console.log(name)  // cannot be acessed outside function 

//ex
// {
//     let name = "Saswat"
//     console.log(name)
//     {
//         console.log(name)//error line (zombie)
//         let name = "Ayan"
//         console.log(name)
//     }
// }
// console.log(name)

