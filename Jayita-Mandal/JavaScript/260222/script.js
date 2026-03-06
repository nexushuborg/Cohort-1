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


let arr=[1,2,3,4]

//key value pair
/*
    let/const obj_name={
        "key1":"value1",
        "key1":"value1",
        "key1":"value1",
        "key1":"value1"
    }
*/
let obj={
    "Student":"Himadri",
    "Mentor":"Pratham"
}
console.log(arr[0])
console.log(obj.Student)
console.log(obj["Student"])


function print(a,b)
{
    //console.log(a+b)
    console.log(a-b)
}
print(2,"3")
//+ -> right ka type.  in python
//- -> left ka type

//+ ->number, string consider
//- ->preference number high, string low
print(2,"2")
print("2",2)


const fn=()=>{
    console.log
}
