
var readline = require("readline-sync");
console.log("\nWelcome to my mini quiz game  for the movie -3 idiots.");


var username = readline.question("enter your name?");
console.log("Welcome " + username);

console.log("1)5 Question will be asked on any movie.")
console.log("2)Out of 4 option You have to choose.")
console.log("3)Correct answer will increment score by 1.")
console.log("4)Incorrect answer will decrement score by 1.")
console.log("")
console.log("")
console.log("Lets Start the Game....")
console.log("")
//console.log(typeof(username));

var score = 0, flag = 0;

var high_scores =
  [
    {
      name: 'Chetan',
      score: 4,
    },
    {
      name: 'Ravi',
      score: 5,
    },
    {
      name: 'Hrushi',
      score: 4,
    },
    {
      name: 'Bala',
      score: 3,
    },
    {
      name: 'Shubham',
      score: 4,
    }
  ]



arr_questions =
  [
    question1 = {
    question:"Who is the director of 3 Idiots?",
     answer:2,
    option:["Priyadarshan","S. Shankar","RajKumar hirani","AR Murugadoss"]

    },

    question2 = {
      question:"What's the Real name of virus in 3 idiots?",
      answer:3,
    option:["Jimmy Shergil","KK Menon","Omi vaidy","Boman Irani"]

    },

    question3 = {
      question:"Who changes speech script of Chatur?",
answer:3,
option:["Raju","milimeter","Farhan","rancho"]

    },

    question4 =
    {
      question:"What's the Real name of Amir Khan in 3 idiots Film?",
answer:2,
option:["Ranchoddas Chanchad","Amar","Phunksukh Vangdu","Rancho"]
    },

    question5 = {
      question:"What did everyone was calling to the boy who was taking care hostel stuffs?",
answer:0,
option:["milimeter","centimeter","nanometer","kilometer"]
    }

  ]

function listoptions(option)
{
  console.log("Options are=")
  for(let i=0;i<option.length;i++)
    {
      console.log(i+1+") "+option[i]);
    }
  console.log("");
}
function play(question, answer,option) {
  console.log(question)
  listoptions(option)
  var useranswer = readline.question("Enter Your Choice=");
  console.log("you entered = ", useranswer)
  if (answer=== (useranswer-1)) {
    console.log("Yes you are right!");
    score++;
    console.log("current score is = ", score);
  }
  else {
    console.log("Oops! Your answer is wrong");
    score--;
    console.log("current score is = ", score);
  }

}

//console.log(arr_questions.length);
for (i = 0; i < arr_questions.length; i++) {
  console.log("*****Question"+(i+1)+"****");
  play(arr_questions[i].question, arr_questions[i].answer,arr_questions[i].option);
  console.log("")
  
}
// play(question2,answer2);
console.log("Thanks for playing!\n Your final score =", score);



for (i = 0; i < high_scores.length; i++) {
  if (score >= high_scores[i].score)
    flag = 1
  else
    flag = 0
}


if (flag === 1) {
  console.log("\nCongratulations ,You have one of high scores now")
  console.log("\nPrevios high scores are \n", high_scores)
  high_scores.push({ name: username, score: score });
  console.log("\nupdated high scores--\n", high_scores)
}

else {
  console.log("\n\nNice try :) Your score was = ", score, "\n Try again ");
  console.log("\nPrevios high scores = \n", high_scores)
}
