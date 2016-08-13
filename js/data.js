/*
 *	This .js file contains the data for the Quizz App to access.
 *	QuizBank is our Array of objects to point to when searching for specific id number, questions, answers, and the correct answer (all key-value pairs in each object).
 *	All answers are set to index 0 in the array answers[ ].
 *	The constructor function .shuffle( ) will scramble the order of questions (objects within Quizbank[ ]) and answers (objects within answers[ ].)
 */

 var QuizBank =
 [
  {
 	 id: 1,																																				// Address in Array: QuizBank[0].
 	 text: "Who is the winningest coach at KU?",
   facts: "Bill Self is 372-82 (.822) during his 14 years at Kansas.",          // Facts for user feedback (EXTRA FEATURE).
   img: ,                                                        // Image that will display with fact (EXTRA FEATURE).
 	 answers:
 	 [
 			 {id: 0, name: 'Bill Self'},							  															// Address to access from Global: QuizBank[0].answers[0].
 			 {id: 1, name: 'Phog Allen'},																							// (2) key-value pairs set.
 			 {id: 2, name: 'Larry Brown'},																						// id: value will pair with the scrambled name property so the correct answer can be rendered;
 			 {id: 3, name: 'James Naismith'},																					// instead of looking to the first element in the array[0], it will look for the id: 0.
 			 {id: 4, name: 'Roy Williams'}																						// name: value will display the possible answer to the form for the user to choose.
 	 ],
 	 correctAnswerIndex: 0,
  },
  {
 	 id: 2,
 	 text: "Who is the first coach at Kansas?",
   facts: "Dr. James Naismith was the inventor of the game of basketball and sadly the only losing coach in KU history.",
   img: ,
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
   facts: "Named after long time coach Phog Allen this is the winningest building in all of sports and the Mecca of basketball.",
   img: ,
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
   facts: "Hoch Auditorium was struck by lightning in 1991. Only the lobby and limestone facade were spared. It would later become known as Budig Hall.",
   img: ,
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
   facts: "In one of the greatest NCAA Title games to date the Jayhawks stormed back from 60-51 with two minutes left. Mario Chalmers triple with 2.1 seconds left sent the game to overtime where the Jayhawks would win 75-68 over the Memphis Tigers.",
   img: ,
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
   facts: "In 1920 at the Olympic Games the King of Belgium asked for a typical American college yell. The athletes agreed on the KU's Rock Chalk and rendered it for His Majesty.",
   img: ,
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
   facts: "The 'Big Dipper' as his friends called him because of always having to dip his head to go through doorways is the only player in the NBA to ever scroe over 100 points in a game.",
   img: ,
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
   facts: "Then the greatest coach of all time at Kansas, Phog Allen is a pinnacle in Jayhawk history and folklore.",
   img: ,
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
   facts: "The orignial Pay Heed banner constructed out of dormitory shower curtains by a group of students before a late-season game against the Duke Blue Devils in 1988. It is on display in the Booth Family Hall of Athletics Museum.",
   img: ,
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
   facts: "This time around it was Mario's Miracle that had the Jayhawks cutting down the nets in April.",
   img: ,
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
    facts: "The hate between Kansas & Missouri's bitter rival spans all the way back to the days of the Bleeding Kansas & John Brown. Mention Quantrill's Raid in Lawrence if you want to see someone's blood boil.",
    img: ,
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
    facts: "The oldest rivalry west of the Mississippi (1907). The Jayhawks & Tigers met 267 times until Misery decided to leave for the SEC, good to note though KU leads the rivalry 172-95.",
    img: ,
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
    facts: "The 8 seed team that cut down the nets in 88' against the same Oklahoma Sooners that beat them twice in the regular season.",
    img: ,
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
    facts: "Wiggins went #1 to the Cleveland Cavaliers to then be traded for Kevin Love to the Minnesota Timberwolves where he'd become Rookie of the Year.",
    img: ,
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
    facts: "One win away from being tied with Wooden's UCLA Bruin's record 13 straight.",
    img: ,
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
  {
    id: 16,
    text: "Where is Allen Fieldhouse West located?",
    facts: "Bramlage Coliseum or Allen Fieldhouse West as it is known had not known of a home victory against the Jayhawks for the first 24 years of its existence until Michael Beasley and Co. won in 2008.",
    img: ,
    answers:
    [
      {id: 0, name: 'Manhattan, Kansas'},
      {id: 1, name: 'The westside of Lawrence'},
      {id: 2, name: 'Los Angeles, California'},
      {id: 3, name: 'Madison Square Garden'},
      {id: 4, name: 'Lexington, Kentucky'}
    ],
    correctAnswerIndex: 0,
  },
 ];
