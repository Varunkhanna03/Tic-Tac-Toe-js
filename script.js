let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg")


let turnO = true;//playerx player y

const winP = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetgame = () => {
    turnO = true ;
    enableboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO){//player 0
            box.innerText = "O";
            turnO = false ;
        }else{//player x
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msgcontainer.innerText = `badhaiho , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winP){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

