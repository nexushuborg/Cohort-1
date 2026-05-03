const msg=document.querySelector('#msg')
const input=document.querySelector('#password')
const btn=document.querySelector('#submit')
let score=0
const indicator=document.querySelector('#indicator')

function updateIndicator(score,indicator){
    indicator.style.width=`${20*score}px`
    changecolor(score)
}
function changecolor(score){
    const colors=['red','orange','yellow','blue','green']
    indicator.style.backgroundColor=`${score>0? colors[score-1]: ''}`
}

btn.addEventListener('click',()=>{
    const pwd=input.value
    score=0
    if(/[a-z]/.test(pwd)) score++
    if(/[A-Z]/.test(pwd)) score++
    if(/[0-9]/.test(pwd)) score++
    if(/^[A-Za-z0-9]/.test(pwd)) score++
    if(/.{8,}/.test(pwd)) score++
    if(pwd===""){
        update
    }
    updateIndicator(score,indicator)
})
