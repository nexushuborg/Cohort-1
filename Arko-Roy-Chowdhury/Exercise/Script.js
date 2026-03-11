// const butr = document.querySelector("#red");
// function redcolor(){
//     const ele = document.querySelector("#one");
//     ele.className = 'red';
// }
// butr.onclick = redcolor;



// const butb = document.querySelector("#blue");
// function bluecolor(){
//     const ele = document.querySelector("#two");
//     ele.className = 'blue';
// }
// butb.onclick = bluecolor;



// const buto = document.querySelector("#orange");
// function orangecolor(){
//     const ele = document.querySelector("#four");
//     ele.className = 'orange';
// }
// buto.onclick = orangecolor;



// const butg = document.querySelector("#green");
// function greencolor(){
//     const ele = document.querySelector("#three");
//     ele.className = 'green';
// }
// butg.onclick = greencolor;

// const butr = document.querySelector("#red");
// butr.addEventListener("click", redcolor);

let colors=['green','red','blue','orange'];

function colorize(){
    const element = document.querySelectorAll('.num');
    colors.reverse();
    for(let i=0; i<colors.length; i++){
        element[i].id = colors[i];
    }
}

const but = document.querySelector("#but");
but.addEventListener("click", colorize);
