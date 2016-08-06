// My constructor function & class 'Questions'.
// --> I am pasing my key-value pairs as parameter to teh function.
var Questions = function(q_text)
{
	this.q_text = q_text;
};

// My function for displaying the key-value pair 'q_text' in 'Questions' class.
Questions.prototype.displayQ = function()
{
	return this.q_text;
};

// My newObj created from class 'Questions'.
var question1 = new Questions("Who is the winningest coach at KU?");
// question1 has taken on the protoype class 'Questions' so it now has
// the property 'q_text' associated with it.
// Displays the key-value pair 'q_text' where 'q_text' has taken on the value
// passed through the constructor function 'Questions'.
question1.displayQ();



//#######################



// My constructor function & class 'Answers'
var Answers = function(a_options, a_facts, a_img, answer)
{
	this.a_options = a_options;
	this.a_facts = a_facts;
	this.a_img = a_img;
	this.answer = answer;
};

// My function for displaying the key-value pair 'a_options' in 'Answers' class.
Answers.prototype.displayA = function()
{
	return this.a_options;
	// return this.a_facts;
	// return this.a_img;
	// return this.answer;
};

// My newObj created from class 'Answers'
var answer1 = new Answers(['Bill Self', 'Phog Allen', 'Larry Brown', 'James Naismith', 'Roy Williams'], "Bill Self is 372-82 (.822) during his 14 years at the helm of Kansas.", "img/self.jpg", "Bill Self");
// answer1 has taken on the protoype class 'Answers' so it how has
// the properties 'Answers'.
// Displays the key-value pair 'a_options' where 'a_options' has taken on the value
// passed through the constructor function 'Answers'.
answer1.displayA();


