
// Object 'QUESTIONS' is an array that contains all pertinant information for the Q&A
var QUESTIONS = 
[
	{
		id: 1,
		text: "Who is the winningest coach at KU?",
		answers: ['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'],
		correctAnswerIndex: 0, 
	}
];

// 
function QuestionList(questions)
{
	this.current = 0;
	this.questions = questions;
};

// Function for resetting XXXXX
QuestionList.prototype.reset = function()
{
	this.current = 0;
};

// Function for moving to next question
QuestionList.prototype.nextQuestion = function()
{
	this.current += 1;
};

// Function for fetching the current question
QuestionList.prototype.fetchCurrentQuestion = function()
{
	return this.questions[this.current];
};


// Creates newObj 'quiz' from (class/obj) 'QUESTIONS' prototype.
var quiz = new QuestionList(QUESTIONS);