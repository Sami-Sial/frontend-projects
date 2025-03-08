let gameSeq = [];
let userSeq = [];
let userColor = "yellow";

let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
    if (started === false) {
        started = true;
           
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flashBtn");
    setTimeout(() => {
       btn.classList.remove("flashBtn");
    },500)
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your score was <b> ${level} </b> <br/> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        },1000)
        reset();
    }
}

function pressBtn() {
    console.log(this);
    btnFlash(this);

    userColor = this.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1)
}

let buttons = document.querySelectorAll(".btn");
for(let btn of buttons){
    btn.addEventListener("click", pressBtn)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}