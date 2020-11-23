// Initialize game variables
let isGameOver = false;
let scoreCount = 0;
const game = document.querySelector(".game");
const frog = document.createElement("div");
const alligator = document.createElement("div");
const score = document.querySelector(".score");

// Function to run the game
function runGame() {	
	frog.classList.add("frog");
	game.appendChild(frog);
	
	alligator.classList.add("alligator");
	game.appendChild(alligator);
	
	document.addEventListener("keydown", function(event) {
		if (event.keyCode == 32) {
			jump();
		}
	});
	
	//generateAlligators();
	
	let isAlive = setInterval(function() {
		let frogTop = parseInt(window.getComputedStyle(frog).getPropertyValue("top"));
		let alligatorLeft = parseInt(window.getComputedStyle(alligator).getPropertyValue("left"));
		
		// Detect collision
		if (alligatorLeft > 0 && alligatorLeft < 50) {
			if (frogTop >= 100) {
				clearInterval(isAlive);
				gameOver();
			} else {
				scoreCount += 10;
				score.innerHTML = "Score: " + scoreCount;
			}
		}		
		
		if (alligatorLeft < 0) {
			document.getElementsByClassName("alligator")[0].style.backgroundColor = "transparent";
		} else if (alligatorLeft > 550) {
			document.getElementsByClassName("alligator")[0].style.backgroundColor = "black";
		}
		
		
	}, 10);
	
}

// Function to make the frog jump
function jump() {
	if (!frog.classList.contains("jump")) {
		frog.classList.add("jump");
		setTimeout(function() {
			frog.classList.remove("jump");
		}, 500)
	}
}

function resetGame() {
	isGameOver = false;
	scoreCount = 0;
	score.innerHTML = "Score: " + scoreCount;
}

// Function to generate alligators
//function generateAlligators() {
//	let random = Math.random * 4000;
//	const alligator = document.createElement("div");
//	alligator.classList.add("alligator");
//	game.appendChild(alligator);
//	
//	let timerId = setInterval(function() {
//		let frogTop = parseInt(window.getComputedStyle(frog).getPropertyValue("top"));
//		let alligatorLeft = parseInt(window.getComputedStyle(alligator).getPropertyValue("left"));
//		console.log(alligatorLeft);
//		
//		// Detect collision
//		if (alligatorLeft > 0 && alligatorLeft < 50) {
//			if (frogTop >= 100) {
//				clearInterval(isAlive);
//				gameOver();
//			} else {
//				scoreCount += 10;
//				score.innerHTML = "Score: " + scoreCount;
//			}
//		}		
//		
//		if (alligatorLeft < 0) {
//			document.getElementsByClassName("alligator")[0].style.backgroundColor = "transparent";
//		} else if (alligatorLeft > 550) {
//			document.getElementsByClassName("alligator")[0].style.backgroundColor = "black";
//		}	
//		
//		alligator.style.left -= 10 + "px";
//	}, 10)
//	
//	//setTimeout(generateAlligators, random);
//}

// Function to reset the game
function gameOver() {
	alert("Game Over!");
	console.log("does this fire");
	resetGame();
	runGame();
}

runGame();