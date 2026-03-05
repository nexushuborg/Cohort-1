const element=document.getElementsByClassName("num")
console.log(element)

let colors=['green','blue','yellow','red']
let i=3
for(e of element){
    e.style.color=colors[i];
    i--
}