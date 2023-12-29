
function rollTheDice(){
document.querySelector("h1").style.display="block";
function randomNumberGenerator(){
    var randomNumber=Math.random();
    randomNumber*=6;
    return Math.floor(randomNumber+1);
}
var leftDiceNumber=randomNumberGenerator();
switch(leftDiceNumber){
    case 1:
       document.querySelector(".img1").setAttribute("src","./images/dice1.png");
       break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break; 
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;     
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;   
    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;            
}
var rightDiceNumber=randomNumberGenerator();
switch(rightDiceNumber){
    case 1:
       document.querySelector(".img2").setAttribute("src","./images/dice1.png");
       break;
    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        break; 
    case 3:
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        break;     
    case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        break;   
    case 6:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        break;            
}
var title=document.querySelector("h1");
if(leftDiceNumber>rightDiceNumber){
        title.innerHTML=" 🚩 Player 1 wins";
}
else if(rightDiceNumber>leftDiceNumber){
    title.innerHTML=" 🚩 Player 2 wins";
}
else{
    title.innerHTML=" 😊 Draw";
}
}
document.querySelector("button").addEventListener("click",rollTheDice);
