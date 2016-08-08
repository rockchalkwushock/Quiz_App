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

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

var counter = 0;							// This will count how many questions have been answered.
 
// ##############################################################
/* -------------------- Classes & Objects -------------------- */
// ##############################################################


// ####################################################
/* -------------------- Objects -------------------- */
// ####################################################


// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

$(document).ready(initLoad);

// ####################################################
/* ----------------- Child Function ---------------- */
// ####################################################

function initLoad()
{
	console.log('page load');
	welcome();
};

function welcome()
{
	$('#welcome').show();							// div containing Welcome Page and pics possibly intro video
	console.log('welcome page visible');
	$('#btn_start').show();							// button for user to leave Welcome Page & Start Quiz
	console.log('start quiz btn visible');
	$('#quiz_container').hide();					// contains quiz form
	console.log('quiz container hidden');
	$('#scoreboard_container').hide();				// contains scoreboard that tracks user score during quiz
	console.log('highscore container hidden');
	$('#highscore_container').hide();				// contains high score upon completing quiz
	console.log('highscore container hidden');


	$('#btn_start').click(function()
	{
		$('#welcome').hide();
		console.log('welcome page hidden');
		$('#quiz_container').show()
		console.log('quiz container visible');
		populateForm();
	});
};

function populateForm()
{
	$('#questionNum').text(/* obj.q_num */);
		console.log('question number');
        // $('#quiz_form').text('');
        // console.log('text box cleared');
        $('#quiz_form').append('<h2>' + 'gibberish'/* obj.question */ + '</h2>');
        console.log('question');
        $('#quiz_form').append("<input type='radio' value='0' name='answer'><span>" + 1/* obj.answer[0] */ + "</span><br/>");
        console.log('answer1');
        $('#quiz_form').append("<input type='radio' value='1' name='answer'><span>" + 2/* obj.answer[1] */ + "</span><br/>");
        console.log('answer2');
        $('#quiz_form').append("<input type='radio' value='2' name='answer'><span>" + 3/* obj.answer[2] */ + "</span><br/>");
        console.log('answer3');
        $('#quiz_form').append("<input type='radio' value='3' name='answer'><span>" + 4/* obj.answer[3] */ + "</span>");
        console.log('answer4');
        
};

function getUserAnswer()
{

};

function checkUsersAnswer()
{

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


















