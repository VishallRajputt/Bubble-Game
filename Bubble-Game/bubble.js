var score = 0;
var Timer = 0;
var makeRn =0;

function makeBubble() {
    let vishal="";
for (let i = 0; i <= 157; i++) {
    vis = Math.floor(Math.random()*10)
    vishal +=`<div class="bubble">${vis}</div>`  
}
document.querySelector('#pbtm').innerHTML=vishal;
}

 function runTimer() {
    let timeInter= setInterval(function () {
       if (Timer<60) {
        Timer++;
        document.querySelector("#timerval").textContent = Timer;
       }else{
        clearInterval(timeInter);
        document.querySelector("#pbtm").innerHTML=` <h1 style="display: flex;
         padding-left: 40%; padding-top: 15%; color: rgb(87, 98, 63);">Game Over</h1>`
       }

    } ,1000)
}

function  getNewHit(){
   makeRn = Math.floor(Math.random()*10);
    document.querySelector("#Hit").innerHTML=makeRn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent= score;
     
    
}

document.querySelector("#pbtm").addEventListener("click", function (d) {
var clickNum = Number(d.target.textContent);
if (clickNum === makeRn) {
    increaseScore();
    getNewHit();
    makeBubble();
}
})

// increaseScore();
getNewHit();
runTimer();
makeBubble();