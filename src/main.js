// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

function question0(array) {
  return array.filter((item) => {
    return item % 2 === 0;
  })
}

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

function question1(array) {
  let result = [];
  array.map((item) => {
    if (item * 2 > 12) {
      result.push(item *= 2);
    }
  })
  return result;
}

// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."

function question2(array) {
  return array.map((item) => {
    switch (item) {
      case 'Mon':
        return "I hate Mondays more than Garfield.";
        break;
      case 'Fri':
        return "Almost there...";
        break;
      case 'Sat':
        return "Yay, it's the weekend!"
        break;
      case 'Sun':
        return "Yay, it's the weekend!"
        break;
      default:
        return "Everybody's working for the weekend.";
    }
  })
}
module.exports = {
  question0,
  question1,
  question2
}
