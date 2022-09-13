let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
var button=document.createElement("button");
button.setAttribute=("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML=("search");
button.addEventListener("click",foo);
let active=document.createElement("div");
active.setAttribute("id","active");
let confirmed=document.createElement("div");
confirmed.setAttribute("id","confirmed");
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
div.append(input,button,active,confirmed,deaths);
document.body.append(div);

async function foo(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-1;
    active.innerHTML=`Total active cases:${res1[index].Active}`;
    confirmed.innerHTML=`Confirmed cases:${res1[index].Confirmed}`;
    deaths.innerHTML=`Death cases:${res1[index].Deaths}`;

}

