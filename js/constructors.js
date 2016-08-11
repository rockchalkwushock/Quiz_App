/*
 *	This .js file contains the constructor function responsible for creating new objects.
 *	QuestionList() is the constructor function.
 *	reset() is the function responsible for reseting the from when the user clicks the New Game button.
 *	nextQuestion() is the function responsible for advancing in the array(object) 'QuizBank'.
 *	fetchCurrentQuestion is the function that will yield the question & corresponding answers assembled with radio buttons to the form in index.html.
 */


// Constructor function for creating new objects from 'QuizBank'.
function QuestionList(questions)
{
	this.current = 0;
	this.questions = questions;
};

// Function for resetting form.
QuestionList.prototype.reset = function()
{
	this.current = 0;
};

// Function for moving to next question.
QuestionList.prototype.nextIndex = function()
{
	console.log("Moving to next question in array QuizBank.");
	this.current += 1;
	console.log("Position in array QuizBank: " + this.current);
};

// Function for fetching the current question in the array(object) 'QuizBank'.
QuestionList.prototype.fetchCurrentQuestion = function()
{
	if(this.current < this.questions.length)
	{
		this.currentQuestion =  this.questions[this.current];

			console.log('Current question number: ' + this.currentQuestion.id);
					$('#quiz_form .container').text('');
	        $('#quiz_form .container').append('<h2> #' + this.currentQuestion.id/* QuizBank.id */ + ": " + this.currentQuestion.text/* QuizBank.text */ + '</h2>');
	        // console.log('question');
	        $('#quiz_form .container').append("<input type='radio' value='0' name='answer'><span>" + this.currentQuestion.answers[0]/* QuizBank.answer[0] */ + "</span><br/>");
	        // console.log('answer1');
	        $('#quiz_form .container').append("<input type='radio' value='1' name='answer'><span>" + this.currentQuestion.answers[1]/* QuizBank.answer[1] */ + "</span><br/>");
	        // console.log('answer2');
	        $('#quiz_form .container').append("<input type='radio' value='2' name='answer'><span>" + this.currentQuestion.answers[2]/* QuizBank.answer[2] */ + "</span><br/>");
	        // console.log('answer3');
	        $('#quiz_form .container').append("<input type='radio' value='3' name='answer'><span>" + this.currentQuestion.answers[3]/* QuizBank.answer[3] */ + "</span><br/>");
	        // console.log('answer4');
	        $('#quiz_form .container').append("<input type='radio' value='4' name='answer'><span>" + this.currentQuestion.answers[4]/* QuizBank.answer[4] */ + "</span>");
	        // console.log('answer5');
					//quiz_form.button').append(<button type="submit" name="button">Submit</button>)
					return true;
	}
	else
	{
		return false;
	}


};
