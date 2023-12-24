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
		question: "3. What is a variable?",
		options: ["a) Digestives", "b) Kalakalash", "c) Falafel", "d) Tzatziki"],
		correctAnswer: "a) Digestives",
	},
];

let currentQuestionIndex = 0;

function loadQuestion() {
	const questionElement = document.getElementById("questions");
	const optionsContainer = document.getElementById("choices");
	const currentQuestion = questions[currentQuestionIndex];
	const currentOptions = questions.options[currentQuestionIndex];

	questionElement.textContent = currentQuestion.question;

	// Clear previous options
	optionsContainer.innerHTML = "";


	// Create and append new options
	currentQuestion.options.forEach((option) => {
		const optionElement = document.createElement("button");
		optionElement.textContent = currentOptions;
		optionElement.onclick = () => checkAnswer(option);
		optionsContainer.appendChild(optionElement);

		// const answerOptions = questions.map((question) => question.options);
		// optionsContainer.appendChild(answerOptions);

		// console.log(currentQuestion.options);
		console.log("Question Loaded");
	});
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
	skipQuestion.textContent = "suck my chungus";
	skipQuestion.onclick = function () {
		loadQuestion();
		console.log("Next Question");
	};
}
