// let answerButton = document.getElementsByClassName('.button-answer');
// console.log(answerButton);
// answerButton.onclick = function() {
//   for (var i = 1; i < answerButton.length; i++) {
//     console.log('this');
//   }
// }


let testScore = 0;

document.querySelector('.question01').hidden = false;
document.querySelector('.question02').hidden = true;
document.querySelector('.question03').hidden = true;
document.querySelector('.question04').hidden = true;
document.querySelector('.question05').hidden = true;
document.querySelector('.question06').hidden = true;
document.querySelector('.question07').hidden = true;
document.querySelector('.question08').hidden = true;
document.querySelector('.question09').hidden = true;
document.querySelector('.question10').hidden = true;

document.querySelector('.results').hidden = false;

document.querySelector('.results_under-21').hidden = true;
document.querySelector('.results_21-30').hidden = true;
document.querySelector('.results_31-40').hidden = true;
document.querySelector('.results_41-50').hidden = true;
document.querySelector('.results_51-60').hidden = true;
document.querySelector('.results_over-60').hidden = true;



let answer1CClicked = false;
let answer1AClicked = false;
let answer1BClicked = false;

let answer2AClicked = false;
let answer2BClicked = false;
let answer2CClicked = false;
let answer2DClicked = false;
let answer2EClicked = false;

let answer3AClicked = false;
let answer3BClicked = false;
let answer3CClicked = false;
let answer3DClicked = false;
let answer3EClicked = false;

let answer4AClicked = false;
let answer4BClicked = false;
let answer4CClicked = false;
let answer4DClicked = false;

let answer5AClicked = false;
let answer5BClicked = false;
let answer5CClicked = false;
let answer5DClicked = false;

let answer6AClicked = false;
let answer6BClicked = false;
let answer6CClicked = false;

let answer7AClicked = false;
let answer7BClicked = false;
let answer7CClicked = false;

let answer8AClicked = false;
let answer8BClicked = false;
let answer8CClicked = false;
let answer8DClicked = false;
let answer8EClicked = false;
let answer8FClicked = false;
let answer8GClicked = false;

let answer9AClicked = false;
let answer9BClicked = false;
let answer9CClicked = false;
let answer9DClicked = false;
let answer9EClicked = false;

let answer10AClicked = false;
let answer10BClicked = false;
let answer10CClicked = false;
let answer10DClicked = false;
let answer10EClicked = false;
let answer10FClicked = false;


function function1CClicked() {
  answer1CClicked = true;
}
function function1BClicked() {
  answer1BClicked = true;
}
function function1AClicked() {
  answer1AClicked = true;
}


function function2AClicked() {
  answer2AClicked = true;
}
function function2BClicked() {
  answer2BClicked = true;
}
function function2CClicked() {
  answer2CClicked = true;
}
function function2DClicked() {
  answer2DClicked = true;
}
function function2EClicked() {
  answer2EClicked = true;
}


function function3AClicked() {
  answer3AClicked = true;
}
function function3BClicked() {
  answer3BClicked = true;
}
function function3CClicked() {
  answer3CClicked = true;
}
function function3DClicked() {
  answer3DClicked = true;
}
function function3EClicked() {
  answer3EClicked = true;
}


function function4AClicked() {
  answer4AClicked = true;
}
function function4BClicked() {
  answer4BClicked = true;
}
function function4CClicked() {
  answer4CClicked = true;
}
function function4DClicked() {
  answer4DClicked = true;
}


function function5AClicked() {
  answer5AClicked = true;
}
function function5BClicked() {
  answer5BClicked = true;
}
function function5CClicked() {
  answer5CClicked = true;
}
function function5DClicked() {
  answer5DClicked = true;
}


function function6AClicked() {
  answer6AClicked = true;
}
function function6BClicked() {
  answer6BClicked = true;
}
function function6CClicked() {
  answer6CClicked = true;
}


function function7AClicked() {
  answer7AClicked = true;
}
function function7BClicked() {
  answer7BClicked = true;
}
function function7CClicked() {
  answer7CClicked = true;
}


function function8AClicked() {
  answer8AClicked = true;
}
function function8BClicked() {
  answer8BClicked = true;
}
function function8CClicked() {
  answer8CClicked = true;
}
function function8DClicked() {
  answer8DClicked = true;
}
function function8EClicked() {
  answer8EClicked = true;
}
function function8FClicked() {
  answer8FClicked = true;
}
function function8GClicked() {
  answer8GClicked = true;
}


function function9AClicked() {
  answer9AClicked = true;
}
function function9BClicked() {
  answer9BClicked = true;
}
function function9CClicked() {
  answer9CClicked = true;
}
function function9DClicked() {
  answer9DClicked = true;
}
function function9EClicked() {
  answer9EClicked = true;
}


function function10AClicked() {
  answer10AClicked = true;
}
function function10BClicked() {
  answer10BClicked = true;
}
function function10CClicked() {
  answer10CClicked = true;
}
function function10DClicked() {
  answer10DClicked = true;
}
function function10EClicked() {
  answer10EClicked = true;
}
function function10FClicked() {
  answer10FClicked = true;
}





function calculateScore() {
    if (answer1AClicked == true) {
      testScore += 2;
      console.log(testScore);
  } else if (answer1BClicked == true) {
      testScore += 4;
      console.log(testScore);
  } else if (answer1CClicked == true) {
      testScore += 6;
      console.log(testScore);


  } else if (answer2AClicked == true) {
      testScore += 6;
      console.log(testScore);
  } else if (answer2BClicked == true) {
      testScore += 4;
      console.log(testScore);
  } else if (answer2CClicked == true) {
      testScore += 7;
      console.log(testScore);
  } else if (answer2DClicked == true) {
      testScore += 2;
      console.log(testScore);
  } else if (answer2EClicked == true) {
      testScore += 1;
      console.log(testScore);


    } else if (answer3AClicked == true) {
        testScore += 4;
        console.log(testScore);
    } else if (answer3BClicked == true) {
        testScore += 2;
        console.log(testScore);
    } else if (answer3CClicked == true) {
        testScore += 5;
        console.log(testScore);
    } else if (answer3DClicked == true) {
        testScore += 7;
        console.log(testScore);
    } else if (answer3EClicked == true) {
        testScore += 6;
        console.log(testScore);


  } else if (answer4AClicked == true) {
        testScore += 4;
        console.log(testScore);
    } else if (answer4BClicked == true) {
        testScore += 6;
        console.log(testScore);
    } else if (answer4CClicked == true) {
        testScore += 2;
        console.log(testScore);
    } else if (answer4DClicked == true) {
        testScore += 1;
        console.log(testScore);


    } else if (answer5AClicked == true) {
        testScore += 6;
        console.log(testScore);
    } else if (answer5BClicked == true) {
        testScore += 4;
        console.log(testScore);
    } else if (answer5CClicked == true) {
        testScore += 3;
        console.log(testScore);
    } else if (answer5DClicked == true) {
        testScore += 5;
        console.log(testScore);


      } else if (answer6AClicked == true) {
          testScore += 6;
          console.log(testScore);
      } else if (answer6BClicked == true) {
          testScore += 4;
          console.log(testScore);
      } else if (answer6CClicked == true) {
          testScore += 2;
          console.log(testScore);


      } else if (answer7AClicked == true) {
          testScore += 6;
          console.log(testScore);
      } else if (answer7BClicked == true) {
          testScore += 2;
          console.log(testScore);
      } else if (answer7CClicked == true) {
          testScore += 4;
          console.log(testScore);


      } else if (answer8AClicked == true) {
          testScore += 6;
          console.log(testScore);
      } else if (answer8BClicked == true) {
          testScore += 7;
          console.log(testScore);
      } else if (answer8CClicked == true) {
          testScore += 5;
          console.log(testScore);
      } else if (answer8DClicked == true) {
          testScore += 4;
          console.log(testScore);
      } else if (answer8EClicked == true) {
          testScore += 3;
          console.log(testScore);
      } else if (answer8FClicked == true) {
          testScore += 2;
          console.log(testScore);
      } else if (answer8GClicked == true) {
          testScore += 1;
          console.log(testScore);


    } else if (answer9AClicked == true) {
        testScore += 7;
        console.log(testScore);
    } else if (answer9BClicked == true) {
        testScore += 6;
        console.log(testScore);
    } else if (answer9CClicked == true) {
        testScore += 4;
        console.log(testScore);
    } else if (answer9DClicked == true) {
        testScore += 2;
        console.log(testScore);
    } else if (answer9EClicked == true) {
        testScore += 1;
        console.log(testScore);


    } else if (answer10AClicked == true) {
        testScore += 4;
        console.log(testScore);
    } else if (answer10BClicked == true) {
        testScore += 2;
        console.log(testScore);
    } else if (answer10CClicked == true) {
        testScore += 3;
        console.log(testScore);
    } else if (answer10DClicked == true) {
        testScore += 5;
        console.log(testScore);
    } else if (answer10EClicked == true) {
        testScore += 6;
        console.log(testScore);
    } else if (answer10FClicked == true) {
        testScore += 1;
        console.log(testScore);
    }
}




function nextPage() {
  if (answer1AClicked == true || answer1BClicked == true || answer1CClicked == true) {
    document.querySelector('.question01').hidden = true;
    document.querySelector('.question02').hidden = false;
    answer1AClicked = false;
    answer1BClicked = false;
    answer1CClicked = false;
  } else if (answer2AClicked == true || answer2BClicked == true || answer2CClicked == true || answer2DClicked == true || answer2EClicked == true ) {
    document.querySelector('.question02').hidden = true;
    document.querySelector('.question03').hidden = false;
    answer2AClicked = false;
    answer2BClicked = false;
    answer2CClicked = false;
    answer2DClicked = false;
    answer2EClicked = false;
  } else if (answer3AClicked == true || answer3BClicked == true || answer3CClicked == true || answer3DClicked == true || answer3EClicked == true ) {
    document.querySelector('.question03').hidden = true;
    document.querySelector('.question04').hidden = false;
    answer3AClicked = false;
    answer3BClicked = false;
    answer3CClicked = false;
    answer3DClicked = false;
    answer3EClicked = false;
  } else if (answer4AClicked == true || answer4BClicked == true || answer4CClicked == true || answer4DClicked == true ) {
    document.querySelector('.question04').hidden = true;
    document.querySelector('.question05').hidden = false;
    answer4AClicked = false;
    answer4BClicked = false;
    answer4CClicked = false;
    answer4DClicked = false;
  } else if (answer5AClicked == true || answer5BClicked == true || answer5CClicked == true || answer5DClicked == true ) {
    document.querySelector('.question05').hidden = true;
    document.querySelector('.question06').hidden = false;
    answer5AClicked = false;
    answer5BClicked = false;
    answer5CClicked = false;
    answer5DClicked = false;
  } else if (answer6AClicked == true || answer6BClicked == true || answer6CClicked == true ) {
    document.querySelector('.question06').hidden = true;
    document.querySelector('.question07').hidden = false;
    answer6AClicked = false;
    answer6BClicked = false;
    answer6CClicked = false;
  } else if (answer7AClicked == true || answer7BClicked == true || answer7CClicked == true ) {
    document.querySelector('.question07').hidden = true;
    document.querySelector('.question08').hidden = false;
    answer7AClicked = false;
    answer7BClicked = false;
    answer7CClicked = false;
  } else if (answer8AClicked == true || answer8BClicked == true || answer8CClicked == true || answer8DClicked == true || answer8EClicked == true || answer8FClicked == true || answer8GClicked == true) {
    document.querySelector('.question08').hidden = true;
    document.querySelector('.question09').hidden = false;
    answer8AClicked = false;
    answer8BClicked = false;
    answer8CClicked = false;
    answer8DClicked = false;
    answer8EClicked = false;
    answer8FClicked = false;
    answer8GClicked = false;
  } else if (answer9AClicked == true || answer9BClicked == true || answer9CClicked == true || answer9DClicked == true || answer9EClicked == true ) {
    document.querySelector('.question09').hidden = true;
    document.querySelector('.question10').hidden = false;
    answer9AClicked = false;
    answer9BClicked = false;
    answer9CClicked = false;
    answer9DClicked = false;
    answer9EClicked = false;
  } else if (answer10AClicked == true || answer10BClicked == true || answer10CClicked == true || answer10DClicked == true || answer10EClicked == true || answer10FClicked == true ) {
    document.querySelector('.question10').hidden = true;
    document.querySelector('.results').hidden = false;
    answer10AClicked = false;
    answer10BClicked = false;
    answer10CClicked = false;
    answer10DClicked = false;
    answer10EClicked = false;
    answer10FClicked = false;
    getResult();
  }
}

function getResult() {
  if ( testScore < 21 ) {
    document.querySelector('.results_under-21').hidden = false;
  } else if ( testScore >= 21 && testScore <= 30) {
    document.querySelector('.results_21-30').hidden = false;
  } else if ( testScore >= 31 && testScore <= 40) {
    document.querySelector('.results_31-40').hidden = false;
  } else if ( testScore >= 41 && testScore <= 50) {
    document.querySelector('.results_41-50').hidden = false;
  } else if ( testScore >= 51 && testScore <= 60) {
    document.querySelector('.results_51-60').hidden = false;
  } else if ( testScore > 60 ) {
    document.querySelector('.results_over-60').hidden = false;
  }
}
