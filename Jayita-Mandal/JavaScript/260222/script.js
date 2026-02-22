console.log("hello")
console.log(20)
console.log(true)


let x=10
//inside local scope
{
    let x=11
}
//var x=10
function name(){
    var y=11
    console.log(x)
    console.log(y)
}
//console(y)
name()