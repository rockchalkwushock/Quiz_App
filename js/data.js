/*
 *	This .js file contains the data for the Quizz App to access.
 *	QuizBank is our Object to point to when searching for specific question number, questions, answers, and the correct answer.
 *	All answers are set to index 0 in the array answers[].
 */

var QuizBank =
[
	{
		id: 1,
		text: "Who is the winningest coach at KU?",
		answers: ['Bill Self','Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'], // use key-value pairs 0: 'Bill Self' to randomize order and still get correctAnswerIndex
		correctAnswerIndex: 0,
	},
	{
		id: 2,
		text: "Who is the first coach at Kansas?",
		answers: ['James Naismith', 'Phog Allen', 'Larry Brown', 'Bill Self', 'Roy Williams'],
		correctAnswerIndex: 0,
	},
	{
		id: 3,
		text: "What year was Allen Fieldhouse built?",
		answers: ['1955', '1952', '1988', '2008', '2003'],
		correctAnswerIndex: 0,
	},
	{
		id: 4,
		text: "Where did Kansas play before Allen Fieldhouse was built?",
		answers: ['Hoch Auditorium', 'Budig Hall', 'Memorial Stadium', 'Allen Fieldhouse West', 'Madison Square Garden'],
		correctAnswerIndex: 0,
	},
	{
		id: 5,
		text: "When was the Jayhawks last national title won?",
		answers: ['2008', '1988', '1952', '2003', '2012'],
		correctAnswerIndex: 0,
	},
	{
		id: 6,
		text: "Who wrote the famous Rock Chalk Chant?",
		answers: ['E.H.S. Bailey', 'Phog Allen', 'Bill Self', 'James Naismith', 'Kanye West'],
		correctAnswerIndex: 0,
	},
	{
		id: 7,
		text: "Who was known as 'The Stilt'?",
		answers: ['Wilt Chamberlain', 'Sherron Collins', 'Jacque Vaughn', 'Raef LaFrentz', 'Matt Klienmann'],
		correctAnswerIndex: 0,
	},
	{
		id: 8,
		text: "Who is Allen Fieldhouse named after?",
		answers: ['Phog Allen', 'Alan the Maintenance Guy', 'Woody Allen', 'Tim Allen', 'Ray Allen'],
		correctAnswerIndex: 0,
	},
	{
		id: 9,
		text: "What banner hangs at the north wall of Allen Fieldhouse?",
		answers: ['Pay Heed', 'Retired Numbers', 'Conference Titles', 'Kansas Jayhawks', 'Burn Misery to the ground!'],
		correctAnswerIndex: 0,
	},
	{
		id: 10,
		text: "Who hit the game tying shot in the 2008 National Title game?",
		answers: ['Mario Chalmers', 'Danny Manning', 'Sherron Collins', 'Jo Jo White', 'Brad Witherspoon'],
		correctAnswerIndex: 0,
	},
];
