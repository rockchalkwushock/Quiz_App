/*
 *	This .js file contains the data for the Quizz App to access.
 *	QuizBank is our Object to point to when searching for specific question number, questions, answers, and the correct answer.
 *	All answers are set to index 0 in the array answers[].
 */

 var QuizBank =
 [
  {																																							// Address in Array: QuizBank[0].
 	 id: 1,
 	 text: "Who is the winningest coach at KU?",
 	 answers:
 	 [																																						// use key-value pairs 0: 'Bill Self' to randomize order and still get correctAnswerIndex
 			 {id: 0, name: 'Bill Self'},							  																				// Address to access from Global: QuizBank[0]answers[0],
 			 {id: 1, name: 'Phog Allen'},
 			 {id: 2, name: 'Larry Brown'},
 			 {id: 3, name: 'James Naismith'},
 			 {id: 4, name: 'Roy Williams'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 2,
 	 text: "Who is the first coach at Kansas?",
 	 answers:
 	 [
 			 {id: 0, name: 'James Naismith'},
 			 {id: 1, name: 'Phog Allen'},
 			 {id: 2, name: 'Larry Brown'},
 			 {id: 3, name: 'Bill Self'},
 			 {id: 4, name: 'Roy Williams'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 3,
 	 text: "What year was Allen Fieldhouse built?",
 	 answers:
 	 [
 			 {id: 0, name: '1955'},
 			 {id: 1, name: '1952'},
 			 {id: 2, name: '1988'},
 			 {id: 3, name: '2008'},
 			 {id: 4, name: '2003'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 4,
 	 text: "Where did Kansas play before Allen Fieldhouse was built?",
 	 answers:
 	 [
 			 {id: 0, name: 'Hoch Auditorium'},
 			 {id: 1, name: 'Budig Hall'},
 			 {id: 2, name: 'Memorial Stadium'},
 			 {id: 3, name: 'Allen Fieldhouse West'},
 			 {id: 4, name: 'Madison Square Garden'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 5,
 	 text: "When was the Jayhawks last national title won?",
 	 answers:
 	 [
 			 {id: 0, name: '2008'},
 			 {id: 1, name: '1988'},
 			 {id: 2, name: '1952'},
 			 {id: 3, name: '2003'},
 			 {id: 4, name: '2012'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 6,
 	 text: "Who wrote the famous Rock Chalk Chant?",
 	 answers:
 	 [
 			 {id: 0, name: 'E.H.S. Bailey'},
 			 {id: 1, name: 'Phog Allen'},
 			 {id: 2, name: 'Bill Self'},
 			 {id: 3, name: 'James Naismith'},
 			 {id: 4, name: 'Kanye West'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 7,
 	 text: "Who was known as 'The Stilt'?",
 	 answers:
 	 [
 			 {id: 0, name: 'Wilt Chamberlain'},
 			 {id: 1, name: 'Sherron Collins'},
 			 {id: 2, name: 'Jacque Vaughn'},
 			 {id: 3, name: 'Raef LaFrentz'},
 			 {id: 4, name: 'Matt Klienmann'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 8,
 	 text: "Who is Allen Fieldhouse named after?",
 	 answers:
 	 [
 			 {id: 0, name: 'Phog Allen'},
 			 {id: 1, name: 'Alan the Maintenance Guy'},
 			 {id: 2, name: 'Woody Allen'},
 			 {id: 3, name: 'Tim Allen'},
 			 {id: 4, name: 'Ray Allen'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 9,
 	 text: "What banner hangs at the north wall of Allen Fieldhouse?",
 	 answers:
 	 [
 			 {id: 0, name: 'Pay Heed'},
 			 {id: 1, name: 'Retired Numbers'},
 			 {id: 2, name: 'Conference Titles'},
 			 {id: 3, name: 'Kansas Jayhawks'},
 			 {id: 4, name: 'Burn Misery to the ground!'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 10,
 	 text: "Who hit the game tying shot in the 2008 National Title game?",
 	 answers:
 	 [
 			 {id: 0, name: 'Mario Chalmers'},
 			 {id: 1, name: 'Danny Manning'},
 			 {id: 2, name: 'Sherron Collins'},
 			 {id: 3, name: 'Jo Jo White'},
 			 {id: 4, name: 'Brad Witherspoon'}
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
    id: 11,
    text: "Who is the Jayhawks bitter rival?",
    answers:
    [
      {id: 0, name: 'Missouri Tigers'},
      {id: 1, name: 'Kansas State Wildcats'},
      {id: 2, name: 'Iowa State Hawkeyes'},
      {id: 3, name: 'Kentucky Wildcats'},
      {id: 4, name: 'Kanye West'}
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 12,
    text: "What was the rivalry between Kansas & Missouri dubbed?",
    answers:
    [
      {id: 0, name: 'The Border War'},
      {id: 1, name: 'The Sunflower Showdown'},
      {id: 2, name: 'The Iron Bowl'},
      {id: 3, name: 'The Civil War'},
      {id: 4, name: 'The Super Bowl'}
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    text: "__________ & the Miracles?",
    answers:
    [
      {id: 0, name: 'Danny Manning'},
      {id: 1, name: 'Mario Chalmers'},
      {id: 2, name: 'Tyler Self'},
      {id: 3, name: 'Nick Collison'},
      {id: 4, name: 'Clyde Lovellette'}
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 14,
    text: "Which Jayhawk was the first ever to go as the #1 NBA Draft Pick?",
    answers:
    [
      {id: 0, name: 'Andrew Wiggins'},
      {id: 1, name: 'Paul Pierce'},
      {id: 2, name: 'Nick Collison'},
      {id: 3, name: 'Wilt Chamberlain'},
      {id: 4, name: 'Mario Chalmers'}
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 15,
    text: "How many Big 12 titles has KU won straight?",
    answers:
    [
      {id: 0, name: '12'},
      {id: 1, name: '9'},
      {id: 2, name: '13'},
      {id: 3, name: '4'},
      {id: 4, name: '88'}
    ],
    correctAnswerIndex: 0,
  },
 ];
