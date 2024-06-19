let boxes=document.querySelectorAll(".box");
let start=document.querySelector(".reset");
let turn=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

start.addEventListener("click",() =>{
    if(start.innerText==="New Game"){
        turn=true;
        start.innerText=`End Game`;
        boxes.forEach(box => {
            box.disabled=false;
            box.onclick = (e) => {
                if(turn){
                    box.innerText="X";
                    turn=false;
                }
                else{
                    box.innerText="O";
                    turn=true;
                }
                box.disabled=true;
                check();
            };
        });
    }
    else if(start.innerText==="End Game"){
        start.innerText=`restart Game`;
    }
    else{
        start.innerText=`New Game`;
        for(box of boxes){
            box.innerText="";
        }
    }
})

let winner=document.querySelector(".winner-hide");

const check=()=>{
    for(position of winPatterns){
        let pos1val=boxes[position[0]].innerText;
        let pos2val=boxes[position[1]].innerText;
        let pos3val=boxes[position[2]].innerText;
        if(pos1val===pos2val&&pos2val===pos3val&&pos3val!=""){
            winner.setAttribute("class","winner");
            winner.innerText=winner.innerText+" "+pos1val;
            console.log(winner);
            for(box of boxes){
                box.disabled=true;
            }
        }
    }
}
