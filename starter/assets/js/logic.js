// document.getElementById("start").addEventListener("click", clickStart);

document.getElementById("start").onclick = function () {
	firstClick();
};

function firstClick() {
	var hideStart = document.getElementById("start-screen");
	hideStart.setAttribute("class", "hide");

	var displayQuestions = document.getElementById("questions");
	displayQuestions.setAttribute("class", "start");

	// loadQuestion();
	startTest();
}

// 06-01-09-ins-timer-intervals

var timeEl = document.getElementById("time");

var secondsLeft = 75;

function startTest() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft;
		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			endQuiz();
		}
	}, 1000);
};

function endQuiz() {
	timeEl.textContent = "";
	var ending = document.getElementById("end-screen");
	ending.setAttribute("class", "start");
	var startScreen = document.getElementById("start-screen");
	startScreen.setAttribute("class", "hide");
}
