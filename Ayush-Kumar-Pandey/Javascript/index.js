/*console.log("Hello World")
console.log(10.1)
console.log(true)*/

/*var x // declaration
x=11 // intialisation
x=12 // re-assignment
let y = 11
const z = 10*/
//dynamic typing does not need to type data type 
// {
//     var x = 10;
//     let y =20;
//     console.log(x)
// }
// console.log(x)

// var tmhara re declare ho skta hai lekin let nhi 
//var ek function scope hota hai aur let tmhara block scope hota hai 
//let ko re declare nhi kar skte hai 
//const ki value kabhi change nhi hota hai 
// {
//     let x =10;
//     {
//         let x=10;
//         console.log(x)
//     }
// }
let x = 10
console.log(x)
{
    let x = 11
    console.log(x)

}
console.log(x)

let a = [1,2,3 ]
console.log(a)

// + number, string consider 
// - prefrence number high, string low



console.log("Start")
const value = setTimeout(
    ()=>{

    }
    ,1000
)























function print(a,b){
    console.log(a-b)
}
// +right ka type 
// - left ka type 
print("2" ,5)
print(2,"2")