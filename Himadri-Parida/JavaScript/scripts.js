// let ele = document.getElementById("1")
// console.log(ele)
// ele.innerText = 'hii'


// let ele = document.getElementsByClassName("hello")  //this returns a Html collection which is a array   // so basically this makes an array that has all the elments of the documents that have the same class name as given in the Html
// console.log(ele)
// console.log(ele[0])
// console.log(typeof ele)


let tag = document.getElementsByTagName("h1")
for(let i =0 ; i<tag.length ; i++){
    console.log(tag[i].innerText) //.innerText is a property of dom
}

// Query Selector

let query = document.querySelector("h1")  // this get the first element that have the given parameter as tag or class . // this returns an element
console.log(query.innerText)


let query1 = document.querySelectorAll("h1")  // this get all the element that have the given parameter as tag or class . // this returns a Nodelist
for(q of query1){
    console.log(q.innerText)
}

// Properties of dom
// innerText --- this gives the available text
// textContent --- this gives every text available in the class or tag.
// innerHTML

const element = document.querySelector("div")
console.log(element.innerText) // this doesn't display the hidden text 
console.log(element.textContent) // this dispaly's the hidden text

// css selector
let cont =  document.querySelector("div")
cont.style.border = "5px solid blue"
cont.style.background = "yellow"
cont.style.padding = "25px"
cont.style.margin = "20px"
cont.style.display = "flex"  // felx - this makes the text in oneline 
cont.style.justifyContent = "center" // this makes the content to the center its works on x axis 
cont.style.alignItems = "center" // this makes the content center but works on y axis