const questions = [
	{
		question: "1. What is JavaScript?",
		options: [
			"a) a scripting language used to make the website interactive",
			"b) JavaScript is an assembly language used to make the website interactive",
			"c) JavaScript is a compiled language used to make the website interactive",
			"d) None of the mentioned",
		],
		correctAnswer:
			"a) a scripting language used to make the website interactive",
	},
	{
		question: "2. Which of the following is correct about JavaScript?",
		options: [
			"a) JavaScript is an Object-Based language",
			"b) JavaScript is Assembly-language",
			"c) JavaScript is an Object-Oriented language",
			"d) JavaScript is a High-level language",
		],
		correctAnswer: "a) JavaScript is an Object-Based language",
	},
	{
		question: "3. Which is a variable?",
		options: ["a) Digestives", "b) Kalakalash", "c) Falafel", "d) Tzatziki"],
		correctAnswer: "a) Digestives",
	},
];

let currentQuestionIndex = 0;

function loadQuestion() {
	const questionElement = document.getElementById("questions");
	const currentQuestion = questions[currentQuestionIndex];
	questionElement.textContent = currentQuestion.question;
	console.log("Question Loaded");
	loadChoices();
}

function loadChoices() {
	let choicesElement = document.getElementById("choices");
	const currentQuestion = questions[currentQuestionIndex];
	choicesElement.innerHTML = "";
	// Create and append new options
	// currentQuestion.options.forEach((option) => {
	// 	let optionElement = document.createElement("button");
	// 	optionElement.textContent = option;
	// 	choicesElement.appendChild(optionElement);
		const answerOptions = questions.map((question) => question.options);
		choicesElement.appendChild(answerOptions);
		console.log(optionElement);
	// }
	// );
	console.log("Choices Loaded");
	displaySkipButton();
}

function displaySkipButton() {
	const skipButton = document.getElementById("skip");
	skipButton.setAttribute("class", "start");
	console.log("skip button loaded")
}

function checkAnswer(selectedOption) {
	const currentQuestion = questions[currentQuestionIndex];

	if (selectedOption === currentQuestion.correctAnswer) {
		// Handle correct answer logic (e.g., increase score)
		console.log("Correct!");
	} else {
		// Handle incorrect answer logic (if needed)
		console.log("Incorrect!");
	}

	// Move to the next question
	currentQuestionIndex++;

	// Check if there are more questions
	if (currentQuestionIndex < questions.length) {
		loadQuestion();
	} else {
		// Quiz completed, you can display a summary or perform other actions
		console.log("Quiz completed!");
	}
}

function nextQuestion() {
	var skipQuestion = document.getElementById("skip");
	skipQuestion.textContent = "big chungus";
	skipQuestion.onclick = function () {
		loadQuestion();
		console.log("Next Question");
	};
}
