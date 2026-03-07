// console.log("hello world")
// console.log("second")


// var name  //declaration
// name="Akanksha"  //Initialization
//name=11  //reassignment
// console.log(name)     //should not be used


//var prop -1)redeclaration
        // 2)reassignment
        // 3)global scope
        // 4)functional scope

        // var a=45;
        // var b="Harry"
        // var c=null
        // var d=undefined

        //redeclaration and reassignment
        // var a=45;
        // var a="p"
        // a=54;

        //global scope
        // {
        //     var b='this'
        //     console.log(b)
        // }
        // console.log(b)

        //functional scope
        
        // var x=10
        // function name(){
        //         var y=11;
        //         console.log(x)
        //         console.log(y)
        // }
        // // console.log(y)    //error
        // name()

        // var name="Akanksha"
        // if(true){
        //     var age=20;
        // }
        // console.log(age)        //data leak or memory leak


        // function test(){
        //     if(true){
        //         var age=20;
        //     }
        //     console.log(age)
        // }
        // test()


//let properties   

// 1)No redeclaration
// let b="Harry"
// let b=65  //error

//2)Reassignment
// let b=4
// console.log(b)
// b="ITER BBSR"
// console.log(b)

//3)let globally and block scope
// let x=10

//inside local scope
// {
//         let x=12
//         console.log(x)
// }
// console.log(x)

//const can neither be updated nor redeclared
//global and blocked scope
// const author="Harry"
// let author=5    //error

// const author="Harry"
// author=5          //error

//const must be initialized
// const b;    //Not Allowed 
// const b=5;     //Allowed

// if(true){
//     const coll="ITER"
// }
// console.log(coll)     //error

//Scoping
// 1)global scope
// 2)block scope


// {
//     let name="Akanksha"
//     console.log(name)
//     {
//         console.log(name)
//         // let name="Saswat"   //error bcs name has both local scope and global scope----lines above this becomes dead zone
//         console.log(name)
//     }
// }


//Array and Object
// let arr=[1,2,3,4]

// //key value pair
// /*
// let/const obj name={
//     "Key 1":"Value1",
// }
// */
// let obj={
//         "Student":"Akanksha",
//         "Mentor":"Pratham",

// }
// console.log(arr)
// console.log(obj)
// console.log(obj.Mentor)
// console.log(obj["Student"])


//function
// function print(a,b){
//         console.log(a-b)     //+ preference string
//                              //- preference number (string should be valid number)
// }
// print("2",2)
// print(2,"3")

//normal function
// function print(a,b){
//         console.log(a+b)
// }

// const fn2= function(a,b){
//         console.log("Arrow")
// }

// const fn= () => {
//         console.log("Arrow")
// }

// fn()
// fn(2,3)

//High Order Function
// function ho(a,b,cb){      //cb is callback function
//         console.log(a,b,cb)
//         cb(a,b)
// }
// ho(2,3,print)

// //context switching and synchronous
// console.log("Start")
// setTimeout(() => {
//    console.log("My Process")     
// }, 2000);
// console.log("end")

// //setTimeout(fn.time in ms)

// console.log("Start")
// setTimeout(() => {
//    console.log("Boiling Milk")     
// }, 2000);
// console.log("end")

// console.log("Start")
// const data= fetch()

//24 Feb
