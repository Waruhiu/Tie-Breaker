var player1="player 1";
document.querySelector("#p1").innerHTML=player1;
var player2="player 2";
document.querySelector("#p2").innerHTML=player2;

document.querySelector("#play").addEventListener("click", randomizer);
document.querySelector("#edit").addEventListener("click", names);r

function randomizer(){
randomNumber1=(Math.floor(Math.random()*6)+1);
randomNumber2=(Math.floor(Math.random()*6)+1);
if(randomNumber1==1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1==2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1==3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1==4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1==5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if(randomNumber1==6){
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
if(randomNumber2==1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2==2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2==3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2==4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2==5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if(randomNumber2==6){
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=("🎉 "+player1+" is the winner");
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=("🎉"+player2+" is the winner");
}
else if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML=("😬Looks like a draw");
}

}
function names(){
  player1=prompt("What should we call player 1?");
    if(player1===""){
    player1="player 1";
  }
  document.querySelector("#p1").innerHTML=player1;
  player2=prompt("What should we call player 2?");
  if(player2===""){
    player2="Player 2";
  }
  document.querySelector("#p2").innerHTML=player2;
}
