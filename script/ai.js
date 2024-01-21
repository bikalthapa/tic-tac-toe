
class Move 
{ 
    constructor() 
    { 
        let row,col; 
    } 
} 
var x_winning = 0, o_winning = 0, draw = 0;
let player = 'x', opponent = 'o'; 

// This function returns true if there are moves 
// remaining on the board. It returns false if 
// there are no moves left to play. 
function isMovesLeft(board) 
{ 
    for(let i = 0; i < 3; i++) 
        for(let j = 0; j < 3; j++) 
            if (board[i][j] == '_') 
                return true; 
                
    return false; 
} 

 
function evaluate(b) 
{ 
    
    // Checking for Rows for X or O victory. 
    for(let row = 0; row < 3; row++) 
    { 
        if (b[row][0] == b[row][1] && 
            b[row][1] == b[row][2]) 
        { 
            if (b[row][0] == player){
            	x_winning++;
                return +10; 
            }else if (b[row][0] == opponent){
            	o_winning++;
                return -10; 
            }
        } 
    } 

    // Checking for Columns for X or O victory. 
    for(let col = 0; col < 3; col++) 
    { 
        if (b[0][col] == b[1][col] && 
            b[1][col] == b[2][col]) 
        { 
            if (b[0][col] == player){
            	x_winning++;
                return +10; 
            }else if (b[0][col] == opponent){
            	o_winning++;
                return -10; 
            }
        } 
    } 

    // Checking for Diagonals for X or O victory. 
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) 
    { 
        if (b[0][0] == player){
        	x_winning++;
            return +10; 
        }else if (b[0][0] == opponent){
        	o_winning++;
            return -10; 
        }
    } 

    if (b[0][2] == b[1][1] && 
        b[1][1] == b[2][0]) 
    { 
        if (b[0][2] == player){
        	x_winning++;
            return +10; 
        }else if (b[0][2] == opponent){
        	o_winning++;
            return -10; 
        }
    } 

    // Else if none of them have 
    // won then return 0
    draw++;
    return 0; 
} 

// This is the minimax function. It 
// considers all the possible ways 
// the game can go and returns the 
// value of the board 
function minimax(board, depth, isMax) 
{ 
    let score = evaluate(board); 

    // If Maximizer has won the game 
    // return his/her evaluated score 
    if (score == 10) 
        return score; 

    // If Minimizer has won the game 
    // return his/her evaluated score 
    if (score == -10) 
        return score; 

    // If there are no more moves and 
    // no winner then it is a tie 
    if (isMovesLeft(board) == false) 
        return 0; 

    // If this maximizer's move 
    if (isMax) 
    { 
        let best = -1000; 

        // Traverse all cells 
        for(let i = 0; i < 3; i++) 
        { 
            for(let j = 0; j < 3; j++) 
            { 
                
                // Check if cell is empty 
                if (board[i][j]=='_') 
                { 
                    
                    // Make the move 
                    board[i][j] = player; 

                    // Call minimax recursively 
                    // and choose the maximum value 
                    best = Math.max(best, minimax(board, 
                                    depth + 1, !isMax)); 

                    // Undo the move 
                    board[i][j] = '_'; 
                } 
            } 
        } 
        return best; 
    } 

    // If this minimizer's move 
    else
    { 
        let best = 1000; 

        // Traverse all cells 
        for(let i = 0; i < 3; i++) 
        { 
            for(let j = 0; j < 3; j++) 
            { 
                
                // Check if cell is empty 
                if (board[i][j] == '_') 
                { 
                    
                    // Make the move 
                    board[i][j] = opponent; 

                    // Call minimax recursively and 
                    // choose the minimum value 
                    best = Math.min(best, minimax(board, 
                                    depth + 1, !isMax)); 

                    // Undo the move 
                    board[i][j] = '_'; 
                } 
            } 
        } 
        return best; 
    } 
} 

// This will return the best possible 
// move for the player 
function findBestMove(board) 
{ 
    let bestVal = -1000; 
    let bestMove = new Move(); 
    bestMove.row = -1; 
    bestMove.col = -1; 

    // Traverse all cells, evaluate 
    // minimax function for all empty 
    // cells. And return the cell 
    // with optimal value. 
    for(let i = 0; i < 3; i++) 
    { 
        for(let j = 0; j < 3; j++) 
        { 
            
            // Check if cell is empty 
            if (board[i][j] == '_') 
            { 
                
                // Make the move 
                board[i][j] = player; 

                // compute evaluation function 
                // for this move. 
                let moveVal = minimax(board, 0, false); 

                // Undo the move 
                board[i][j] = '_'; 

                // If the value of the current move 
                // is more than the best value, then 
                // update best 
                if (moveVal > bestVal) 
                { 
                    bestMove.row = i; 
                    bestMove.col = j; 
                    bestVal = moveVal; 
                } 
            } 
        } 
    } 
    return bestMove; 
} 







// Driver code 
let board = [ [ '_', '_', '_' ], 
            [ '_', '_', '_' ], 
            [ '_', '_', '_' ] ]; 
let bestMove = findBestMove(board); 
var board_div = document.getElementById("play_with_computer");
	board_div.setAttribute("turn",opponent);
var current_turn = board_div.getAttribute("turn");
var thinking_div = document.getElementById("thinking");
thinking_div.style.display = "none";
var thinking_time = 1000;


// Updates the turn or passes the turn from one player to another
function update_turn(){
	var turn_div = document.getElementById("turn");
	if(current_turn==opponent){
		board_div.setAttribute("turn",player);
	}else{
		board_div.setAttribute("turn",opponent);
	}
	current_turn = board_div.getAttribute("turn");
	turn_div.innerHTML = "Player "+current_turn+" turn !";
}


// Function that displays the name of winner //
function display_winner(winner_name){
   document.getElementById("inputs").style.pointerEvents = "none";
   if(winner_name==10 || winner_name==-10){
        if(winner_name==10){
            var title = "Computer ("+player+") Won the game !";
            var image = "images/1_stars.png";
        }else{
            var image = "images/3_stars.png";
            var title = "Player ("+opponent+") Won the game !";
        }


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
        // $("#game_result").addClass("d-flex justify-content-center align-items-center");
        $("#game_result").html(result_design);
   },2000);
}

// Function that trigers whenever user clicks in any div
var boxes = document.getElementsByClassName("box");
for(box of boxes){
	box.addEventListener("click",(e)=>{
		var clk_box = e.target;
		clk_box.style.pointerEvents = "none";
		var clk_id = clk_box.getAttribute("id");
		var clk_i = parseInt(clk_id.charAt(3));
		var clk_j = parseInt(clk_id.charAt(4));

		if(current_turn==opponent){// Opponent's turn

			board[clk_i][clk_j] = opponent;
			clk_box.innerHTML = opponent;
            var board_evaluation = evaluate(board);
            update_turn();

            if(board_evaluation== -10){// Opponent won the game
                display_winner(-10);
            }else{ 
                if(current_turn==player){// Computer's turn
                    var bestMove = findBestMove(board);
                    if(bestMove.row<0 || bestMove.col<0){
                        if(board_evaluation == 0){
                            display_winner(0);
                        }else{
                            display_winner(10);
                        }
                    }else{
                        
                        thinking_div.style.display = "";
                        board[bestMove.row][bestMove.col] = player;
                        var id = "box"+bestMove.row+""+bestMove.col;
                        var computer_choose = document.getElementById(id);

                        // Displaying the computer's move after an interval //
                        setTimeout(()=>{
                            thinking_div.style.display = "none";
                            computer_choose.innerHTML = player;
                            computer_choose.style.pointerEvents = "none";
                            update_turn();
                            board_evaluation = evaluate(board);
                            if(board_evaluation==10){
                                display_winner(10);
                            }
                        },thinking_time);

                    }
                }
            }
		}

		var total = x_winning + o_winning + draw;

		// console.log("X winning chance = "+Math.ceil(x_winning/total*100));
		// console.log("O Winnnig chance = "+Math.ceil(o_winning/total*100));
		// console.log("draw change = "+Math.ceil(draw/total*100));
	});
}