//      task1
var PlayerOneChoice = prompt("Player One: Enter Rock, Paper or Scissors");
var PlayerTwoChoice = prompt("Player Two: Enter Rock, Paper or Scissors");

if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a tie");
}
else if (PlayerOneChoice === "rock" && PlayerTwoChoice === "paper") {
    console.log("player two wins");
}
else if (PlayerOneChoice === "paper" && PlayerTwoChoice === "rock") {
    console.log(" player one wins");
}
else if (PlayerOneChoice === "rock" && PlayerTwoChoice === "scissors") {
    console.log(" player one wins");
}
else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "rock") {
    console.log("player two wins");
}
else if (PlayerOneChoice === "paper" && PlayerTwoChoice === "scissors") {
    console.log("player two wins");
}
else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "paper") {
    console.log(" player one wins");
}
else {
    console.log("Invalid Choice");
      
}







/* task 2
var grade=Number(prompt("enter your grade "));

if(grade>=90)
{
    console.log("A");
    
}

if(grade>=80)
{
    console.log("B");
    
}

if(grade>=70)
{
    console.log("C");
    
}

if(grade>=60)
{
    console.log("D");
    
}

else
{
 console.log("fail");
}
*/
//-----------decleration-------------
/*
var name="yousef";
var age=20;
var isStudent=true;
var city;
var salary=null;


console.log(` my name is ${name} and my age ${age}  is studentb ? ${isStudent} `);
*/






