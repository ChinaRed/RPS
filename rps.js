var myArray = ["R","P","S"];
var compRandom = myArray[Math.floor(Math.random() * myArray.length)];

function winner (user){
  if ( user === compRandom ){
    alert("Tie Bitchessssssss!");
    } else if (user === 'R' && compRandom === 'S' || user === 'S' && compRandom === 'P' || user === 'P' && compRandom === 'R'){
      alert("You Winssssssss!");
      } else {
        alert("You Lose Suckerrrrrrr!");
      }
}