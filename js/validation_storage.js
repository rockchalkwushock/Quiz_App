function checkUsersAnswer(userGuess)
{
	console.log('validating user guess');
	if (q_obj.current_q !== undefined) 																// When quiz is finished this will prevent an error of undefined from the array.
	{
		console.log('did it work?');
		if (userGuess == q_obj.current_q.correctAnswerIndex)						// User's guess matches correctAnswerIndex.
		{
			console.log('you were right!');
			$('#userFeedback').text
			("Great Job! That's the correct answer!").fadeIn(1000);										// Prompt with success.
			$('#userFeedback').fadeOut(1000);
			kansas++;																																	// Increase Kansas section of scoreboard by 1.
			$('#scoreboard_container.kansas').text(kansas);														// Print increase to kansas in scoreboard_container in index.html.
			return true;																															// Condition has returned as TRUE.
		}
		else if (userGuess == undefined)																						// User did not select an option before submitting form.
		{
			console.log('you did not select anything.');
			// no input from user
      alert("You must pick an answer!");
			return false;																															// Condition has returned as FALSE.
		}
		else if (userGuess != q_obj.current_q.correctAnswerIndex) 			// User's guess does not match correctAnswerIndex.
		{
			console.log('you were wrong...failure!');
			$('#userFeedback').text
			("You must be from Missouri...").fadeIn(1000);														// Prompt with failure.
			$('#userFeedback').fadeOut(1000);
			mizzou++;																																	// Increase Mizzou section of scoreboard by 1.
			$('#scoreboard_container.mizzou').text(mizzou);														// Print increase to mizzou in scoreboard_container in index.html.
			return true;																															// Condition has returned as TRUE.
		}
	}
	nextQuestion();																																// Move to next question in array.
	// Old Validation Check
  // $('#btn_submit').click(function()
  // {
	// 	userGuess=$('input:checked').val();
	// 	console.log(userGuess);
	// 	if (userGuess == undefined)																									// User did not select an option.
  //   {
  //     // no input from user
  //     alert("You must pick an answer!");
  //   }
	// 	else if(userGuess == q_obj.current_q.correctAnswerIndex)				// User's guess matches correctAnswerIndex.
  //   {
  //     // correct answer
  //     alert("You guessed correctly!");																					// Prompt user with success.
	// 		nextQuestion();																														// Advance to next question.
  //   }
  //   else if (userGuess != q_obj.current_q.correctAnswerIndex)				// User's guess does not match correctAnswerIndex.
  //   {
  //     // not correct answer
  //     alert("You guessed incorrectly!");																				// Prompt user with failure.
	// 		nextQuestion();																														// Advance to next question.
  //   }
  // })
};
