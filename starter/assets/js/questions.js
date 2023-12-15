// // let questionsArray = [
// // 	"do you like fish?",
// // 	"This is a bad fish.",
// // 	"How much bath salt do you have?",
// // 	"I only have salsa!",
// // ];

// // let questions = () => {
// // 	for (i = 0; i < questionsArray.length; i++);
// // };

// const questions = [
// 	{
// 		question: "1. What is JavaScript?",
// 		options: [
// 			"a) a scripting language used to make the website interactive",
// 			"b) JavaScript is an assembly language used to make the website interactive",
// 			"c) JavaScript is a compiled language used to make the website interactive",
// 			"d) None of the mentioned",
// 		],
// 		correctAnswer:
// 			"a) a scripting language used to make the website interactive",
// 	},
// 	{
// 		question: "2. Which of the following is correct about JavaScript?",
// 		options: [
// 			"a) JavaScript is an Object-Based language",
// 			"b) JavaScript is Assembly-language",
// 			"c) JavaScript is an Object-Oriented language",
// 			"d) JavaScript is a High-level language",
// 		],
// 		correctAnswer:
// 			"a) a scripting language used to make the website interactive",
// 	},
// 	{
// 		question: "3. What is a variable?",
// 		options: ["a) Digestives", "b) Kalakalash", "c) Falafel", "d) Tzatziki"],
// 		correctAnswer: "a) Digestives",
// 	},

// 	// Add more questions as needed
// ];

// let currentQuestionIndex = 0;

// function loadQuestion() {
// 	const questionElement = document.getElementById("questions");
// 	const optionsContainer = document.getElementById("choices");
// 	const currentQuestion = questions[currentQuestionIndex];

// 	questionElement.textContent = currentQuestion.question;

// 	// Clear previous options
// 	optionsContainer.innerHTML = "";

// 	// Create and append new options
// 	currentQuestion.options.forEach((option) => {
// 		const optionElement = document.createElement("button");
// 		optionElement.textContent = option;
// 		optionElement.onclick = () => checkAnswer(option);
// 		optionsContainer.appendChild(optionElement);
// 	});
// }

// function checkAnswer(selectedOption) {
// 	const currentQuestion = questions[currentQuestionIndex];

// 	if (selectedOption === currentQuestion.correctAnswer) {
// 		// Handle correct answer logic (e.g., increase score)
// 		console.log("Correct!");
// 	} else {
// 		// Handle incorrect answer logic (if needed)
// 		console.log("Incorrect!");
// 	}

// 	// Move to the next question
// 	currentQuestionIndex++;

// 	// Check if there are more questions
// 	if (currentQuestionIndex < questions.length) {
// 		loadQuestion();
// 	} else {
// 		// Quiz completed, you can display a summary or perform other actions
// 		console.log("Quiz completed!");
// 	}
// }

// function nextQuestion() {
// 	// Implement this function if you want to allow moving to the next question using a button
// 	// You can call loadQuestion() here to load the next question
// 	loadQuestion();
// }

// // Load the first question when the page loads
// window.onload = loadQuestion;
