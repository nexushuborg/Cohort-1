const el = document.getElementsByClassName("num");
console.log(el)

const arr = [1,2,3]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
// for(e in arr){ //for each loop
//     console.log(e);
// }
// let colors = ['green','blue','yellow','red'];

// let i = 0;
// for(e of el){
//     e.style.color = colors[i];
//     i++;
// }
let colors = ['green','blue','yellow','red'];
function colorise(){
    const el = document.getElementsByClassName("num");
    colors.reverse();
    let i = 0;
    for(e of el){
        e.style.color = colors[i];
        i++;
    }
}
const button = document.getElementById('but')
button.onclick = colorise;