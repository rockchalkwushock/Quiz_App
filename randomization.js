// Array.prototype.shuffle = function() {
//     var input = this;
// 
//     for (var i = input.length-1; i >=0; i--) {
//
//         var randomIndex = Math.floor(Math.random()*(i+1));
//         var itemAtIndex = input[randomIndex];
//
//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }
//
// var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// tempArray.shuffle();
//
// // and the result is...
// alert(tempArray);


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
