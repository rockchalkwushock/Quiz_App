// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*			a) Classes
*			b) Objects
*	2)	Parent Function
*	4)	Child Functions
*			a) initLoad( ) 
*			b) newGame( )
*			c) gameRunning( ) 
*	5)	Sibiling Functions
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

var Questions = function(question_one, question_two, question_three, question_four)
{
	this.question_one = question_one;
	this.question_two = question_two;
	this.question_three = question_three;
	this.question_four = question_four;
	this.answer = function()
	{
		
	}
};


// ####################################################
/* -------------------- Objects -------------------- */
// ####################################################

var questionArray = 
[
	// Question #1
	{
		question: 1,
		text: "Who is the winningest coach at KU?",
		options: ['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'],
		facts: "Bill Self is 372-82 (.822) during his 14 years at the helm of Kansas.",
		img:
		correct: "Bill Self",
	},
	// Question #2
	{
		question: 2,
		text: "Who is the first coach at Kansas?",
		options: ['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'],
		facts: "Dr. James Naismith was the inventor of the game of basketball and sadly the only losing coach in KU history.",
		img:
		correct: "James Naismith",
	},
	// Question #3
	{
		question: 3,
		text: "What year was Allen Fieldhouse built?",
		options: ['1955', '1952', '1988', '2008', '2003'],
		facts: "Named after long time coach Phog Allen this is the winningest building in all of sports and the Mecca of basketball.",
		img:
		correct: "1955",
	},
	// Question #4
	{
		question: 4,
		text: "Where did Kansas play before Allen Fieldhouse was built?",
		options: ['Hoch Auditorium', 'Budig Hall', 'Memorial Stadium', 'Allen Fieldhouse West', 'Madison Square Garden'],
		facts: "Hoch Auditorium was struck by lightning in 1991. Only the lobby and limestone facade were spared. It would later become known as Budig Hall.",
		img:
		correct: "Hoch Auditorium",
	},
	// Question #5
	{
		question: 5,
		text: "What was the original chant?",
		options: ['Rah, Rah, Jayhawk, KU', '', '', '', ''],
		facts: "Bailey's version was 'Rah, Rah, Jayhawk, KU' repeated three times. The rahs were later replaced by 'Rock Chalk,'' a transposition of chalk rock, the name for the limestone outcropping found on Mount Oread, site of the Lawrence campus.",
		img:
		correct: "Rah, Rah, Jayhawk, KU",
	},
	// Question #6
	{
		question: 6,
		text: "When was the Jayhawks last national title won?",
		options: ['2008', '1988', '1952', '2003', '2012'],
		facts: "In one of the greatest NCAA Title games to date the Jayhawks stormed back from 60-51 with two minutes left. Mario Chalmers triple with 2.1 seconds left sent the game to overtime where the Jayhawks would win 75-68 over the Memphis Tigers.",
		img:
		correct: "2008",
	},
	// Question #7
	{
		question: 7,
		text: "Who wrote the famous Rock Chalk Chant?",
		options: ['E.H.S. Bailey', 'Phog Allen', 'Bill Self', 'James Naismith', 'Kanye West'],
		facts: "In 1920 at the Olympic Games the King of Belgium asked for a typical American college yell. The athletes agreed on the KU's Rock Chalk and rendered it for His Majesty.",
		img:
		correct: "E.H.S. Bailey",
	},
	// Question #8
	{
		question: 8,
		text: "Who was known as 'The Stilt'?",
		options: ['Wilt Chamberlain', 'Sherron Collins', 'Jacque Vaughn', 'Raef LaFrentz', 'Matt Klienmann'],
		facts: "The 'Big Dipper' as his friends called him because of always having to dip his head to go through doorways is the only player in the NBA to ever scroe over 100 points in a game.",
		img:
		correct: "Wilt Chamberlain",
	},
	// Question #9
	{
		question: 9,
		text: "Who is Allen Fieldhouse named after?",
		options: ['Alan the Maintenance Guy', 'Phog Allen', 'Woody Allen', 'Tim Allen', 'Ray Allen'],
		facts: "Then the greatest coach of all time at Kansas, Phog Allen is a pinnacle in Jayhawk history and folklore.",
		img:
		correct: "Phog Allen",
	},
	// Question #10
	{
		question: 10,
		text: "What banner hangs at the north wall of Allen Fieldhouse?",
		options: ['Pay Heed', 'Retired Numbers', 'Conference Titles', 'Kansas Jayhawks', 'Burn Misery to the ground!'],
		facts: "The orignial Pay Heed banner constructed out of dormitory shower curtains by a group of students before a late-season game against the Duke Blue Devils in 1988. It is on display in the Booth Family Hall of Athletics Museum.",
		img:
		correct: "Pay Heed",
	},
	// Question #11
	{
		question: 11,
		text: "Who is the name of the court?",
		options: ['Naismith Court', 'Phog Allen Court', "Roy's Floor", 'Bill Self Court', "Judge Judy's Court"],
		facts: ".",
		img:
		correct: "Naismith Court",
	},
	// Question #12
	{
		question: 12,
		text: "Who hit the game tying shot in the 2008 National Title game?",
		options: ['Mario Chalmers', 'Danny Manning', 'Sherron Collins', 'Jo Jo White', 'Brad Witherspoon'],
		facts: "This time around it was Mario's Miracle that had the Jayhawks cutting down the nets in April.",
		img:
		correct: "Mario Chalmers",
	},
	// Question #13
	{
		question: 13,
		text: "Who is the Jayhawks bitter rival?",
		options: ['Missouri Tigers', 'Kansas State Wildcats', 'Iowa State Hawkeyes', 'Kentucky Wildcats', 'Kanye West'],
		facts: "The hate between Kansas & Missouri's bitter rival spans all the way back to the days of the Bleeding Kansas & John Brown. Mention Quantrill's Raid in Lawrence if you want to see someone's blood boil.",
		img:
		correct: "Missouri Tigers",
	},

	// Question #14
	{
		question: 14,
		text: "What was the rivalry between Kansas & Missouri dubbed?",
		options: ['The Border War', 'The Sunflower Showdown', 'The Iron Bowl', 'The Civil War', 'The Super Bowl'],
		facts: "The oldest rivalry west of the Mississippi (1907). The Jayhawks & Tigers met 267 times until Misery decided to leave for the SEC, good to note though KU leads the rivalry 172-95.",
		img:
		correct: "The Border War",
	},
	// Question #15
	{
		question: 15,
		text: "__________ & the Miracles?",
		options: ['Danny Manning', 'Mario Chalmers', 'Tyler Self', 'Nick Collison', 'Clyde Lovellette'],
		facts: "The 8 seed team that cut down the nets in 88' against the same Oklahoma Sooners that beat them twice in the regular season.",
		img:
		correct: "Danny Manning",
	},
	// Question #16
	{
		question: 16,
		text: "Which Jayhawk was the first ever to go as the #1 NBA Draft Pick?",
		options: ['Andrew Wiggins', 'Paul Pierce', 'Nick Collison', 'Wilt Chamberlain', 'Mario Chalmers'],
		facts: "Wiggins went #1 to the Cleveland Cavaliers to then be traded for Kevin Love to the Minnesota Timberwolves where he'd become Rookie of the Year.",
		img:
		correct: "Andrew Wiggins",
	},
	// Question #17
	{
		question: 17,
		text: "Where is Allen Fieldhouse West?",
		options: ['Manhattan, Kansas', 'The westside of Lawrence', 'Los Angeles, California', 'Madison Square Garden', 'Lexington, Kentucky'],
		facts: "Bramlage Coliseum or Allen Fieldhouse West as it is known had not known of a home victory against the Jayhawks for the first 24 years it was open until Michael Beasley and Co. won in 2008.",
		img:
		correct: "Manhattan, Kansas",
	},
	// Question #18
	{
		question: 18,
		text: "What do KU fans do at the conclusion of home wins?",
		options: ['Wave the Wheat', 'Storm the Court', 'Streak through the Quad', 'Sacrifice opposing team fans to the Phog', 'Rock Chalk Chant'],
		facts: "Waving the Wheat .",
		img:
		correct: "Wave the Wheat",
	},
	// Question #19
	{
		question: 19,
		text: "How many Big 12 titles has KU won straight?",
		options: ['12', '9', '13', '4', '88'],
		facts: "One win away from tying Wooden's UCLA Bruin's record 13 straight.",
		img:
		correct: "12",
	},
	// Question #20
	{
		question: 20,
		text: "Who is the winningest coach at KU?",
		options: ['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'],
		facts: "Bill Self is 372-82 (.822) during his 14 years at the helm of Kansas.",
		img:
		correct: "Bill Self",
	},
]

// ####################################################
/* ---------------- Parent Function ---------------- */
// ####################################################

document.ready();

// ####################################################
/* ----------------- Child Function ---------------- */
// ####################################################



// ####################################################
/* ---------------- Sibling Function --------------- */
// ####################################################




















