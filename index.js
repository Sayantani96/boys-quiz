var readlineSync = require("readline-sync");


var score=0;

//high scorers
var highScores=[{
  name:"Mousumi",
  score:5
},
 { 
   name:"Shraddha",
   score:5
  }];

//questions

var questions=[
  {
  question: "Transluscent's skin turns into what? ",
  answer:"Carbon meta-material"
},
{
question:"Latest Black Noire movie in VCU: ",
answer:"Insurrection"
 },
 {
   question:"Homelander can't see through which material? ",
   answer:"Zinc"
  },
{
   question:"Where does deep steals the dolphin from? ",
   answer:"Local Aquarium"
  },
{
   question:"Homelander real name? ",
   answer:"John Gillman"
  }]

function welcome(){
  var user=readlineSync.question("What is your name? ");
  console.log("Welcome"+user+"to The Boys quiz");
}

function play(question,answer){
   var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right answer");
    score++;
  }
  else{
    console.log("Wrong answer");
  }
   console.log("current score: ", score);
  console.log("-------------");
}

function game(questions){
  for(let i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
  }
}

function showScores(){
   console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score=>console.log(score.name, " : ", score.score));
}
welcome();
game(questions);
showScores();