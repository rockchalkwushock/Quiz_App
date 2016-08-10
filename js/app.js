// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*	2)	Classes
*	3)	Objects
*	4)	Parent Function
*	5)	Child Functions
*			a)
*			b)
*			c)
*	6)	Sibiling Functions
*			a)
*           b)
*           c)
*/

// ###########################################################
/* ---------- Initialization of Global Variables ---------- */
// ###########################################################

var counter = 0;																																// This will count how many questions have been answered.
var userGuess = $('input:checked').val(); 																			// Stores user's radio value input.
var myQuestions;																																// New Object created from the prototype of object 'QuizBank'.

// ##############################################################
/* -------------------- Classes & Objects -------------------- */
// ##############################################################



// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

$(document).ready(initLoad);

// ####################################################
/* ----------------- Child Function ---------------- */
// ####################################################
function initLoad()
{
	// console.log('page load');
	welcome();
};

function welcome()
{
	$('#welcome').show();							// div containing Welcome Page and pics possibly intro video
	// console.log('welcome page visible');
	$('#btn_start').show();							// button for user to leave Welcome Page & Start Quiz
	// console.log('start quiz btn visible');
	$('#quiz_container').hide();					// contains quiz form
	// console.log('quiz container hidden');
	$('#scoreboard_container').hide();				// contains scoreboard that tracks user score during quiz
	// console.log('scoreboard container hidden');
	$('#highscore_container').hide();				// contains high score upon completing quiz
	// console.log('highscore container hidden');


	$('#btn_start').click(function()
	{
		$('#welcome').hide();
		// console.log('welcome page hidden');
		$('#quiz_container').show()
		// console.log('quiz container visible');
		runGame();
	});
};

function runGame()
{
	console.log('running game');
	populateForm();																																// Appends question number, radio buttons, & answers to form in index.html.
	checkUsersAnswer();
}

function populateForm()
{
	myQuestions = new QuestionList(QuizBank);																			// Creates new object 'myQuestions' from the prototype of object 'QuizBank'.
  myQuestions.fetchCurrentQuestion();																						// Fetches current question in array (object) 'QuizBank'.
};

function checkUsersAnswer()
{
  $('#btn_submit').click(function()
  {
		userGuess=$('input:checked').val();
		console.log(userGuess);
		if (userGuess == undefined)																									// User did not select an option.
    {
      // no input from user
      alert("You must pick an answer!");
    }
		else if(userGuess == myQuestions.currentQuestion.correctAnswerIndex)				// User's guess matches correctAnswerIndex.
    {
      // correct answer
      alert("You guessed correctly!");																					// Prompt user with success.
			nextQuestion();																														// Advance to next question.
    }
    else if (userGuess != myQuestions.currentQuestion.correctAnswerIndex)				// User's guess does not match correctAnswerIndex.
    {
      // not correct answer
      alert("You guessed incorrectly!");																				// Prompt user with failure.
			nextQuestion();																														// Advance to next question.
    }
  })
};

function nextQuestion()
{
	myQuestions.nextIndex();																							      	// Iterate +1 in QuizBank array.
	myQuestions.fetchCurrentQuestion();																				    // Fetch next question in QuizBank array.
};

function resetForm()
{

};

function counter()
{
	counter++;
};

function scoreBoard()
{

};

function highScore()
{
	$('#highscore_container').show();
	$('#quiz_container').hide();
	$('#welcome').hide();
};

function newGame()
{
	$('#btn_new').click(function()
	{
        $('#highscore_container').hide();
        resetForm();
    });
};

// ####################################################
/* ---------------- Sibling Function --------------- */
// ####################################################
