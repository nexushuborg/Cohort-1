console.log("Hello")

function a(){
    console.log("a")
}
function b(){
    setTimeout(() => {a(), 3000})
    console.log("b")
}
function c(){
    setTimeout(() => {b(), 3000})
    console.log("c")
}
a()
b()
c()

function getData(){
    setTimeout(() => {console.log("data"), 3000})
}
function interface(){
    console.log("fetching")
}

getData() // -- runs in the background
interface()