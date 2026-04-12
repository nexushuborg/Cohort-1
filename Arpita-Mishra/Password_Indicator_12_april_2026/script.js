// Regex Rules

// [ ] → Character Set: This tells the machine which range to look for

// Eg:
// [abc] → string should be either a, b, c

// [A-Z] → cap A → cap Z → capital letters

// [0-9] → digit

// [a-z] → small letters

// [a-zA-Z0-9] → contains small, capital & digit

// ^ Negation => Whatever is the condition, if not fulfilled then will return true.

// [^A-Z] → Must not contain capital letters

// Positioning

// ^ [ ] → ^[A-Z] → Starting letter should be capital
// + : 1 or more than 1  
// * : 0 or more than 0  
// ? : 0 or 1  

// { } → {min, max}  

// {8, } → min 8 char  
// { ,8} → max 8 char  
// {4,8} → 4 - 8
// ^[] -> starts with
// []$ -> ends with
// [A-Z]{8,}$   -> ABCD ISKE LIYE IT IS FALSE BUT FOR ABCDEFGH IT IS TRUE
// ^[A-Z].{8,} -> min 8 letters with first letter capital


const msg = document.querySelector('#msg')  // msg div selector 
const input = document.querySelector('#password')  // password input field
const butt = document.querySelector('#submit')  // button 
let score = 0;
const indicator = document.querySelector('#indicator')  // div indicator

function updateIndicator(score, indicator){  // update password indicator  indicates width change 10*score   and changes color()
    indicator.style.width = `${10*score}px`    // `` isko back tick botle hai 
    changeColor(score);
}

function changeColor(score){
    const colors = ['red', 'orange', 'yellow', 'blue', 'green']
    indicator.style.backgroundColor = `${score > 0 ? colors[score-1] : ''}`   // condition> true:false
}

butt.addEventListener('click', () => {   // button when click
    score = 0
    const pwd = input.value
    if(/[a-z]/.test(pwd)) score++   // small
    if(/[A-Z]/.test(pwd)) score++  // capital
    if(/[0-9]/.test(pwd)) score++   // digits 
    if(/[^A-Za-z0-9]/.test(pwd)) score++  // [^ A-Z  a-z 0-9]
    if(/.{8,}/.test(pwd)) score++   //  starts with anything but min length =8 
   // js me regx ko /   / aaise slash k andaar likhte hai 
    updateIndicator(score, indicator)
})