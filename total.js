
// Array of data
var QuizBank =
[
 {																																							// Address in Array: QuizBank[0].
	 id: 1,
	 text: "Who is the winningest coach at KU?",
	 answers:
	 [																																						// use key-value pairs 0: 'Bill Self' to randomize order and still get correctAnswerIndex
			 {0: 'Bill Self'},																												// Address to access from Global: QuizBank[0]answers[0],
			 {1: 'Phog Allen'},
			 {2: 'Larry Brown'},
			 {3: 'James Naismith'},
			 {4: 'Roy Williams'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 2,
	 text: "Who is the first coach at Kansas?",
	 answers:
	 [
			 {0: 'James Naismith'},
			 {1: 'Phog Allen'},
			 {2: 'Larry Brown'},
			 {3: 'Bill Self'},
			 {4: 'Roy Williams'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 3,
	 text: "What year was Allen Fieldhouse built?",
	 answers:
	 [
			 {0: '1955'},
			 {1: '1952'},
			 {2: '1988'},
			 {3: '2008'},
			 {4: '2003'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 4,
	 text: "Where did Kansas play before Allen Fieldhouse was built?",
	 answers:
	 [
			 {0: 'Hoch Auditorium'},
			 {1: 'Budig Hall'},
			 {2: 'Memorial Stadium'},
			 {3: 'Allen Fieldhouse West'},
			 {4: 'Madison Square Garden'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 5,
	 text: "When was the Jayhawks last national title won?",
	 answers:
	 [
			 {0: '2008'},
			 {1: '1988'},
			 {2: '1952'},
			 {3: '2003'},
			 {4: '2012'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 6,
	 text: "Who wrote the famous Rock Chalk Chant?",
	 answers:
	 [
			 {0: 'E.H.S. Bailey'},
			 {1: 'Phog Allen'},
			 {2: 'Bill Self'},
			 {3: 'James Naismith'},
			 {4: 'Kanye West'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 7,
	 text: "Who was known as 'The Stilt'?",
	 answers:
	 [
			 {0: 'Wilt Chamberlain'},
			 {1: 'Sherron Collins'},
			 {2: 'Jacque Vaughn'},
			 {3: 'Raef LaFrentz'},
			 {4: 'Matt Klienmann'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 8,
	 text: "Who is Allen Fieldhouse named after?",
	 answers:
	 [
			 {0: 'Phog Allen'},
			 {1: 'Alan the Maintenance Guy'},
			 {2: 'Woody Allen'},
			 {3: 'Tim Allen'},
			 {4: 'Ray Allen'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 9,
	 text: "What banner hangs at the north wall of Allen Fieldhouse?",
	 answers:
	 [
			 {0: 'Pay Heed'},
			 {1: 'Retired Numbers'},
			 {2: 'Conference Titles'},
			 {3: 'Kansas Jayhawks'},
			 {4: 'Burn Misery to the ground!'}
	 ],
	 correctAnswerIndex: 0,
 },
 {
	 id: 10,
	 text: "Who hit the game tying shot in the 2008 National Title game?",
	 answers:
	 [
			 {0: 'Mario Chalmers'},
			 {1: 'Danny Manning'},
			 {2: 'Sherron Collins'},
			 {3: 'Jo Jo White'},
			 {4: 'Brad Witherspoon'}
	 ],
	 correctAnswerIndex: 0,
 },
];
// Constructor Function
function QuestionList(questions)
{
	this.current = 0;
	this.questions = questions;
};
// Randomization Function
QuestionList.prototype.shuffle = function()                                     // Shuffle function for randomizing elements of an array.
{
  var input = this.questions;                                                   // Will point to our array.

  for (var i = input.length - 1; i >= 0; i--)                                   // The variable i represents the current element in the array,
  {                                                                             // we are starting at the end of the array and decrementing.
    var randomIndex = Math.floor(Math.random()*(i+1));                          // Randomization code.
    var itemAtIndex = input[randomIndex];                                       // Randomly accesses an element in the array preceding (& including) where i currently sits in the array.

    input[randomIndex] = input[i];                                              // Whatever i was at it's current position in the array, swap places with the randomly chosen element.
    input[i] = itemAtIndex;                                                     // This is the swap for i for i @ the random index. (i.e. a to z & z to a)
  }
  return input;                                                                 // return the scrambled array.
}
// Creating New Object
myQuestions = new QuestionList(QuizBank);																				// creates new object called 'myQuestions' from prototype of parameter QuizBank through constructor functon QuestionList.

// Randomizing Array elements
myQuestions.shuffle();																													// shuffles all 10 questions (objects) order in the array.


// Would it be possible to do this:

// Declare QuizBank Array.
// Declare QuestionList constructor.
// Declare .shuffle()
