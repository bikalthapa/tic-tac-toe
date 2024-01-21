// declaring variables
    let box1c = document.getElementById("boxc0");
    let box2c = document.getElementById("boxc1");
    let box3c = document.getElementById("boxc2");
    let box4c = document.getElementById("boxc3");
    let box5c = document.getElementById("boxc4");
    let box6c = document.getElementById("boxc5");
    let box7c = document.getElementById("boxc6");
    let box8c = document.getElementById("boxc7");
    let box9c = document.getElementById("boxc8");
    let turnc = document.getElementById("winnerc");

    var is_first_time = true;
// some function to play with computer //..............
function boxc(id){
   var clicked_box = document.getElementById("boxc"+id);
   clicked_box.innerHTML = "x";
   clicked_box.style.pointerEvents="none";

   if(turnc.innerHTML=="Your turn" && is_first_time){
      var rand_id = Math.random()*8;
      rand_id = Math.floor(rand_id);

      // Changing rand_id if it is equal to the clicked element
      if(rand_id==id){
         if(rand_id>0 && rand_id<=8){
            rand_id = rand_id-1;
         }else if(rand_id==0){
            rand_id ++;
         }
      }

      


      var computer_selection = document.getElementById("boxc"+rand_id);
      computer_selection.innerHTML = "o";
      computer_selection.style.pointerEvents = "none";

      is_first_time = false;
   }else{
      if(id==0){
         box1c_algo();
      }else if(id==1){
         box2c_algo();
      }else if(id==2){
         box3c_algo();
      }else if(id==3){
         box4c_algo();
      }else if(id==4){
         box5c_algo();
      }else if(id==5){
         box6c_algo();
      }else if(id==6){
         box7c_algo();
      }else if(id==7){
         box8c_algo();
      }else if(id==8){
         box9c_algo();
      }
   }
}

// this function will run when user click on box1 
function box1c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
function box2c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
function box3c_algo(){
   if(turnc.innerHTML=="Your turn"){
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
function box4c_algo(){ 
 if(turnc.innerHTML=="Your turn"){
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
function box5c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
function box6c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
function box7c_algo(){ 
 if(turnc.innerHTML=="Your turn"){
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
function box8c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
function box9c_algo(){
 if(turnc.innerHTML=="Your turn"){
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
   is_first_time = true;
   document.getElementById("inputs").style.pointerEvents = "";
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

function winner(winner_name){
   document.getElementById("inputs").style.pointerEvents = "none";
   $("#game_result").show();
   if(winner_name=="User"){
      var title = "You Win the game !";
      var image = "images/3_stars.png";
         const user_win_audio = new Audio("win_sound1.wav");
         user_win_audio.play();
   }else if(winner_name=="Computer"){
      var title = "I win the game !";
      var image = "images/1_stars.png";

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
      $("#game_result").html(result_design);
   },2000);
   
}

function winning_status(){
   if(box1c.innerHTML=="x" && box2c.innerHTML=="x" && box3c.innerHTML=="x"){
      // for first row
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box4c.innerHTML=="x" && box5c.innerHTML=="x" && box6c.innerHTML=="x"){
      // for second row
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box7c.innerHTML=="x" && box8c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for third row
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box1c.innerHTML=="x" && box4c.innerHTML=="x" && box7c.innerHTML=="x"){
      // for first coloumn
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box2c.innerHTML=="x" && box5c.innerHTML=="x" && box8c.innerHTML=="x"){
      // for second coloumn
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box3c.innerHTML=="x" && box6c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for third coloumn
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box1c.innerHTML=="x" && box5c.innerHTML=="x" && box9c.innerHTML=="x"){
      // for "\" this type of line
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box3c.innerHTML=="x" && box5c.innerHTML=="x" && box7c.innerHTML=="x"){
      // for "/" this type of line
      turnc.innerHTML = "You Won The Game";
      winner("User");
   }else if(box1c.innerHTML=="o" && box2c.innerHTML=="o" && box3c.innerHTML=="o"){
      // cases if player o win
      // for first row
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box4c.innerHTML=="o" && box5c.innerHTML=="o" && box6c.innerHTML=="o"){
      // for second row
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box7c.innerHTML=="o" && box8c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for third row
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box1c.innerHTML=="o" && box4c.innerHTML=="o" && box7c.innerHTML=="o"){
      // for first coloumn
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box2c.innerHTML=="o" && box5c.innerHTML=="o" && box8c.innerHTML=="o"){
      // for second coloumn
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box3c.innerHTML=="o" && box6c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for third coloumn
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box1c.innerHTML=="o" && box5c.innerHTML=="o" && box9c.innerHTML=="o"){
      // for "\" this type of line
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box3c.innerHTML=="o" && box5c.innerHTML=="o" && box7c.innerHTML=="o"){
      // for "/" this type of line
      turnc.innerHTML = "You Loose The Game";
      winner("Computer");
   }else if(box1c.innerHTML!=="" && box2c.innerHTML!==""&&box3c.innerHTML!==""&&box4c.innerHTML!==""&&box5c.innerHTML!==""&&box6c.innerHTML!==""&&box7c.innerHTML!==""&&box8c.innerHTML!==""&&box9c.innerHTML!==""){
      turnc.innerHTML = "Draw";
      winner("None");

   };
 }


 function wintime(){
    setInterval(winner(),500);
 };