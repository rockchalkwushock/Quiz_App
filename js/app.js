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


// ####################################################
/* -------------------- Classes -------------------- */
// ####################################################


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
	$('#btn_start').show();							// button for user to leave Welcome Page & Start Game
	console.log('start game btn visible');
	$('#quiz_container').hide();					// button for user to start New Game
	console.log('quiz container hidden');
	
	$('#btn_start').click(function()
	{
		$('#welcome').hide();
		console.log('welcome page fades out');
		$('#btn_start').hide();
		console.log('start game btn fades out');
		$('#quiz_container').show()
		console.log('quiz container fades in');
		populateForm();
	});
};

function populateForm()
{
	$('#questionNum').text(/* obj.q_num */);
        $('#quiz_form').text('');
        $('#quiz_form').append('<h2>' + 'gibberish'/* obj.question */ + '</h2>');
        $('#quiz_form').append("<input type='radio' value='0' name='answer'><span>" + 1/* obj.answer[0] */ + "</span><br/>");
        $('#quiz_form').append("<input type='radio' value='1' name='answer'><span>" + 2/* obj.answer[1] */ + "</span><br/>");
        $('#quiz_form').append("<input type='radio' value='2' name='answer'><span>" + 3/* obj.answer[2] */ + "</span><br/>");
        $('#quiz_form').append("<input type='radio' value='3' name='answer'><span>" + 4/* obj.answer[3] */ + "</span>");
}


// ####################################################
/* ---------------- Sibling Function --------------- */
// ####################################################


















