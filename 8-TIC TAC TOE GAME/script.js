let buttons=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container")
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");


let turnO=true;
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
       if(turnO){
        button.innerText="O";
        turnO=false;
       }else{
        button.innerText="X";
        turnO=true;
       };
       button.disabled=true;

       checkWinner();
    });
});


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1Val=buttons[pattern[0]].innerText;
       let pos2Val=buttons[pattern[1]].innerText;
       let pos3Val=buttons[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                for(let button of buttons){
                    button.disabled = true;
                }
                showWinner(pos1Val);
            };
        };
    };
};


const showWinner=(winner)=>{
    console.log(winner);
    msg.innerText=`Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    newGame();
};


const newGame=() => {
    newGameBtn.addEventListener("click",() => {
        for(let button of buttons){
            button.innerText="";
            button.disabled=false;
            turnO=true;
            msgContainer.classList.add("hide");
        };
    });
};


resetBtn.addEventListener("click",() => {
    for(let button of buttons){
        button.innerText="";
        button.disabled=false;
        turnO=true;
    };
});