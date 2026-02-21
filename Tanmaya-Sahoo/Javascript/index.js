console.log("hello world")
console.log("hello")

//variable(var) properties:
//1. can be reassigned(n no of times)
//2. can be redeclared(n no of times)
//3. global scope(once declared can be accessed anywhere throughout the program)
//4. only has functional scope
age = 22
console.log(age)

var name; //redclaration
name = "Tanmaya" //reassignment

//let properties:
//1. no redeclaration
//2. can be reassigned
//scoping:
//1.global scope
//2.block scope


//const properties:
//1.declaration and assignment should be done in same time
//2.no reassignment
//scoping:
//1.block scope

if (true){
    const coll = "Iter"
}
console.log(coll) // (o/p) nahin ayega

//hoisting

//temporal deadzone
{
    console.log(name)
    let name = "Ayan"  // (o/p) nahin ayega
}