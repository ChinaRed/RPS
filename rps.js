
var rock = document.getElementById('rock');
rock.style.visibility= "hidden";
var paper = document.getElementById('paper');
paper.style.visibility= "hidden";
var scissor = document.getElementById('scissor');
scissor.style.visibility= "hidden";


var rock2 = document.getElementById('rock2');
rock2.style.visibility= "visible";
var paper2 = document.getElementById('paper2');
paper2.style.visibility= "visible";
var scissor2 = document.getElementById('scissor2');
scissor2.style.visibility= "visible";



var result = document.getElementById("result");


var myArray = ["ROCK","PAPER","SCISSOR"];


function winner (){

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

  if (user === 'ROCK'){
    paper2.style.visibility= "hidden";
    rock2.style.visibility="visible";
    scissor2.style.visibility= "hidden";
  } else if (user === 'PAPER'){
    paper2.style.visibility= "visible";
    rock2.style.visibility="hidden";
    scissor2.style.visibility= "hidden";
  } else {
    paper2.style.visibility= "hidden";
    rock2.style.visibility="hidden";
    scissor2.style.visibility= "visible";
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


