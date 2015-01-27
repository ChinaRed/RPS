
var rock = document.getElementById('rock');
rock.style.visibility= "hidden";
var paper = document.getElementById('paper');
paper.style.visibility= "hidden";
var scissor = document.getElementById('scissor');
scissor.style.visibility= "hidden";

var result = document.getElementById("result");


var myArray = ["ROCK","PAPER","SCISSOR"];


function winner (submit){

  var user = document.getElementById('userInput').value.toUpperCase();

  var compRandom = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(user);

  if ( user === compRandom ){
    //alert("Tie Bitchessssssss!");
    result.innerHTML = "Tie Bitchessssssss";
    
  } else if (user === 'ROCK' && compRandom === 'SCISSOR' || user === 'SCISSOR' && compRandom === 'PAPER' || user === 'PAPER' && compRandom === 'ROCK'){
    result.innerHTML = "You're Winnerrrrrrrr";
      
  } else {
    result.innerHTML = "You Lose Suckaaaaaaaa";
        
  }
  if (compRandom === 'ROCK'){
    paper.style.visibility= "hidden";
    rock.style.visibility= "visible";
    scissor.style.visibility= "hidden";
  } else if (compRandom === 'PAPER'){
    paper.style.visibility= "visible";
    rock.style.visibility= "hidden";
    scissor.style.visibility= "hidden";
  } else {
    paper.style.visibility= "hidden";
    rock.style.visibility= "hidden";
    scissor.style.visibility= "visible";
  }
  console.log(compRandom);
}


