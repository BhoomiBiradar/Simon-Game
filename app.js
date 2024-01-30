let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log ("game is started");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomx = Math.floor(Math.random()*3);
    let randomColor = btns[randomx];
    let ranbtn = document.querySelector(`.${randomColor}`);
    //random btn choose
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(ranbtn);}


function checkAns(idx){
   // console.log("level" , level);
   //let idx = level-1;
   if (userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp , 1000);
    }
    console.log("same value");
   }
   else{
    h2.innerHTML=(`Game over! Your score was <b>${level}.</b><br> Press any key to start`);
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();   
}
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}



function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}



let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}