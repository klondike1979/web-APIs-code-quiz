// function recordScore() {
// 	var score = document.getElementById("initials");
//     document.querySelector(submit).onclick(score);
    
// }

// function recordHighScore() {
// 	var highscoresEl = document.getElementById("highscores");
	
//     highscoresEl.textContent = ;
	
//     skipQuestion.onclick = function () {
// 		loadQuestion();
// 		console.log("Next Question");
// 	};
// }

// let score = document.createElement("li");
// highscoresEl.textContent = userInput.value;
// list.appendChild(item);


var userInput = document.getElementById("initials");
var button = document.getElementById("input");
const highscoresEl = document.getElementById("highscores");

button.addEventListener("click", function () {
	console.log(userInput.value);

	// take user input and append to 'li'

	let item = document.createElement("li");
	item.textContent = userInput.value;
	list.appendChild(item);
});
