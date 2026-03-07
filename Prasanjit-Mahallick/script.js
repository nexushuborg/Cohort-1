//getElementById
//return element or undefined
// let ele = document.getElementById("main")
// ele.innerText = "hi"


// getElementsByClassName
// return HTMLCOLLECTION[] or array

// let element = document.getElementsByClassName("mera-class")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)

let element = document.getElementsByClassName("mera-class")
for(let i=0;i<element.length; i++){
    console.log(element[i].innerText)
}

for(ele of element){
    console.log(ele.innerText)
}