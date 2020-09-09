const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");

$climate.onclick = () =>{
    document.body.style.background ="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')"
    document.body.style.backgroundSize= "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "2,911,343,321";
    document.getElementById("cause").innerHTML = "Tons of CO2 emmited in the atmoshpere";
}

$consumption.onclick = () =>{
    document.body.style.background ="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')"
    document.body.style.backgroundSize= "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "#27ae60";
    $people.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food lost or wasted";
}

$resources.onclick = () => {
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"
    document.body.style.backgroundSize= "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "#F2994A";
    $people.style.backgroundColor = "transparent";
document.getElementById("amount").innerHTML = "59,859,183,999";
document.getElementById("cause").innerHTML =
  "Tons of minerals extracted from Earth";
document.getElementById("save").innerHTML =
  "Do your bit! Avoid all things plastic. Belive in Reduce, Reuse and Recycle.";
}

$people.onclick = () => {
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')"
    document.body.style.backgroundSize= "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "#EB5757";
    $resources.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "6,080,888";
  document.getElementById("cause").innerHTML = "People who died from hunger";
  document.getElementById("save").innerHTML =
    "Do your bit! Never waste  food.Rather offer it to people or animals who are in need.";
}