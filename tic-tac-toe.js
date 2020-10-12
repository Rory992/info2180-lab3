function layout(){
     let content = document.getElementById("board").children;
     
     for(let i = 0; i<content.length; i++){
         content[i].setAttribute("class", "square");
         content[i].setAttribute("onclick", "assign()");
         content[i].setAttribute("onmouseover", "hover()");
         content[i].setAttribute("onmouseout", "noHover()");
     } 
     let btn = document.getElementsByClassName("btn");   
     btn[0].addEventListener("click", reset);
 }

 window.onload = layout;
 
let turn = 0;

function assign(){
    let position = window.document.getElementById("board").children;

    for(let i = 0; i<position.length; i++){
        let box = position[i];

        box.onclick = function(){
            if(turn%2==0 && box.innerHTML==""){
                box.innerHTML = "X";
                box.classList.add("square", "X");
                winner();
                turn+=1;
            }
            else if (turn%2==1 && box.innerHTML==""){
                box.innerHTML = "O";
                box.classList.add("square", "O");
                winner();
                turn+=1;
            }
        };
    }
}

function hover(){
    let position = window.document.getElementById("board").children;

    for(let i =0; i<position.length; i++){
        let box = position[i];
        
        box.onmouseover = function(){
            box.classList.add("hover");
        }
    }
}

function noHover(){
    let position = window.document.getElementById("board").children;

    for(let i =0; i<position.length; i++){
        let box = position[i];
        
        box.onmouseout = function(){
            box.classList.remove("hover");
        }
    }
}

function win(){
    let status = document.getElementById("status");
    let position = window.document.getElementById("board").children;
    
    for(let i=0; i<position.length; i++) {
        position[i].removeAttribute("onClick");
    }

    if(turn%2==0) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
    } else if(turn%2==1){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
    }else{
        status.innerHTML = "Both teams please try again";
        status.classList.add("you-won");
    }
}

function winner(){
    let position = window.document.getElementById("board").children;    
    var box1 = position[0], box2 = position[1], box3 = position[2],
        box4 = position[3], box5 = position[4], box6 = position[5],
        box7 = position[6], box8 = position[7], box9 = position[8];
    
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        win();
    }else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        win();
    }else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        win();
    }else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) { 
        win();
    }else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
         win();
    }else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        win();
    }else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        win();
    }else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        win();
    }
}

function reset(){
    turn = 0;  
    let position = window.document.getElementById("board").children;    
    
    for(let i=0;i<position.length;i++){
        position[i].innerHTML = "";
        position[i].setAttribute("onclick", "assign()");
        position[i].classList.remove("X");
        position[i].classList.remove("O");
    }
    
    let status = document.getElementById("status");
    status.classList.remove("you-won");
    status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
}