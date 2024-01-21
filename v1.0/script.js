

// This function will run when user click on 1st div
 function box1(){
    let box1 = document.getElementById("one");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box1.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box1.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box1.style.pointerEvents="none";
};

// This function will run when user click on 2st div
function box2(){
    let box2 = document.getElementById("two");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box2.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box2.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box2.style.pointerEvents="none";
};

// This function will run when user click on 3rd div
function box3(){
    let box3 = document.getElementById("three");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box3.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box3.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box3.style.pointerEvents="none";
};

// This function will run when user click on 4th div
function box4(){
    let box4 = document.getElementById("four");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box4.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box4.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box4.style.pointerEvents="none";
};

// This function will run when user click on 5th div
function box5(){
    let box5 = document.getElementById("five");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box5.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box5.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box5.style.pointerEvents="none";
};

// This function will run when user click on 6th div
function box6(){
    let box6 = document.getElementById("six");
    let turn = document.getElementById("winner");
 if(turn.innerHTML=="Player x turn"){
    box6.innerHTML = "x";
    turn.innerHTML = "Player o turn";
 }else if(turn.innerHTML=="Player o turn"){
    box6.innerHTML = "o";
    turn.innerHTML = "Player x turn";
 };
 box6.style.pointerEvents="none";
};

// This function will run when user click on 7th div
function box7(){
   let box7 = document.getElementById("seven");
   let turn = document.getElementById("winner");
if(turn.innerHTML=="Player x turn"){
   box7.innerHTML = "x";
   turn.innerHTML = "Player o turn";
}else if(turn.innerHTML=="Player o turn"){
   box7.innerHTML = "o";
   turn.innerHTML = "Player x turn";
};
box7.style.pointerEvents="none";
};

// This function will run when user click on 8th div
function box8(){
   let box8 = document.getElementById("eight");
   let turn = document.getElementById("winner");
if(turn.innerHTML=="Player x turn"){
   box8.innerHTML = "x";
   turn.innerHTML = "Player o turn";
}else if(turn.innerHTML=="Player o turn"){
   box8.innerHTML = "o";
   turn.innerHTML = "Player x turn";
};
box8.style.pointerEvents="none";
};

// This function will run when user click on 9th div
function box9(){
   let box9 = document.getElementById("nine");
   let turn = document.getElementById("winner");
if(turn.innerHTML=="Player x turn"){
   box9.innerHTML = "x";
   turn.innerHTML = "Player o turn";
}else if(turn.innerHTML=="Player o turn"){
   box9.innerHTML = "o";
   turn.innerHTML = "Player x turn";
};
box9.style.pointerEvents="none";
};


// this function will run whenever user
function winner(){
let box1 = document.getElementById("one");
let box2 = document.getElementById("two");
let box3 = document.getElementById("three");
let box4 = document.getElementById("four");
let box5 = document.getElementById("five");
let box6 = document.getElementById("six");
let box7 = document.getElementById("seven");
let box8 = document.getElementById("eight");
let box9 = document.getElementById("nine");
let turn = document.getElementById("winner");
if(box1.innerHTML=="x" && box2.innerHTML=="x" && box3.innerHTML=="x"){
   // for first row
   turn.innerHTML = "Player X won the game";
}else if(box4.innerHTML=="x" && box5.innerHTML=="x" && box6.innerHTML=="x"){
   // for second row
      turn.innerHTML = "Player X won the game";
}else if(box7.innerHTML=="x" && box8.innerHTML=="x" && box9.innerHTML=="x"){
   // for third row
      turn.innerHTML = "Player X won the game";
}else if(box1.innerHTML=="x" && box4.innerHTML=="x" && box7.innerHTML=="x"){
   // for first coloumn
      turn.innerHTML = "Player X won the game";
}else if(box2.innerHTML=="x" && box5.innerHTML=="x" && box8.innerHTML=="x"){
   // for second coloumn
      turn.innerHTML = "Player X won the game";
}else if(box3.innerHTML=="x" && box6.innerHTML=="x" && box9.innerHTML=="x"){
   // for third coloumn
      turn.innerHTML = "Player X won the game";
}else if(box1.innerHTML=="x" && box5.innerHTML=="x" && box9.innerHTML=="x"){
   // for "\" this type of line
      turn.innerHTML = "Player X won the game";
}else if(box3.innerHTML=="x" && box5.innerHTML=="x" && box7.innerHTML=="x"){
   // for "/" this type of line
      turn.innerHTML = "Player X won the game";
}else if(box1.innerHTML=="o" && box2.innerHTML=="o" && box3.innerHTML=="o"){
  // cases if player o win
   // for first row
   turn.innerHTML = "Player O won the game";
}else if(box4.innerHTML=="o" && box5.innerHTML=="o" && box6.innerHTML=="o"){
   // for second row
      turn.innerHTML = "Player O won the game";
}else if(box7.innerHTML=="o" && box8.innerHTML=="o" && box9.innerHTML=="o"){
   // for third row
      turn.innerHTML = "Player O won the game";
}else if(box1.innerHTML=="o" && box4.innerHTML=="o" && box7.innerHTML=="o"){
   // for first coloumn
      turn.innerHTML = "Player O won the game";
}else if(box2.innerHTML=="o" && box5.innerHTML=="o" && box8.innerHTML=="o"){
   // for second coloumn
      turn.innerHTML = "Player O won the game";
}else if(box3.innerHTML=="o" && box6.innerHTML=="o" && box9.innerHTML=="o"){
   // for third coloumn
      turn.innerHTML = "Player O won the game";
}else if(box1.innerHTML=="o" && box5.innerHTML=="o" && box9.innerHTML=="o"){
   // for "\" this type of line
      turn.innerHTML = "Player O won the game";
}else if(box3.innerHTML=="o" && box5.innerHTML=="o" && box7.innerHTML=="o"){
   // for "/" this type of line
      turn.innerHTML = "Player O won the game";
}else if(box1.innerHTML!=="" && box2.innerHTML!==""&&box3.innerHTML!==""&&box4.innerHTML!==""&&box5.innerHTML!==""&&box6.innerHTML!==""&&box7.innerHTML!==""&&box8.innerHTML!==""&&box9.innerHTML!==""){
   turn.innerHTML = "Draw";
};
}

function playAgain(){
let box1 = document.getElementById("one");
let box2 = document.getElementById("two");
let box3 = document.getElementById("three");
let box4 = document.getElementById("four");
let box5 = document.getElementById("five");
let box6 = document.getElementById("six");
let box7 = document.getElementById("seven");
let box8 = document.getElementById("eight");
let box9 = document.getElementById("nine");
let turn = document.getElementById("winner");
   box1.style.pointerEvents="";
   box2.style.pointerEvents="";
   box3.style.pointerEvents="";
   box4.style.pointerEvents="";
   box5.style.pointerEvents="";
   box6.style.pointerEvents="";
   box7.style.pointerEvents="";
   box8.style.pointerEvents="";
   box9.style.pointerEvents="";
   box1.innerHTML="";
   box2.innerHTML="";
   box3.innerHTML="";
   box4.innerHTML="";
   box5.innerHTML="";
   box6.innerHTML="";
   box7.innerHTML="";
   box8.innerHTML="";
   box9.innerHTML="";
   if(turn.innerHTML=="Player O won the game"){
      turn.innerHTML = "Player x turn";
   }else if(turn.innerHTML=="Player X won the game"){
      turn.innerHTML = "Player o turn";
   }else if(turn.innerHTML=="Draw"){
      turn.innerHTML = "Player x turn";
   };
}



// some function to play with computer //..............



// this function will run when user click on box1 
function box1c(){
      // declaring variables
let box1c = document.getElementById("onec");
let box2c = document.getElementById("twoc");
let box3c = document.getElementById("threec");
let box4c = document.getElementById("fourc");
let box5c = document.getElementById("fivec");
let box6c = document.getElementById("sixc");
let box7c = document.getElementById("sevenc");
let box8c = document.getElementById("eightc");
let box9c = document.getElementById("ninec");
let turnc = document.getElementById("winnerc");
   if(turnc.innerHTML=="Your turn"){
      box1c.innerHTML = "x";
      box1c.style.pointerEvents="none";
         // nested if else for computer input(01)
         if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
            box6c.innerHTML = "o";
            box6c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
            box2c.innerHTML = "o";
            box2c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
            box8c.innerHTML = "o";
            box8c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
            box2c.innerHTML = "o";
            box2c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
            box8c.innerHTML = "o";
            box8c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
            box6c.innerHTML = "o";
            box6c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="x" && box3c.innerHTML==""){
      box3c.innerHTML = "o";
      box3c.style.pointerEvents="none";
   }else if(box2c.innerHTML=="" && box3c.innerHTML=="x"){
      box2c.innerHTML = "o";
      box2c.style.pointerEvents="none";
   }else if(box5c.innerHTML=="x" && box9c.innerHTML==""){
      box9c.innerHTML = "o";
      box9c.style.pointerEvents="none";
   }else if(box5c.innerHTML=="" && box9c.innerHTML=="x"){
      box5c.innerHTML = "o";
      box5c.style.pointerEvents="none";
   }else if(box4c.innerHTML=="x" && box7c.innerHTML==""){
      box7c.innerHTML="o";
      box7c.style.pointerEvents="none";
   }else if(box4c.innerHTML=="" && box7c.innerHTML=="x"){
      box4c.innerHTML="o";
      box4c.style.pointerEvents="none";
   }else if(box9c.innerHTML==""){
      box9c.innerHTML="o";
      box9c.style.pointerEvents="none";
   }else if(box2c.innerHTML==""){
      box2c.innerHTML = "o";
      box2c.style.pointerEvents="none";
   }else if(box3c.innerHTML==""){
      box3c.innerHTML = "o";
      box3c.style.pointerEvents="none";
   }else if(box4c.innerHTML==""){
      box4c.innerHTML = "o";
      box4c.style.pointerEvents="none";
   }else if(box5c.innerHTML==""){
      box5c.innerHTML = "o";
      box5c.style.pointerEvents="none";
   }else if(box7c.innerHTML==""){
      box7c.innerHTML = "o";
      box7c.style.pointerEvents="none";
   }else if(box6c.innerHTML==""){
      box6c.innerHTML="o";
      box6c.style.pointerEvents="none";
   }else if(box8c.innerHTML==""){
      box8c.innerHTML="o";
      box8c.style.pointerEvents="none";
   }else{
      // end of game //
   };
// end of (01)
   };
}


// this function will run when user click on box2
function box2c(){
      // declaring variables
let box1c = document.getElementById("onec");
let box2c = document.getElementById("twoc");
let box3c = document.getElementById("threec");
let box4c = document.getElementById("fourc");
let box5c = document.getElementById("fivec");
let box6c = document.getElementById("sixc");
let box7c = document.getElementById("sevenc");
let box8c = document.getElementById("eightc");
let box9c = document.getElementById("ninec");
let turnc = document.getElementById("winnerc");

   if(turnc.innerHTML=="Your turn"){
      box2c.innerHTML = "x";
      box2c.style.pointerEvents="none";
         // nested if else for computer input(02)
         if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
            box6c.innerHTML = "o";
            box6c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
            box2c.innerHTML = "o";
            box2c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
            box8c.innerHTML = "o";
            box8c.style.pointerEvents = "none";
         }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
            box4c.innerHTML = "o";
            box4c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
            box2c.innerHTML = "o";
            box2c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
            box8c.innerHTML = "o";
            box8c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
            box6c.innerHTML = "o";
            box6c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
            box1c.innerHTML = "o";
            box1c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
            box9c.innerHTML = "o";
            box9c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
            box3c.innerHTML = "o";
            box3c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
            box5c.innerHTML = "o";
            box5c.style.pointerEvents = "none";
         }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
            box7c.innerHTML = "o";
            box7c.style.pointerEvents = "none";
         }else if(box3c.innerHTML==""&&box1c.innerHTML=="x"){
      box3c.innerHTML = "o";
      box3c.style.pointerEvents="none";
   }else if(box5c.innerHTML=="x"&&box8c.innerHTML==""){
      box8c.innerHTML = "o";
      box8c.style.pointerEvents="none";
   }else if(box5c.innerHTML==""&&box8c.innerHTML=="x"){
      box5c.innerHTML = "o";
      box5c.style.pointerEvents="none";
   }else if(box5c.innerHTML==""){
      box5c.innerHTML = "o";
      box5c.style.pointerEvents="none";
   }else if(box3c.innerHTML==""){
      box3c.innerHTML = "o";
      box3c.style.pointerEvents="none";
   }else if(box1c.innerHTML==""){
      box1c.innerHTML = "o";
      box1c.style.pointerEvents="none";
   }else if(box8c.innerHTML==""){
      box8c.innerHTML = "o";
      box8c.style.pointerEvents="none";
   }else if(box4c.innerHTML==""){
      box4c.innerHTML = "o";
      box4c.style.pointerEvents="none";
   }else if(box6c.innerHTML==""){
      box6c.innerHTML = "o";
      box6c.style.pointerEvents="none";
   }else if(box7c.innerHTML==""){
      box7c.innerHTML = "o";
      box7c.style.pointerEvents="none";
   }else if(box9c.innerHTML==""){
      box9c.innerHTML = "o";
      box9c.style.pointerEvents="none";
   };
// end of (02)
   };
}


// this function will run when user click on box3
function box3c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");   
   if(turnc.innerHTML=="Your turn"){
      box3c.innerHTML = "x";
      box3c.style.pointerEvents="none";
  // nested if else for computer input(03)
  if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
   box4c.innerHTML = "o";
   box4c.style.pointerEvents = "none";
}else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
   box4c.innerHTML = "o";
   box4c.style.pointerEvents = "none";
}else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
   box6c.innerHTML = "o";
   box6c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
   box3c.innerHTML = "o";
   box3c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
   box2c.innerHTML = "o";
   box2c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
   box1c.innerHTML = "o";
   box1c.style.pointerEvents = "none";
}else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
   box9c.innerHTML = "o";
   box9c.style.pointerEvents = "none";
}else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
   box8c.innerHTML = "o";
   box8c.style.pointerEvents = "none";
}else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
   box7c.innerHTML = "o";
   box7c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
   box1c.innerHTML = "o";
   box1c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
   box4c.innerHTML = "o";
   box4c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
   box7c.innerHTML = "o";
   box7c.style.pointerEvents = "none";
}else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
   box2c.innerHTML = "o";
   box2c.style.pointerEvents = "none";
}else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
   box5c.innerHTML = "o";
   box5c.style.pointerEvents = "none";
}else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
   box8c.innerHTML = "o";
   box8c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
   box3c.innerHTML = "o";
   box3c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
   box6c.innerHTML = "o";
   box6c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
   box9c.innerHTML = "o";
   box9c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
   box1c.innerHTML = "o";
   box1c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
   box5c.innerHTML = "o";
   box5c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
   box9c.innerHTML = "o";
   box9c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
   box3c.innerHTML = "o";
   box3c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
   box5c.innerHTML = "o";
   box5c.style.pointerEvents = "none";
}else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
   box7c.innerHTML = "o";
   box7c.style.pointerEvents = "none";
}else if(box1c.innerHTML=="x" && box2c.innerHTML==""){
   box2c.innerHTML = "o";
   box2c.style.pointerEvents="none";
  }else if(box1c.innerHTML=="" && box2c.innerHTML=="x"){
   box1c.innerHTML = "o";
   box1c.style.pointerEvents="none";
  }else if(box5c.innerHTML=="x" && box7c.innerHTML==""){
   box7c.innerHTML = "o";
   box7c.style.pointerEvents="none";
  }else if(box5c.innerHTML=="" && box7c.innerHTML=="x"){
   box5c.innerHTML = "o";
   box5c.style.pointerEvents="none";
  }else if(box6c.innerHTML=="x" && box9c.innerHTML==""){
   box9c.innerHTML = "o";
   box9c.style.pointerEvents="none";
  }else if(box6c.innerHTML=="" && box9c.innerHTML=="x"){
   box6c.innerHTML = "o";
   box6c.style.pointerEvents="none";
  }else if(box1c.innerHTML==""){
   box1c.innerHTML = "o";
   box1c.style.pointerEvents="none";
  }else if(box9c.innerHTML==""){
   box9c.innerHTML = "o";
   box9c.style.pointerEvents="none";
  }else if(box2c.innerHTML==""){
   box2c.innerHTML = "o";
   box2c.style.pointerEvents="none";
  }else if(box6c.innerHTML==""){
   box6c.innerHTML = "o";
   box6c.style.pointerEvents="none";
  }else if(box4c.innerHTML==""){
   box4c.innerHTML = "o";
   box4c.style.pointerEvents="none";
  }else if(box5c.innerHTML==""){
   box5c.innerHTML = "o";
   box5c.style.pointerEvents="none";
  }else if(box7c.innerHTML==""){
   box7c.innerHTML = "o";
   box7c.style.pointerEvents="none";
  }else if(box8c.innerHTML==""){
   box8c.innerHTML = "o";
   box8c.style.pointerEvents="none";
  };
  // end of (03)
   };
}


// this function will run when user click on box4
function box4c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");
   
   if(turnc.innerHTML=="Your turn"){
      box4c.innerHTML = "x";
      box4c.style.pointerEvents="none";
      //nested if else (04)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box7c.innerHTML=="x"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box5c.innerHTML=="x" && box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box5c.innerHTML=="" && box6c.innerHTML=="x"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else {
         // end of tic tac toe game //
      };
      // end of(04) nested if else
   };
}


// this function will run when user click on box5
function box5c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");
   
   if(turnc.innerHTML=="Your turn"){
      box5c.innerHTML = "x";
      box5c.style.pointerEvents="none";
      // nested if else for computer input (05)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="x" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box2c.innerHTML=="" && box8c.innerHTML=="x"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box4c.innerHTML=="x"&& box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box4c.innerHTML=="" && box6c.innerHTML=="x"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box1c.innerHTML=="x" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box1c.innerHTML=="" && box9c.innerHTML=="x"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="x" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="" && box7c.innerHTML=="x"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else{
         // End of Tic Tac Toe game //
      };
      // end of (05)
   };
}


// this function will rurn when user click on box6
function box6c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");
   
   if(turnc.innerHTML=="Your turn"){
      box6c.innerHTML = "x";
      box6c.style.pointerEvents="none";
      // nested if else for computer input (06)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="x" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="" && box9c.innerHTML=="x"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box5c.innerHTML=="x" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box5c.innerHTML=="" && box4c.innerHTML=="x"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else {
         // end of tic tac toe game //
      };

      // end of (06) computer input
   };
}

// this function will run whne user click on box7
function box7c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");
   
   if(turnc.innerHTML=="Your turn"){
      box7c.innerHTML = "x";
      box7c.style.pointerEvents="none";
      // nested if else for computer input (07)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="x" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="x"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="x" && box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="x"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box8c.innerHTML=="x" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box8c.innerHTML=="" && box9c.innerHTML=="x"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else{
         // end of tic tac toe game //
      };
      // end of nested if else (07)
   };
}

// this function will run when user click on box8
function box8c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");
   
   if(turnc.innerHTML=="Your turn"){
      box8c.innerHTML = "x";
      box8c.style.pointerEvents="none";
      // nested if else of computer input (08)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="x" && box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="x"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box7c.innerHTML=="x" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box7c.innerHTML=="" && box9c.innerHTML=="x"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      }else if(box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else{
         // End of Tic Tac Toe Game
      };
      // end of nested if else (08)
   };
}


// this function will run when user click on box9
function box9c(){
   // declaring variables
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");   
   if(turnc.innerHTML=="Your turn"){
      box9c.innerHTML = "x";
      box9c.style.pointerEvents="none";
      // nested if else for computer input (09)
      if(box6c.innerHTML=="o" && box5c.innerHTML=="o" && box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="o" && box5c.innerHTML=="" && box4c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box6c.innerHTML=="" && box5c.innerHTML=="o" && box4c.innerHTMl=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box2c.innerHTML=="" && box3c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="o" && box8c.innerHTML=="" && box9c.innerHTML=="o"){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="" && box7c.innerHTML=="o"){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="" && box8c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="" && box9c.innerHTML=="o"){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="" && box9c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML==""){
         box9c.innerHTML = "o";
         box9c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="" && box7c.innerHTML=="o"){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents = "none";
      }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents = "none";
      }else if(box1c.innerHTML=="x" && box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box1c.innerHTML=="" && box5c.innerHTML=="x"){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="x" && box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box3c.innerHTML=="" && box6c.innerHTML=="x"){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box7c.innerHTML=="x" && box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box7c.innerHTML=="" && box8c.innerHTML=="x"){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box5c.innerHTML==""){
         box5c.innerHTML = "o";
         box5c.style.pointerEvents="none";
      }else if(box1c.innerHTML==""){
         box1c.innerHTML = "o";
         box1c.style.pointerEvents="none";
      }else if(box3c.innerHTML==""){
         box3c.innerHTML = "o";
         box3c.style.pointerEvents="none";
      }else if(box6c.innerHTML==""){
         box6c.innerHTML = "o";
         box6c.style.pointerEvents="none";
      }else if(box7c.innerHTML==""){
         box7c.innerHTML = "o";
         box7c.style.pointerEvents="none";
      }else if(box8c.innerHTML==""){
         box8c.innerHTML = "o";
         box8c.style.pointerEvents="none";
      }else if(box2c.innerHTML==""){
         box2c.innerHTML = "o";
         box2c.style.pointerEvents="none";
      }else if(box4c.innerHTML==""){
         box4c.innerHTML = "o";
         box4c.style.pointerEvents="none";
      };
      // end of nested if else (09)
   };
}

// this function will run when user click on "play again" button
function playAgainc(){
let box1c = document.getElementById("onec");
let box2c = document.getElementById("twoc");
let box3c = document.getElementById("threec");
let box4c = document.getElementById("fourc");
let box5c = document.getElementById("fivec");
let box6c = document.getElementById("sixc");
let box7c = document.getElementById("sevenc");
let box8c = document.getElementById("eightc");
let box9c = document.getElementById("ninec");
let turnc = document.getElementById("winnerc");
   box1c.style.pointerEvents="";
   box2c.style.pointerEvents="";
   box3c.style.pointerEvents="";
   box4c.style.pointerEvents="";
   box5c.style.pointerEvents="";
   box6c.style.pointerEvents="";
   box7c.style.pointerEvents="";
   box8c.style.pointerEvents="";
   box9c.style.pointerEvents="";
   box1c.innerHTML="";
   box2c.innerHTML="";
   box3c.innerHTML="";
   box4c.innerHTML="";
   box5c.innerHTML="";
   box6c.innerHTML="";
   box7c.innerHTML="";
   box8c.innerHTML="";
   box9c.innerHTML="";
   turnc.innerHTML = "Your turn";
}

function winnerc(){
   let box1c = document.getElementById("onec");
   let box2c = document.getElementById("twoc");
   let box3c = document.getElementById("threec");
   let box4c = document.getElementById("fourc");
   let box5c = document.getElementById("fivec");
   let box6c = document.getElementById("sixc");
   let box7c = document.getElementById("sevenc");
   let box8c = document.getElementById("eightc");
   let box9c = document.getElementById("ninec");
   let turnc = document.getElementById("winnerc");   
   if(box1c.innerHTML=="x" && box2c.innerHTML=="x" && box3c.innerHTML=="x"){
      // for first row
      turnc.innerHTML = "You Won The Game";
   }else if(box4c.innerHTML=="x" && box5c.innerHTML=="x" && box6c.innerHTML=="x"){
      // for second row
         turnc.innerHTML = "You Won The Game";
   }else if(box7c.innerHTML=="x" && box8c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for third row
         turnc.innerHTML = "You Won The Game";
   }else if(box1c.innerHTML=="x" && box4c.innerHTML=="x" && box7c.innerHTML=="x"){
      // for first coloumn
         turnc.innerHTML = "You Won The Game";
   }else if(box2c.innerHTML=="x" && box5c.innerHTML=="x" && box8c.innerHTML=="x"){
      // for second coloumn
         turnc.innerHTML = "You Won The Game";
   }else if(box3c.innerHTML=="x" && box6c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for third coloumn
         turnc.innerHTML = "You Won The Game";
   }else if(box1c.innerHTML=="x" && box5c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for "\" this type of line
         turnc.innerHTML = "You Won The Game";
   }else if(box3c.innerHTML=="x" && box5c.innerHTML=="x" && box7c.innerHTML=="x"){
      // for "/" this type of line
         turnc.innerHTML = "You Won The Game";
   }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
     // cases if player o win
      // for first row
      turnc.innerHTML = "You Loose The Game";
   }else if(box4c.innerHTML=="o" && box5c.innerHTML=="o" && box6c.innerHTML=="o"){
      // for second row
         turnc.innerHTML = "You Loose The Game";
   }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for third row
         turnc.innerHTML = "You Loose The Game";
   }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
      // for first coloumn
         turnc.innerHTML = "You Loose The Game";
   }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
      // for second coloumn
         turnc.innerHTML = "You Loose The Game";
   }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for third coloumn
         turnc.innerHTML = "You Loose The Game";
   }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for "\" this type of line
         turnc.innerHTML = "You Loose The Game";
   }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
      // for "/" this type of line
         turnc.innerHTML = "You Loose The Game";
   }else if(box1c.innerHTML!=="" && box2c.innerHTML!==""&&box3c.innerHTML!==""&&box4c.innerHTML!==""&&box5c.innerHTML!==""&&box6c.innerHTML!==""&&box7c.innerHTML!==""&&box8c.innerHTML!==""&&box9c.innerHTML!==""){
      turnc.innerHTML = "Draw";
   };
   }


   function wintime(){
      setInterval(winnerc,500);
   };
