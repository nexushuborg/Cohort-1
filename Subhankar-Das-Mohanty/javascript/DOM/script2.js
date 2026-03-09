// let colors=["red","orange","green","bule"];


// const but=document.querySelector("#red");
// function redcolor(){
//   const ele=document.querySelector("#three");
//   ele.className="red"
// }
// but.onclick=redcolor



// const but1=document.querySelector("#orange") 
// function orangecolor(){
//   const ele2=document.querySelector("#one")
//   ele2.className="orange"
// }
// but1.onclick=orangecolor


let colors = ["red","orange","blue","green"];

function colorise(){
  let element=document.querySelectorAll('.num');
  colors.reverse()
  console.log(colors)
  for(let i=0;i<element.length;i++){
    element[i].id=colors[i];
  }

}
const but=document.querySelector("#but");
but.addEventListener('click',colorise);


