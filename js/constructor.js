// ########################################
/*
*	Table of Contents
*	1)	Constructor Function
*			a)	QuestionList( )
*	2)	Prototypes
*			a)	.reset( )
*			b)	.nextIndex( )
*			c)	.fetchCurrentQuestion( )
*			d)	.shuffle( )
*/
// ########################################

/*
 *	This .js file contains the constructor function responsible for creating new objects.
 *	QuestionList( ) is the constructor function.
 *	.reset( ) is the prototype function responsible for reseting the from when the user clicks the New Game button.
 *	.nextIndex( ) is the prototype function responsible for advancing in the array 'QuizBank'.
 *	.fetchCurrentQuestion( ) is the prototype function that will yield the question & corresponding answers assembled with radio buttons to the form in index.html.
 *	.shuffle( ) is the prototype function responsible for first scrambling the answer[ ] in each question and second scrambling the QuizBank[ ].
 */

 // ###########################################################
 /* ----------------- QuestionList Function ---------------- */
 // ###########################################################

function QuestionList(questions)																								// Constructor function for creating new objects from QuizBank[ ].
{
	this.current = 0;
	this.questions = questions;																										// QuizBank[ ] will be passed as a parameter to QuestionList( )
};																																							// this. = QuizBank[ ]

// #####################################################
/* ----------------- .reset Function ---------------- */
// #####################################################

QuestionList.prototype.reset = function()																				// Function for resetting QuizBank[ ].
{
	this.current = 0;
};

// #########################################################
/* ----------------- .nextIndex Function ---------------- */
// #########################################################

QuestionList.prototype.nextIndex = function()																		// Function for indexing to next object in QuizBank[ ].
{
	// console.log("Moving to next question in array QuizBank[ ].");
	this.current += 1;																														// Increment by +1 in QuizBank[ ].
	// console.log("Position in array QuizBank[ ]: " + this.current);
};

// ####################################################################
/* ----------------- .fetchCurrentQuestion Function ---------------- */
// ####################################################################

QuestionList.prototype.fetchCurrentQuestion = function()												// Function for fetching the current question(object) in QuizBank[ ].
{
	if(this.current < this.questions.length)																			// Statement says if our current number of object we are on is less than,
	{																																							// the total lenght of QuizBank[ ] then run the following code.
		this.currentQuestion =  this.questions[this.current];												// Access the total length of QuizBank[ ] at current object.

			// console.log('Current question number: ' + this.currentQuestion.id);
					$('#quiz_form .container').text('');																	// Keeps previous Q&A's from staying visible on the form.
	        $('#quiz_form .container').append('<h2> #' + (this.current + 1) + ": " + this.currentQuestion.text/* QuizBank[ ].text */ + '</h2>');
	        // console.log('question');
	        $('#quiz_form .container').append("<input type='radio' value='"+this.currentQuestion.answers[0].id+"' name='answer'><span>" + this.currentQuestion.answers[0].name/* QuizBank[ ].answer[0].name */ + "</span><br/>");
	        // console.log('answer1');
	        $('#quiz_form .container').append("<input type='radio' value='"+this.currentQuestion.answers[1].id+"' name='answer'><span>" + this.currentQuestion.answers[1].name/* QuizBank[ ].answer[1].name */ + "</span><br/>");
	        // console.log('answer2');
	        $('#quiz_form .container').append("<input type='radio' value='"+this.currentQuestion.answers[2].id+"' name='answer'><span>" + this.currentQuestion.answers[2].name/* QuizBank[ ].answer[2].name */ + "</span><br/>");
	        // console.log('answer3');
	        $('#quiz_form .container').append("<input type='radio' value='"+this.currentQuestion.answers[3].id+"' name='answer'><span>" + this.currentQuestion.answers[3].name/* QuizBank[ ].answer[3].name */ + "</span><br/>");
	        // console.log('answer4');
	        $('#quiz_form .container').append("<input type='radio' value='"+this.currentQuestion.answers[4].id+"' name='answer'><span>" + this.currentQuestion.answers[4].name/* QuizBank[ ].answer[4].name */ + "</span>");
	        // console.log('answer5');
					return true;
	}
	else 																																					// When .current is no longer thess than the length of QuizBank[ ], run this code.
	{
			return false;
	}
};

// #######################################################
/* ----------------- .shuffle Function ---------------- */
// #######################################################

QuestionList.prototype.shuffle = function()																			// Shuffle function for randomizing BOTH elements of QuizBank[ ] & answers[ ].
{
  var input = this.questions;                                                   // Variable input will point to our array QuizBank[ ].

  // Go through all objects of QuizBank[ ].
  for (var j = 0; j < input.length; j++)																				// Will iterate through all objects in QuizBank[ ], scrambling answer[ ] in each object.
  {
      // Scramble answer[ ].
      var answers = input[j].answers;																						// Variable answers will point to answers[ ] inside of whatever current object j is pointing to in QuizBank[ ].
      // console.log(answers);
      for (var i = answers.length - 1; i >= 0; i--)                             // The variable i represents the current element in answers[ ],
      {                                                                         // we are starting at the end of the array (answers[4]) and decrementing.
        var randomIndex = Math.floor(Math.random()*(i+1));                     	// Randomization code.
        var itemAtIndex = answers[randomIndex];                                 // Randomly accesses an element in answers[ ], preceding (& including), where i currently sits in the array;
																																								// i.e. if i = answers[4] 0-4 are possible random index points. i (current element) can retain the same position.
        answers[randomIndex] = answers[i];                                      // Whatever i was at it's current position in the array, swap places with the randomly chosen element (or remain the same).
        answers[i] = itemAtIndex;                                               // This is the swap for i(current element) for random value itemAtIndex, (i.e. a to z & z to a) or (i = i if no change).
      };
  };

  // Scramble QuizBank[ ].
  for (var i = input.length - 1; i >= 0; i--)                                   // The variable i represents the current element in QuizBank[ ],
  {                                                                             // we are starting at the end of the array (QuizBank[14]) and decrementing.
    var randomIndex = Math.floor(Math.random()*(i+1));                          // Randomization code.
    var itemAtIndex = input[randomIndex];                                       // Randomly accesses an element in QuizBank[ ], preceding (& including), where i currently sits in the array;
																																								// i.e. if i = QuizBank[14] 0-14 are possible random index points. i (current element) can retain the same position.
    input[randomIndex] = input[i];                                              // Whatever i was at it's current position in the array, swap places with the randomly chosen element (or remain the same).
    input[i] = itemAtIndex;                                                     // This is the swap for i(current element) for random value itemAtIndex, (i.e. a to z & z to a) or (i = i if no change).
  }

  return input;                                                                 // return the scrambled answers[ ] for all 14 objects of QuizBank[ ] as well as scrambled order of objects in QuizBank[ ].
}
