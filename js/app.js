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

//var counter = 0;																																// This will count how many questions have been answered.
var userGuess = $('input[name=answer]:checked').val(); 													// Variable represents the radio button value from user's selection.
var userFeedback = $('#userFeedback_container')																	// Variable represents the user feedback from processed selection.
var myQuestions;																																// New Object created from the prototype of object 'QuizBank'.
var kansasScore = 0;																														// Placeholder for winning team score.
var mizzouScore = 0;																														// Placeholder for losing team score.

// ##############################################################
/* -------------------- Classes & Objects -------------------- */
// ##############################################################



// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

$(document).ready(initLoad);

// #######################################################
/* ----------------- initLoad Function ---------------- */
// #######################################################
function initLoad()
{
	// console.log('page load');
	welcome();
};

// ######################################################
/* ----------------- welcome Function ---------------- */
// ######################################################

function welcome()
{
	$('#welcome').show();																													// div containing Welcome Page and pics possibly intro video
	// console.log('welcome page visible');
	$('#btn_start').show();																												// button for user to leave Welcome Page & Start Quiz
	// console.log('start quiz btn visible');
	$('#quiz_container').hide();																									// contains quiz form
	// console.log('quiz container hidden');
	$('#scoreboard_container').hide();																						// contains scoreboard that tracks user score during quiz
	// console.log('scoreboard container hidden');
	$('#highscore_container').hide();																							// contains high score upon completing quiz
	// console.log('highscore container hidden');
	$('#userFeedback_container').hide();																					// contains user feedback to answer (pop up fades)
	// console.log('user feedback container hidden');


	$('#btn_start').click(function()
	{
		$('#welcome').hide();
		// console.log('welcome page hidden');
		$('#quiz_container').show()
		// console.log('quiz container visible');
		runGame();
	});
};

// ######################################################
/* ----------------- runGame Function ---------------- */
// ######################################################

function runGame()
{
	console.log('running game');
	populateForm();																																// Appends question number, radio buttons, & answers to form in index.html.
	checkUsersAnswer();
}

// ###########################################################
/* ----------------- populateForm Function ---------------- */
// ###########################################################

function populateForm()
{
	myQuestions = new QuestionList(QuizBank);																			// Creates new object 'myQuestions' from the prototype of object 'QuizBank'.
  myQuestions.fetchCurrentQuestion();																						// Fetches current question in array (object) 'QuizBank'.
};

// ###############################################################
/* ----------------- checkUsersAnswer Function ---------------- */
// ###############################################################

function checkUsersAnswer()
{
  $('#btn_submit').click(function()
  {
		if (myQuestions.currentQuestion !== undefined)															// This will keep the quiz from continuing to iterate through the array after it's data is all used.
		{
			userGuess=$('input:checked').val();
			console.log(userGuess);
			if (userGuess == undefined)																								// User did not select an option.
	    {
	      // no input from user
	      alert("You must pick an answer!");
	    }
			else if(userGuess == myQuestions.currentQuestion.correctAnswerIndex)			// User's guess matches correctAnswerIndex.
	    {
	      // correct answer
				userFeedback.text("Great Job! That's the correct answer!").fadeIn(1000);// Prompt user with positive feedback by displaying in div #userFeedback
	      userFeedback.fadeOut(1000);																							// Fade prompt out.
	      kansasScore++;																													// Iterate Kansas Score by 1.
	      $('.kansas').text(kansasScore);																					// Print iteration to .kansas in index.html.
				nextQuestion();																													// Advance to next question.
	    }
	    else if (userGuess != myQuestions.currentQuestion.correctAnswerIndex)			// User's guess does not match correctAnswerIndex.
	    {
	      // not correct answer
				userFeedback.text("You must be from Missouri...").fadeIn(1000);					// Prompt user with negative feedback by displaying in div #userFeedback
				userFeedback.fadeOut(1000);																							// Fade prompt out.
				mizzouScore++;																													// Iterate Mizzou Score by 1.
				$('.mizzou').text(mizzouScore);																					// Print iteration to .mizzou in index.html.
				nextQuestion();																													// Advance to next question.
	    }
		}

  })
};

// ###########################################################
/* ----------------- nextQuestion Function ---------------- */
// ###########################################################

function nextQuestion()
{
	myQuestions.nextIndex();																							      	// Iterate +1 in QuizBank array.
	myQuestions.fetchCurrentQuestion();																				    // Fetch next question in QuizBank array.
};

function resetForm()
{

};

// function counter()
// {
// 	counter++;
// };

// function scoreBoard()
// {
//
// };



function highScore()
{
	$('#highscore_container').show();
	$('#quiz_container').hide();
	$('#welcome').hide();
	newGame();
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
