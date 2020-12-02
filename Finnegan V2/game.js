// Initialize game variables
let isIntro = false;
let scoreCount;
let frogTop;
let rockLeft;
let game = document.querySelector(".game");
let score = document.querySelector(".score");
const frog = document.createElement("div");

// Function to run the game
function runGame() {
	scoreCount = 0;
	score.innerHTML = "Score: " + scoreCount;
	
	frog.classList.add("frog");
	game.appendChild(frog);
	
	document.addEventListener("keydown", function(event) {
		if (event.keyCode == 32) {
			jump();
		}
	});
	
	runIntro();

	generateRocks();
	
}

function runInto() {
	isIntro = true;
	
	
	
	setTimeout(function() {
		
	}, 500);
}

// Function to generate random rocks
function generateRocks() {
	if (!isGameOver) {
		// Generate a random interval between 1 and 2 seconds
		let randomTime = (Math.random() * (1 - 0.5) + 0.5) * 2000;

		// Create a new rock div and add to game div.  We are using percentages
		// to ensure the position of the elements stay consisten on window
		// resize.
		//let rockPos = 1250;
		let rock = document.createElement('div');
		rock.classList.add('rock');
		game.appendChild(rock);
		//rock.style.left = rockPos + 'px';

		let timer = setInterval(function() {
			// Get current position of frog
			frogTop = parseInt(window.getComputedStyle(frog).getPropertyValue("top"));
			rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

			// Detect collision
			if (rockLeft > 0 && rockLeft < 50 && frogTop >= 100) {
				gameOver();
				return;
			}  else if (rockLeft <= 5) {
				rock.remove();
			}	
//			if (scoreCount >= 50) {
//				alert("You Win");
//			}
		}, 20)
		setTimeout(generateRocks, randomTime);
	}
}

// Function to make the frog jump
function jump() {
	if (!isIntro) {
		if (!frog.classList.contains("jump")) {
			frog.classList.add("jump");
			setTimeout(function() {
				// Increment score
				scoreCount += 10;
				score.innerHTML = "Score: " + scoreCount;
				frog.classList.remove("jump");
			}, 500)
		}
	} else {
		
	}
}

// Function to reset the game
function gameOver() {
	// Remove all elements from the game div before resfreshing
	while(game.firstChild) {
		game.removeChild(game.lastChild);
	}
	// Refresh page
	location.reload();
}

runGame();