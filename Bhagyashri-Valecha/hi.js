console.log("Bye World");
console.log("kuch bhi");
console.log("okay hoga");


let ele = document.getElementById("pehla");
console.log(ele);
ele.innerText = "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";

let wow = document.getElementsByClassName("mera-class");
console.log(wow);
console.log(wow[1]);
console.log(typeof wow);

let element = document.getElementsByClassName("mera-class");
for ( let i = 0 ; i < element.length ; i++){
    console.log(element[i].innerText);
}


let tag  = document.getElementsByTagName("h1");
for ( let i = 0 ; i < tag.length ; i++){
    console.log(tag[i].innerText);
}
