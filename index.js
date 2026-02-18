const BASE_URL = "https://v6.exchangerate-api.com/v6/3732d8b63174d07370e5bf1a/latest";

const btn = document.querySelector("form button")
const dropdown = document.querySelectorAll(".dropdown select");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (const select of dropdown) {
  
for (const Currcode in countryList) {

let newoption = document.createElement("option");
newoption.innerHTML= Currcode;
newoption.value = Currcode;
select.append(newoption);
if (select.name=== "from" && Currcode === "USD") {
  newoption.selected= "selected";
}
else if(select.name==="to" && Currcode === "AUD"){
  newoption.selected = "selected";
}
select.addEventListener("change", function(e){
updateFlag(e.target)
})
}
}
updateExchangeRate = async function(){
let amout = document.querySelector(".amount input");
let amtVal = amout.value;

if (amtVal === ""|| amtVal < 1) {
  amtVal = 1;
  amout.value = '1';
}
 const URL = `${BASE_URL}/${fromCurr.value}`
let response = await fetch(URL);
let data = await response.json();
let rate = data.conversion_rates[toCurr.value]
let finalAmount = amtVal*rate;
 msg.innerHTML = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

const updateFlag = (element)=>{
let currCode = element.value;
let countryCode = countryList[currCode]
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
}

btn.addEventListener("click",  function(e){
e.preventDefault();
updateExchangeRate()
})
window.addEventListener("load", function(){
updateExchangeRate()
})



































