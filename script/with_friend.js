let box1 = document.getElementById("box0");
let box2 = document.getElementById("box1");
let box3 = document.getElementById("box2");
let box4 = document.getElementById("box3");
let box5 = document.getElementById("box4");
let box6 = document.getElementById("box5");
let box7 = document.getElementById("box6");
let box8 = document.getElementById("box7");
let box9 = document.getElementById("box8");
let turn = document.getElementById("winner");

// This function will determine
function box(id){
    let choosen_box = document.getElementById("box"+id);
    if(turn.innerHTML=="Player x turn"){
        choosen_box.innerHTML = "x";
        turn.innerHTML = "Player o turn";
    }else if(turn.innerHTML=="Player o turn"){
        choosen_box.innerHTML = "o";
        turn.innerHTML = "Player x turn";
    };
    choosen_box.style.pointerEvents="none";
}

function display_winner_name(winner_name){
   document.getElementById("inputs").style.pointerEvents = "none";
   if(winner_name=="X" || winner_name=="O"){
      var title = "Player "+winner_name+" Won the game !";
      var image = "images/3_stars.png";

         const user_loose_audio = new Audio("game_over_music1.wav");
         user_loose_audio.play();
   }else{
      var image = "images/2_stars.png";
      var title = "Draw";
         const draw_audio = new Audio("draw_music1.wav");
         draw_audio.play();
   }
   var result_design = `
            <div class="card text-center" style="width: 18rem; background-color:transparent;">
               <img src="`+image+`" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title text-center text-light display-6">`+title+`</h5>
                  <div class="row">
                     <div class="col col-sm-6">
                        <a href="index.html"><button class="result_btn btn w-100 onclick="playAgainc(true)">Play Again</button></a>
                     </div>
                     <div class="col col-sm-6">
                        <a href="index.html"><button class="btn result_btn menu_btn w-100">Menu</button></a>
                     </div>
                  </div>
               </div>
               </div>`;
   setTimeout(()=>{
      $("#game_result").show();
      $("#game_result").html(result_design);
   },2000);
}

// this function will run whenever user
function winner(){
    if(box1.innerHTML=="x" && box2.innerHTML=="x" && box3.innerHTML=="x"){
       // for first row
       turn.innerHTML = "Player X won the game";
       display_winner_name("X");
    }else if(box4.innerHTML=="x" && box5.innerHTML=="x" && box6.innerHTML=="x"){
       // for second row
          turn.innerHTML = "Player X won the game";
       display_winner_name("X");
    }else if(box7.innerHTML=="x" && box8.innerHTML=="x" && box9.innerHTML=="x"){
       // for third row
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box1.innerHTML=="x" && box4.innerHTML=="x" && box7.innerHTML=="x"){
       // for first coloumn
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box2.innerHTML=="x" && box5.innerHTML=="x" && box8.innerHTML=="x"){
       // for second coloumn
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box3.innerHTML=="x" && box6.innerHTML=="x" && box9.innerHTML=="x"){
       // for third coloumn
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box1.innerHTML=="x" && box5.innerHTML=="x" && box9.innerHTML=="x"){
       // for "\" this type of line
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box3.innerHTML=="x" && box5.innerHTML=="x" && box7.innerHTML=="x"){
       // for "/" this type of line
          turn.innerHTML = "Player X won the game";
          display_winner_name("X");
    }else if(box1.innerHTML=="o" && box2.innerHTML=="o" && box3.innerHTML=="o"){
       // for first row
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box4.innerHTML=="o" && box5.innerHTML=="o" && box6.innerHTML=="o"){
       // for second row
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box7.innerHTML=="o" && box8.innerHTML=="o" && box9.innerHTML=="o"){
       // for third row
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box1.innerHTML=="o" && box4.innerHTML=="o" && box7.innerHTML=="o"){
       // for first coloumn
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box2.innerHTML=="o" && box5.innerHTML=="o" && box8.innerHTML=="o"){
       // for second coloumn
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box3.innerHTML=="o" && box6.innerHTML=="o" && box9.innerHTML=="o"){
       // for third coloumn
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box1.innerHTML=="o" && box5.innerHTML=="o" && box9.innerHTML=="o"){
       // for "\" this type of line
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box3.innerHTML=="o" && box5.innerHTML=="o" && box7.innerHTML=="o"){
       // for "/" this type of line
          turn.innerHTML = "Player O won the game";
          display_winner_name("O");
    }else if(box1.innerHTML!=="" && box2.innerHTML!==""&&box3.innerHTML!==""&&box4.innerHTML!==""&&box5.innerHTML!==""&&box6.innerHTML!==""&&box7.innerHTML!==""&&box8.innerHTML!==""&&box9.innerHTML!==""){
          turn.innerHTML = "Draw";
          display_winner_name("Draw");
    };
 }
 
 function playAgain(){
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
 