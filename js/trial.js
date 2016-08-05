
// My Constructor Function
// --> The class 'Questions' will run the following function,
// --> passing the key-value pairs as parameters to the function.
var Questions = function(q_num, q_text)
{
	this.q_num = q_num;
	this.q_text = q_text;
};

// My Display Function
// --> This will create a prototype of the class 'Questions'
// --> in which display( ) will print from.
Questions.prototype.display = function()
{
	return this.q_num;
	return this.q_text;
};


// My Objects to be created by my Constructor Function 'Questions'
// --> I declare what the 'new' object will be defined as,
// --> and the constructor function 'Questions' is where all values
// --> for the 'new' object will be passed
var question1 = new Questions(1, "Who is the winningest coach at KU?");
question1.display();
var question2 = new Questions(2, "Who is the first coach at Kansas?");
var question3 = new Questions(3, "What year was Allen Fieldhouse built?");
var question4 = new Questions(4, "Where did Kansas play before Allen Fieldhouse was built?");
/* fix */ var question5 = new Questions(5, "What was the original chant?");
var question6 = new Questions(6, "When was the Jayhawks last national title won?");
var question7 = new Questions(7, "Who wrote the famous Rock Chalk Chant?");
var question8 = new Questions(8, "Who was known as 'The Stilt'?");
var question9 = new Questions(9, "Who is Allen Fieldhouse named after?");
var question10 = new Questions(10, "What banner hangs at the north wall of Allen Fieldhouse?");
/* fix */ var question11 = new Questions(11, "Who is the name of the court?");
var question12 = new Questions(12, "Who hit the game tying shot in the 2008 National Title game?");
var question13 = new Questions(13, "Who is the Jayhawks bitter rival?");
var question14 = new Questions(14, "What was the rivalry between Kansas & Missouri dubbed?");
var question15 = new Questions(15, "__________ & the Miracles?");
var question16 = new Questions(16, "Which Jayhawk was the first ever to go as the #1 NBA Draft Pick?");
/* fix */ var question17 = new Questions(17, "Where is Allen Fieldhouse West?");
var question18 = new Questions(18, "How many Big 12 titles has KU won straight?");
/* fix */ var question19 = new Questions(19, );
/* fix */ var question20 = new Questions(20, );



//$$$$$$$$$$$$$$$$$$$$$$$$


// My Constructor Function
// --> The class 'Answers' will run the following function,
// --> passing the key-value pairs as parameters to the function.
var Answers = function(a_options, a_facts, a_img, answer)
{
	this.a_options = a_options;
	this.a_facts = a_facts;
	this.a_img = a_img;
	this.answer = answer;
};

// My Display Function
// --> This will create a prototype of the class 'Answers'
// --> in which display( ) will print from.
Answers.prototype.display = function()
{
	return this.a_options;
	return this.a_facts;
	return this.a_img;
	return this.answer;
};


// My Objects to be created by my Constructor Function 'Answers'
// --> I declare what the 'new' object will be defined as,
// --> and the constructor function 'Answers' is where all values
// --> for the 'new' object will be passed
var answer1 = new Answers(['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'], "Bill Self is 372-82 (.822) during his 14 years at the helm of Kansas.", "img/self.jpg", "Bill Self");
answer1.display();
var answer2 = new Answers(['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'], "Dr. James Naismith was the inventor of the game of basketball and sadly the only losing coach in KU history.", "img/naismith.jpg", "James Naismith");
var answer3 = new Answers(['1955', '1952', '1988', '2008', '2003'], "Named after long time coach Phog Allen this is the winningest building in all of sports and the Mecca of basketball.", "img/afh.jpg", "1955");
var answer4 = new Answers(['Hoch Auditorium', 'Budig Hall', 'Memorial Stadium', 'Allen Fieldhouse West', 'Madison Square Garden'], "Hoch Auditorium was struck by lightning in 1991. Only the lobby and limestone facade were spared. It would later become known as Budig Hall.", "img/hochaud.jpg", "Hoch Auditorium");
/* fix */ var answer5 = new Answers(['Rah, Rah, Jayhawk, KU', '', '', '', ''], "Bailey's version was 'Rah, Rah, Jayhawk, KU' repeated three times. The rahs were later replaced by 'Rock Chalk,'' a transposition of chalk rock, the name for the limestone outcropping found on Mount Oread, site of the Lawrence campus.", "__________", "Rah, Rah, Jayhawk, KU");
var answer6 = new Answers(['2008', '1988', '1952', '2003', '2012'], "In one of the greatest NCAA Title games to date the Jayhawks stormed back from 60-51 with two minutes left. Mario Chalmers triple with 2.1 seconds left sent the game to overtime where the Jayhawks would win 75-68 over the Memphis Tigers.", "img/2008.jpg", "2008");
var answer7 = new Answers(['E.H.S. Bailey', 'Phog Allen', 'Bill Self', 'James Naismith', 'Kanye West'], "In 1920 at the Olympic Games the King of Belgium asked for a typical American college yell. The athletes agreed on the KU's Rock Chalk and rendered it for His Majesty.", "img/bailey.jpg", "E.H.S. Bailey");
var answer8 = new Answers(['Wilt Chamberlain', 'Sherron Collins', 'Jacque Vaughn', 'Raef LaFrentz', 'Matt Klienmann'], "The 'Big Dipper' as his friends called him because of always having to dip his head to go through doorways is the only player in the NBA to ever scroe over 100 points in a game.", "img/wilt.jpg", "Wilt Chamberlain");
var answer9 = new Answers(['Alan the Maintenance Guy', 'Phog Allen', 'Woody Allen', 'Tim Allen', 'Ray Allen'], "Then the greatest coach of all time at Kansas, Phog Allen is a pinnacle in Jayhawk history and folklore.", "img/phogallen.jpg", "Phog Allen");
var answer10 = new Answers(['Pay Heed', 'Retired Numbers', 'Conference Titles', 'Kansas Jayhawks', 'Burn Misery to the ground!'], "The orignial Pay Heed banner constructed out of dormitory shower curtains by a group of students before a late-season game against the Duke Blue Devils in 1988. It is on display in the Booth Family Hall of Athletics Museum.", "img/beware.jpg", "Pay Heed");
/* fix */ var answer11 = new Answers(['Naismith Court', 'Phog Allen Court', "Roy's Floor", 'Bill Self Court', "Judge Judy's Court"], ".", "img/naismithcourt.jpg", "Naismith Court");
var answer12 = new Answers(['Mario Chalmers', 'Danny Manning', 'Sherron Collins', 'Jo Jo White', 'Brad Witherspoon'], "This time around it was Mario's Miracle that had the Jayhawks cutting down the nets in April.", "img/chalmers.jpg", "Mario Chalmers");
var answer13 = new Answers(['Missouri Tigers', 'Kansas State Wildcats', 'Iowa State Hawkeyes', 'Kentucky Wildcats', 'Kanye West'], "The hate between Kansas & Missouri's bitter rival spans all the way back to the days of the Bleeding Kansas & John Brown. Mention Quantrill's Raid in Lawrence if you want to see someone's blood boil.", "img/missouri.jpg", "Missouri Tigers");
var answer14 = new Answers(['The Border War', 'The Sunflower Showdown', 'The Iron Bowl', 'The Civil War', 'The Super Bowl'], "The oldest rivalry west of the Mississippi (1907). The Jayhawks & Tigers met 267 times until Misery decided to leave for the SEC, good to note though KU leads the rivalry 172-95.", "img/borderwar.jpg", "The Border War");
var answer15 = new Answers(['Danny Manning', 'Mario Chalmers', 'Tyler Self', 'Nick Collison', 'Clyde Lovellette'], "The 8 seed team that cut down the nets in 88' against the same Oklahoma Sooners that beat them twice in the regular season.", "img/manning.jpg", "Danny Manning");
var answer16 = new Answers(['Andrew Wiggins', 'Paul Pierce', 'Nick Collison', 'Wilt Chamberlain', 'Mario Chalmers'], "Wiggins went #1 to the Cleveland Cavaliers to then be traded for Kevin Love to the Minnesota Timberwolves where he'd become Rookie of the Year.", "img/wiggins.jpg", "Andrew Wiggins");
/* fix */ var answer17 = new Answers(['Manhattan, Kansas', 'The westside of Lawrence', 'Los Angeles, California', 'Madison Square Garden', 'Lexington, Kentucky'], "Bramlage Coliseum or Allen Fieldhouse West as it is known had not known of a home victory against the Jayhawks for the first 24 years it was open until Michael Beasley and Co. won in 2008.", "__________" ,"Manhattan, Kansas");
var answer18 = new Answers(['12', '9', '13', '4', '88'], "One win away from being tied with Wooden's UCLA Bruin's record 13 straight.", "img/12straight.jpg", "12");
/* fix */ var answer19 = new Answers();
/* fix */ var answer20 = new Answers();
