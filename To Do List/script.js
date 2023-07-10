const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-cont");

function addTask(){
    if(inputbox.value === ''){
        alert("Write some task first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    asitis();   
}  

listcontainer.addEventListener("click",function(e){
     e.target.tagname === "SPAN";
     {
            e.target.parentElement.remove();
            asitis();
        }

    
},false);

function asitis(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

