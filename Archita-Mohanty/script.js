// // console.log('hello world')
// // console.log(20)
// // console.log(true)

// // int x=10;
// // string s="hello"

// var x=10;
// let y="hello"
// const z="world";

// var x =10
// var x;//declaration
// x=10;//initialization
// x=11;//reassigment
// var x=20;//redeclare and reinitialise leads to dataleak

// function name(){
//     console.log(x)
// }
// name()

// //let
// //let globally and block scope
// //reinitialise but cannot be re declare
// //const
// //cost global and blocked scope
// const a=10;
{
    let x=10
    console.log(x)
    {
        // local var x and global var x
        console.log(x)//dead zone cannot call x before
        //  initialization

        let x=11

    }
    console.log(x)
}

