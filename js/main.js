(function() {
    document.addEventListener("DOMContentLoaded", () => {
	var numberOfPlayers = 2;
	var currentPlayer = 0;
	var move = 0;
	var points1 = 0;    // player 1 points
	var points2 = 0;    // player 2 points
	var size = 9;

	const winners = [
					[0,1,2], 
					[3,4,5], 
					[6,7,8], 
					[0,3,6], 
					[1,4,7], 
					[2,5,8],
					[0,4,8], 
					[2,4,6]
					];

	const start = document.getElementById('start');
	const board = document.getElementById('board');
	const finish = document.getElementById('finish');
	const name = document.getElementById('name');
	const header = document.getElementById('names');
	var player1Selections = new Array();
	var player2Selections = new Array();
	var $boxes = $('.boxes > *');

	//Starts New Game Upon User Click Submission and Includes Name of Player and 'AI' for Computer
	$('.button').click(function() {
		start.style.visibility = "hidden";
		board.style.visibility = "visible";
		$('#player1').addClass('active');
		$('#player2').removeClass('active');
		names = "<div class='playerNames'><h2 class='playerName player1name'>";
		names += name.value;
		names += "</h2><h2 class='playerName player2name'>AI</h2></div>"
		header.insertAdjacentHTML('afterend', names);

	});

	//Sets square to no background image
	function mouseoutBehavior(){
  		$boxes.mouseout(function(){
    	$(this).css("background-image", "");
	  });
	}

	//Sets background to player one's image background
	function player1Mouseover(){
    	$boxes.mouseover(function(){
    	if ($(this).hasClass('box-filled-2')){
    		$(this).css("background-image", "");
    	} else {
      	$(this).css("background-image","url('img/o.svg')");
      }
  	});
  	mouseoutBehavior();
	}

	//Sets background to player two's image background
	function player2Mouseover(){
    	$boxes.mouseover(function(){
    	if ($(this).hasClass('box-filled-1')){
    		$(this).css("background-image", "");
    	} else {
      	$(this).css("background-image","url('img/x.svg')");
      }
    });
    mouseoutBehavior();
	}

	//Check to see if there is a winner
	function arraysEqual(winningValues,playerValues){
		winningValues.prototype.equals = function() {
		  if(this.length != playerValues.length) return false;
		  for(let i=0;i<this.length;i++)
		    if(this[i]!=playerValues[i]) return false;
		  return true;
	}
}


	function checkWinner(){
		isEqual = arraysEqual(winners,player1Selections);
		console.log(player1Selections);
		if (move >= 5){
			if (isEqual){
				finish.style.visibility = "visible";
				board.style.visibility = 'hidden';
				console.log("winner");
			} else {
				console.log("no winner");
			}
		}

	}

	//Check for player move and change box to active if available
	currentPlayer = 0;
	player1Mouseover()
	$boxes.click(function(){
		  if ((currentPlayer == 0) && ($(this).hasClass('box box-filled-1') || $(this).hasClass('box box-filled-2'))){
		  	alert("Whoa whoa--no no bad selection kiddo. Try again.");
		  } else if ((currentPlayer == 0) && ($(this).hasClass('box'))){
		  	//highlight selected box with a 'O' image 
		  	$(this).addClass('box-filled-1');
		  	//increment total player moves
		  	move ++;
		  	//push player one's selections to array
		  	player1Selections.push(($(this).index()));
		  	//set to player two
			currentPlayer = 1;
			//set conditions for mouseover events
			player2Mouseover();
			//check to see if there is a winner
			checkWinner();
			//add active class to player two's image at top of screen
			$('#player2').addClass('active');
			//hide active class for player one's image at top of screen
			$('#player1').removeClass('active');
		  } else if ((currentPlayer == 1) && ($(this).hasClass('box box-filled-1') || $(this).hasClass('box box-filled-2'))) {
		  	alert("Whoa whoa--no no bad selection kiddo. Try again.");
		  } else if ((currentPlayer == 1) && ($(this).hasClass('box'))){
		  	//highlight selected box with a 'X' image 
		    $(this).addClass('box-filled-2');
		    //increment total player moves
		    move ++;
		    //set back to first player
		    currentPlayer = 0;
		    //set conditions for player one mouseover events
		    player1Mouseover();
		    //check for a winner
		    checkWinner();
		    //change classes for player one and two
		    $('#player1').addClass('active');
			$('#player2').removeClass('active');
		}
	});	


});
}());       // End of the self executing function literal
