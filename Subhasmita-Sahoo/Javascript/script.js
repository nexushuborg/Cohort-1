//console.log(true)

//int x=10;
//String s="Hello"


//var x=10
//let y="hello"
//const z="world";

//var
//var is globally and functionally scoped
//redeclare and reinitialize

//let
//let globally and block scope
//reintialize but cannot redeclare


//var x=10

//var x ;  //declaration
//x=10;   //initialisation
//x=11;   //reassignment

//var x=10;
//let x=10
//x=12;

//inside local scope
//function name(){
//  var y=0;
//  console.log(x)
//  console.log(x)
//}

//console.log(y)

//name()

/*
const
global and blocked scope
redeclare and reintialize both not possible
value cannot be changed
*/

//const x=10;
//x=11; not possible

//{
//    let x = 10
//    console.log(x)   
//    {
//        //local var x and global var x
//        //deadzone
//        console.log(x)   
//        let x = 11
//    }
//    console.log(x)
//}


//Array
//let arr=[1,2,3,4]
//key value pair
/*
   let/const obj_name={
         "key1":"value",
         "key2":"value",
   }
*/

//let obj={
//     "Student": "Himadri",
//     "Mentor" : "Pratham"
//}

//console.log(arr[0])
//console.log(obj.Student)
//console.log(obj["Student"])


//normal function
//function print(a,b){
//    console.log(a+b)
//}

//+ number,String consider
//- preference number high,string low
//print("2",2)
//print("Pratham","Shriv")


//const fn2=function(){
//    console.log("Normal")
//}

//const fn=function(){
//    console.log("Arrow")
//}

//fn()
//fn(2,3)

//High Order function
//function ho(a,b,cb){     //callback function
//    console.log(a,b,cb)
//}

//ho(2,3,print)

//CONTEXT SWITCHING and SYNCHRONOUS

//console.log("start")

//setTimeout(()=>{
//    console.log("my process")
//},2000)
//console.log("end")

//setTimeout(fn,time in millisecond )  syntax

//console.log("start")

//const data=fetch('https://jsonplaceholder.typicode.com/todos/1');

//console.log(data)

//console.log("end")

//ASYNCHRONOUS FUNCTION

//async function asy() {

//    console.log("start")

//    const data=fetch('https://jsonplaceholder.typicode.com/todos/1');
//    .then((res)=>{ //resolve
//        console.log("success")
//        console.log(res)
//    })
//    .catch((err)=>{ //reject
//        console.log("failed")
//        console.log(err)
//    })
//    .finally(()=>{ //do this always
//        console.log("prcoess completed")
//    })

//console.log("end")
//}



//const arrow =(args) => {
//    console.log();
//}   

//function name(){
//    console.log(arguments)
//}

//name(1,"hello",3)
//arrow("arrow 1","arrow 2")

