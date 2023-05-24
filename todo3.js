const input = document.getElementById("input")
const btn = document.getElementById("btn")
const div = document.getElementById("div")
const btn2 =document.getElementById("btn2")
const btn3 =document.getElementById("btn3")
const p = document.getElementById("p")

btn.addEventListener("click",()=>{
    const 예빈 = document.createElement("li");
    예빈.innerText = input.value;
    div.appendChild(예빈)
    input.value = "";
    예빈.addEventListener("click",()=>{
        if (예빈.style.textDecoration == "line-through"){
            예빈.style.textDecoration = ""
        }else{
            예빈.style.textDecoration = "line-through"
        }
    })

    예빈.addEventListener("dblclick", ()=>{
        예빈.remove();
    })
})

btn2.addEventListener("click", ()=>{
    div.innerHTML = "";
})

btn3.addEventListener("click", ()=> {
    if(div.style.textDecoration == "line-through"){
        div.style.textDecoration = "";
        
    }else {
        div.style.textDecoration = "line-through";
        
    }
})