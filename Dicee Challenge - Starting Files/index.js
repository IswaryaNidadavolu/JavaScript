
var number = (Math.random());
var randomNumber1=(Math.floor(number*6))+1;

console.log(randomNumber1);

var random="dice" + randomNumber1 + ".png";

var randomImage= "images/" +random;
document.querySelectorAll("img") [0].setAttribute("src", randomImage);


var number2 = Math.random();
var randomNumber2=(Math.floor(number2*6))+1;

var Image2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img") [1].setAttribute("src", Image2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="player1 wins";

}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="player2 wins";
}
else {
    document.querySelector("h1").innerHTML="draw";
}