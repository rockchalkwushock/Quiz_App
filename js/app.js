// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*	2)	Parent Function
*	3)	initLoad Function
*	4)	welcome Function
*	5)	buttonAction Function
*	6)	populateForm Function
*	7)	checkUsersAnswer Function
*	8)	nextQuestion Function
*	9)	highScore Function
*	10)	newGame Function
* 11)	resetForm Function
* 12)	scoreBoard Function
* 13) takeInNames Function
* 14) dataToTable Function
* 15) validateInfoForm Function
*/

/*
      Unresolved Issues ()
      1)
*/


// ###########################################################
/* ---------- Initialization of Global Variables ---------- */
// ###########################################################

var first_name = $('#firstname_input');																					// Variable represents the input value for user's first name.
var last_name = $('#lastname_input');																						// Variable represents the input value for user's last name.
var input = $('input[name=answer]:checked');        												    // Variable represents the radio button value from user's selection.
var userInput;                                                                  // Variable represents the stored radio button value as a string.
var userGuess;                                                                  // Variable represents the stored radio button value as an integer.
var userFeedback = $('#userFeedback_container');																// Variable represents the user feedback from processed selection.
var myQuestions;																																// Declare new object created from the prototype of object 'QuizBank'.
var kansasScore = 0;																														// Placeholder for winning team score.
var mizzouScore = 0;																														// Placeholder for losing team score.
var delay	= 1500;																																// 1.5 second delay from last user feedback prompt to highscore_container becoming visible.
var current_num = 16;																														// Total number of questions in the quiz.


// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

$(document).ready(initLoad);

// #######################################################
/* ----------------- initLoad Function ---------------- */
// #######################################################
function initLoad()                                                             // Runs the initial load of content to page.
{
	// console.log('page load');
	welcome();                                                                    // Calls welcome function.
	takeInNames();																																// Calls takeInNames function.
	buttonAction();                                                               // Calls buttonAction function.
};

// ######################################################
/* ----------------- welcome Function ---------------- */
// ######################################################

function welcome()
{
	$('#welcome').show();																													// Shows Welcome Page.
	// console.log('welcome page visible');
	$('#btn_start').show();																												// Shows button on Welcome Page that will start the quiz.
	// console.log('start quiz btn visible');
	$('#quiz_container').hide();																									// Hides the quiz_container.
	// console.log('quiz container hidden');
	$('#highscore_container').hide();																							// Hides the highscore_container.
	// console.log('highscore container hidden');
	$('#userFeedback_container').hide();																					// Hides the userFeedback_container.
		// console.log('user feedback container hidden');


	$('#btn_start').click(function()
	{
		$('#welcome').hide();                                                       // Hides Welcome Page.
		// console.log('welcome page hidden');
		$('#quiz_container').show()                                                 // Shows the quiz_container.
		// console.log('quiz container visible');
		populateForm();                                                             // Call populateForm function.
	});
};

// ###########################################################
/* ----------------- buttonAction Function ---------------- */
// ###########################################################

function buttonAction()                                                         // Handles submission of form upon event.
{
	$('#quiz_form').submit(function(event)
	{
		//console.log('in submit');
		event.preventDefault();

    // console.log(typeof input);
		userInput = input.val();                                                    // Takes in user's guess and stores as userInput.
    // console.log(typeof userInput);
    userGuess = parseInt(userInput);                                            // Takes userInput and converts from string to integer.
		// console.log(typeof userGuess);
		checkUsersAnswer();                                                         // Calls checkUsersAnswer function.
	})
};

// ###########################################################
/* ----------------- populateForm Function ---------------- */
// ###########################################################

function populateForm()                                                         // Uses the contructor function & prototypes in constructors.js to build & append form content.
{
  // console.log('running game');
	myQuestions = new QuestionList(QuizBank);																			// Creates new object 'myQuestions' from the prototype of object 'QuizBank'.
	myQuestions.shuffle()																													// Randomizes the order of the array holding the questions.
  myQuestions.fetchCurrentQuestion();																						// Fetches current question in array (object) 'QuizBank'.
	$('.current_q').text(current_num);
};

// ###############################################################
/* ----------------- checkUsersAnswer Function ---------------- */
// ###############################################################

function checkUsersAnswer()                                                     // Function handles the validation checks of the user's input or lack there of.
{
			userGuess=$('input[name=answer]:checked').val();
			// console.log(userGuess);
			if (userGuess == undefined)																								// User did not select an option.
	    {
	      // no input from user
	      alert("You must pick an answer!");
	    }
			else if(userGuess == myQuestions.currentQuestion.correctAnswerIndex)			// User's guess matches correctAnswerIndex.
	    {
	      // correct answer
				userFeedback.text("Great Job! That's the correct answer!").fadeIn(750);	// Prompt user with positive feedback by displaying in div #userFeedback
	      userFeedback.fadeOut(750);																							// Fade prompt out.
	      kansasScore++;																													// Iterate Kansas Score by 1.
	      $('.kansas').text(kansasScore);																					// Print iteration to .kansas in index.html.
				nextQuestion();																													// Calls nextQuestion function.
	    }
	    else if (userGuess != myQuestions.currentQuestion.correctAnswerIndex)			// User's guess does not match correctAnswerIndex.
	    {
	      // not correct answer
				userFeedback.text("You must be from Missouri...").fadeIn(750);					// Prompt user with negative feedback by displaying in div #userFeedback
				userFeedback.fadeOut(750);																							// Fade prompt out.
				mizzouScore++;																													// Iterate Mizzou Score by 1.
				$('.mizzou').text(mizzouScore);																					// Print iteration to .mizzou in index.html.
				nextQuestion();																													// Calls nextQuestion function.
	    }
};

// ###########################################################
/* ----------------- nextQuestion Function ---------------- */
// ###########################################################

function nextQuestion()                                                         // Uses the constructor function & prototypes in constructors.js to index the array and fetch next data set.
{
	myQuestions.nextIndex();																							      	// Iterate +1 in QuizBank array.
	if(myQuestions.fetchCurrentQuestion() == false)																// Fetch next question in QuizBank array until argument yields FALSE.
	{
		setTimeout(function()																												// Timeout function for adding 1.5 second delay between the user feedback prompt and highscore_container being visible.
		{
  		highScore();																															// Calls highScore function.
		}, delay);
	}
	current_num--;																																// Before moving to the next question decrement the number of questions left in the quiz.
	// console.log(current_num);
	$('.current_q').text(current_num);																						// Print the iteration to .current_q in index.html.
};

// ########################################################
/* ----------------- highScore Function ---------------- */
// ########################################################

function highScore()                                                            // Alternates display between quiz_container & highscore_container. Yields 'New Game' button.
{
	dataToTable()																																	// Calls dataToTable function.
	$('#highscore_container').show();                                             // Shows highscore_container.
	$('#quiz_container').hide();                                                  // Hides quiz_container.
	$('#welcome').hide();                                                         // Hides Welcome Page.
	newGame();                                                                    // Calls newGame function.
};

// ######################################################
/* ----------------- newGame Function ---------------- */
// ######################################################

function newGame()                                                              // Alternates display between highscore_container & quiz_container. Resets the form and runs the game.
{
	$('#btn_new').click(function()                                                // Event handler for user interaction with 'New Game' button.
	{
    $('#highscore_container').hide();                                           // Hides highscore_container.
		$('#quiz_container').show();                                                // Shows quiz_container.
    resetForm();                                                                // Calls resetForm function.
		populateForm();                                                             // Calls populateForm function.
  });
};

// ########################################################
/* ----------------- resetForm Function ---------------- */
// ########################################################

function resetForm()																														// Resets form data.
{
	kansasScore = 0;																															// Resets kansasScore variable to 0.
	mizzouScore = 0;
	current_num = 16;																															// Resets mizzouScore variable to 0.
	$('.kansas').text(0);																													// Resets text value in .kansas to 0.
	$('.mizzou').text(0);																													// Resets text value in .mizzou to 0.
	myQuestions.reset();																													// Resets 'this.current' position in array 'QuizBank' to 0.
	myQuestions.shuffle();
	myQuestions.fetchCurrentQuestion();																						// Fetches first element in array stored in 'this.current' (question #1, stored at postion [0] in array 'QuizBank').
};

// ##########################################################
/* ----------------- takeInNames Function ---------------- */
// ##########################################################

function takeInNames()																													// Takes in data from #info_form in index.html
{
	$('#info_form').submit(function(event)
	{
		event.preventDefault();

		f_name = first_name.val();																									// Stores user's first name as f_name variable.
		l_name = last_name.val();																										// Stores user's last name as l_name variable.
		console.log(f_name);
		console.log(l_name);
		first_name.val('');																													// Clears input field.
		last_name.val('');
		validateInfoForm();																													// Calls validateInfoForm function.
	})
};

// ###############################################################
/* ----------------- validateInfoForm Function ---------------- */
// ###############################################################

function validateInfoForm()																											// Runs validation checks against user input for info_form.
{
	if (document.form.name.value == undefined)																		// If the user's input is undefined (no entry) alert them to enter their name.
	{
		alert("Enter your first & last name!");
		document.form.name.focus();
		return false;
	};
	if (!/^[a-zA-Z]*$/g.test(document.form.name.value) )													// If the user's input is anything but alphabetic characters alert them.
	{
		alert("Invalid characters!");
		document.form.name.focus();
		return false;
	};
};

// ###########################################################
/* ----------------- namesToTable Function ---------------- */
// ###########################################################

function dataToTable()																													// Sends user's name inputs & score to the table in #highscore_container.
{
	$('.first').text(f_name);
	// console.log(f_name);
	$('.last').text(l_name);
	// console.log(l_name);
	$('.score').text(kansasScore);
	// console.log(kansasScore);
};
