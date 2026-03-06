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

