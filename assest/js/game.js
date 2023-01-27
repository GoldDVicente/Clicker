//vars
var clicks = 0;
var perSecond = 0;
let inventory = [0,0,0,0,0,0];
let clicksProduction = [1,2,4,6,8,10];
let itemPrice = [100,200,400,600,800,10000];
var FPS = 30;
//Functios
function clic(){
    clicks++;
}

function buy(item){
    inventory[item]++;
}

function render(){
    document.getElementById("number").innerHTML = `${clicks} clicks`;
    document.getElementById("clicksPerSecond").innerHTML = `Por segundo: ${perSecond}`
}

setInterval(()=>{
    render();
},1000/FPS)