document.getElementById('rock').style.visibility= "hidden";
document.getElementById('paper').style.visibility= "hidden";
document.getElementById('scissor').style.visibility= "hidden";

var myArray = ["R","P","S"];

function winner (submit){
  var user = document.getElementById('submit').value.toUpperCase();
  var compRandom = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(user);

  if ( user === compRandom ){
    alert("Tie Bitchessssssss!");
    
  } else if (user === 'ROCK' && compRandom === 'S' || user === 'SCISSOR' && compRandom === 'P' || user === 'PAPERf' && compRandom === 'R'){
    alert("You Winssssssss!");
      
  } else {
    alert("You Lose Suckerrrrrrr!");
        
  }
  if (compRandom === 'R'){
    document.getElementById('paper').style.visibility= "hidden";
    document.getElementById('rock').style.visibility= "visible";
    document.getElementById('scissor').style.visibility= "hidden";
  } else if (compRandom === 'P'){
    document.getElementById('paper').style.visibility= "visible";
    document.getElementById('rock').style.visibility= "hidden";
    document.getElementById('scissor').style.visibility= "hidden";
  } else {
    document.getElementById('paper').style.visibility= "hidden";
    document.getElementById('rock').style.visibility= "hidden";
    document.getElementById('scissor').style.visibility= "visible";
  }
  console.log(compRandom);
}