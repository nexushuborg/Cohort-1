let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click" , async()=>{
    let country = document.getElementById("country-input").value;
    // let state = document.getElementById("state-input").value;
    console.log(country);
    // console.log(state);
    let colArr = await getCollege(country);
    show (colArr);

})

function show(colArr){
    let list = document.querySelector("#ul");
    list.innerText = "";
    for (col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getCollege(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log("Error :" , err);
        return [];
    }
}